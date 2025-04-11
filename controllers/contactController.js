const {
  createContact,
  updateContact
} = require("../services/salesforceService");

/**
 * Controller to simulate syncing contact data from Zeotap to Salesforce
 * It checks if a contact ID is provided. If yes, it simulates an update.
 * If no ID is given, it simulates creating a new contact.
 */
const syncContact = async (req, res) => {
  try {
    const { id, ...contactDetails } = req.body;

    if (id) {
      // Update scenario
      const updateData = {
        id,
        fieldsToUpdate: contactDetails
      };
      const response = await updateContact(updateData);
      return res.status(response.status).json({
        message: response.message,
        action: "Contact updated"
      });
    } else {
      // Create scenario
      const response = await createContact(contactDetails);
      return res.status(response.status).json({
        ...response.data,
        action: "Contact created"
      });
    }
  } catch (error) {
    console.error("Error in syncContact controller:", error);
    return res.status(500).json({
      message: "Internal server error while syncing contact."
    });
  }
};

module.exports = {
  syncContact
};
