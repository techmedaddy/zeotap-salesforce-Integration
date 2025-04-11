// Sample payload for creating a Contact in Salesforce
const createContactRequest = {
  FirstName: "Amit",
  LastName: "Sharma",
  Email: "amit.sharma@example.com",
  Phone: "+919999888877",
  MailingStreet: "123 Zeotap Street",
  MailingCity: "Bangalore",
  MailingState: "Karnataka",
  MailingPostalCode: "560001",
  MailingCountry: "India"
};

// Expected response from Salesforce after successful creation
const createContactResponse = {
  id: "0035g00001QWdA2AAL",
  success: true,
  errors: []
};

// Sample payload for updating a Contact (identified by Salesforce ID)
const updateContactRequest = {
  id: "0035g00001QWdA2AAL",
  fieldsToUpdate: {
    Phone: "+919888777666",
    MailingCity: "Mumbai"
  }
};

// Expected response from Salesforce after a successful update (no body, just status code 204)
const updateContactResponse = {
  status: 204,
  message: "No Content - Contact successfully updated."
};

// Exporting all payloads
module.exports = {
  createContactRequest,
  createContactResponse,
  updateContactRequest,
  updateContactResponse
};
