const {
  createContact,
  updateContact,
  getAccessToken
} = require("../services/salesforceService");

describe("Salesforce Service (Mocked)", () => {
  test("should return a dummy access token", async () => {
    const token = await getAccessToken();
    expect(token).toHaveProperty("access_token");
    expect(token.access_token).toBe("dummy-access-token");
  });

  test("should simulate contact creation", async () => {
    const response = await createContact({
      FirstName: "Test",
      LastName: "User",
      Email: "test.user@example.com",
      Phone: "+911234567890"
    });
    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty("id");
  });

  test("should simulate contact update", async () => {
    const response = await updateContact({
      id: "0035g00001QWdA2AAL",
      fieldsToUpdate: { Phone: "+918888888888" }
    });
    expect(response.status).toBe(204);
  });
});
