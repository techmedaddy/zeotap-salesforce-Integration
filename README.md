# Zeotap ↔ Salesforce Contact Integration (Simulation)

This project simulates an integration between **Zeotap** and **Salesforce Service Cloud**, specifically focusing on the **Contact** object. Built using **Node.js** and **Express**, it demonstrates how to sync customer contact data using Salesforce APIs.

---

## 📌 Use Case and Goals

The purpose of this integration is to **sync customer profile data from Zeotap to Salesforce**, ensuring that contact records in Salesforce are always up-to-date. This helps sales and support teams access the latest customer information.

---


## 🧩 System Design

![WhatsApp Image 2025-04-11 at 14 26 06_f3a29a02](https://github.com/user-attachments/assets/1b3de590-f7d7-4608-a971-92cb954aa88e)


## 🔁 Data Flow Overview

1. A user’s contact information is updated in Zeotap.
2. Zeotap triggers an API call to our backend service.
3. The backend service authenticates with Salesforce.
4. It then creates or updates the Contact object in Salesforce via its REST API.

---

## 🔐 Authentication Method

This integration uses **OAuth 2.0 (Resource Owner Password Credentials Grant)** to authenticate with Salesforce.

### Steps to obtain access token:
1. Make a `POST` request to:  
   `https://login.salesforce.com/services/oauth2/token`
2. Include the following params in `x-www-form-urlencoded`:
   - `grant_type=password`
   - `client_id`
   - `client_secret`
   - `username`
   - `password`
3. Salesforce returns an `access_token` and `instance_url`, used in subsequent API calls.

---

## 📌 Key Salesforce Endpoints

| Action   | Method | Endpoint |
|----------|--------|----------|
| Create Contact | `POST` | `/services/data/vXX.X/sobjects/Contact/` |
| Update Contact | `PATCH` | `/services/data/vXX.X/sobjects/Contact/{ContactId}` |
| Get Token | `POST` | `https://login.salesforce.com/services/oauth2/token` |

> Replace `vXX.X` with your Salesforce API version (e.g., `v59.0`)

---

## 📥 Sample Requests and Responses

### ✅ Create Contact - Request (from Zeotap)

```json
{
  "FirstName": "Amit",
  "LastName": "Sharma",
  "Email": "amit.sharma@example.com",
  "Phone": "+919999888877"
}
```

### ✅ Create Contact - Simulated Salesforce Response

```json
{
  "id": "0035g00001QWdA2AAL",
  "success": true,
  "errors": []
}
```

### ✏️ Update Contact - Request

```json
{
  "id": "0035g00001QWdA2AAL",
  "Phone": "+917777666555",
  "MailingCity": "Mumbai"
}
```


### ✏️ Update Contact - Simulated Salesforce Response

```json
{
  "status": 204,
  "message": "No Content - Contact successfully updated."
}
```

## ⚠️ Common Errors, Rate Limits, and Required Fields

### 🔧 Required Fields
- `LastName` is mandatory when creating a contact.

### ❌ Common API Errors
- `400 Bad Request` – Missing required fields.
- `401 Unauthorized` – Invalid token or expired session.
- `404 Not Found` – Wrong contact ID for update.

### 🚦 Rate Limits (per Salesforce documentation)
- 100 API calls per user per 24-hour rolling window (free developer edition).
- Bulk limits apply for large operations.


## 🧪 Testing (Jest)

Basic unit tests included under `__tests__/salesforceService.test.js` using Jest.

Run with:
```bash
npm test
```

![WhatsApp Image 2025-04-11 at 15 58 31_51584986](https://github.com/user-attachments/assets/1fc180e9-171e-42dc-ba13-9d599c9dadfb)


## 📎 Assumptions and Edge Cases

- A contact is assumed to exist in Salesforce if an `id` is provided.
- If no `id` is provided, a new contact is created.
- This simulation assumes perfect data; in a real-world scenario, duplicate detection logic would be needed.
- No retry logic for failed API calls is implemented in this simulation.

## 🛠️ Tech Stack

- **Backend**: Node.js, Express  
- **HTTP Client**: Axios  
- **Environment Config**: dotenv  
- **Mock Data**: JSON payloads  
- **Deployment**: Render

## ▶️ How to Run Locally

### 1. Clone the repo:
```bash
git clone https://github.com/your-username/zeotap-salesforce-integration.git
cd zeotap-salesforce-integration
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Create a `.env` file:
```env
PORT=48753
CLIENT_ID=dummy-client-id
CLIENT_SECRET=dummy-client-secret
USERNAME=dummy-user@example.com
PASSWORD=dummy-password123
SALESFORCE_BASE_URL=https://dummy-instance.salesforce.com
```
### 4. Start the server:
```bash
npm run dev
```

## 📫 API Endpoint

**POST** `/api/sync-contact`  
Handles both contact creation and update depending on presence of `id`.



## 📌 Deployment (Render)

1. Push project to GitHub.
2. Connect repo to [Render.com](https://render.com).
3. Set the following environment variables:
   - `PORT`, `CLIENT_ID`, `CLIENT_SECRET`, `USERNAME`, `PASSWORD`, `SALESFORCE_BASE_URL`
4. Build command: `npm install`  
   Start command: `npm start`
5. Click **“Deploy Web Service”**.

## 📂 Folder Structure

```bash
zeotap-salesforce-integration/
├── app.js
├── .env
├── .gitignore
├── package.json
├── README.md
├── routes/
│   └── contact.js
├── controllers/
│   └── contactController.js
├── services/
│   └── salesforceService.js
├── sample/
│   └── payloads.js
```
---

> 📝 **Note**: This project is a simulation and does not connect to a live Salesforce instance. It is designed to demonstrate API integration structure, flow, and logic for assessment purposes.
