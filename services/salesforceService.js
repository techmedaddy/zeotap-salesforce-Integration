const axios = require("axios");
const dotenv = require("dotenv");
const {
  createContactRequest,
  updateContactRequest,
  createContactResponse,
  updateContactResponse
} = require("../sample/payloads");

dotenv.config();

const SALESFORCE_BASE_URL = process.env.SALESFORCE_BASE_URL || "https://your-instance.salesforce.com";
const CLIENT_ID = process.env.CLIENT_ID || "dummy-client-id";
const CLIENT_SECRET = process.env.CLIENT_SECRET || "dummy-client-secret";
const USERNAME = process.env.USERNAME || "dummy-username";
const PASSWORD = process.env.PASSWORD || "dummy-password";

// Simulate obtaining OAuth token
async function getAccessToken() {
  console.log("Simulating OAuth 2.0 flow...");

  // Normally you'd send a POST request to Salesforce token URL
  // For simulation, we return a dummy token
  return {
    access_token: "dummy-access-token",
    instance_url: SALESFORCE_BASE_URL
  };
}

// Simulate creating a new Contact in Salesforce
async function createContact(contactData = createContactRequest) {
  const { access_token, instance_url } = await getAccessToken();

  console.log("Simulating POST /sobjects/Contact with data:", contactData);

  // Simulated response from Salesforce
  return {
    status: 201,
    data: createContactResponse
  };
}

// Simulate updating an existing Contact in Salesforce
async function updateContact(updateData = updateContactRequest) {
  const { access_token, instance_url } = await getAccessToken();

  console.log(`Simulating PATCH /sobjects/Contact/${updateData.id} with fields:`, updateData.fieldsToUpdate);

  // Simulated response from Salesforce
  return {
    status: updateContactResponse.status,
    message: updateContactResponse.message
  };
}

module.exports = {
  getAccessToken,
  createContact,
  updateContact
};
