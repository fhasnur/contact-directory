import supertest from "supertest";
import { web } from "../src/application/web";
import { ContactTest, UserTest } from "./test-util";
import { logger } from "../src/application/logging";

describe('POST /api/contacts', () => {

  beforeEach(async () => {
    await UserTest.create();
  });

  afterEach(async () => {
    await ContactTest.deleteAll();
    await UserTest.delete();
  });

  it('should create new contact', async () => {
    const response = await supertest(web)
      .post("/api/contacts")
      .set("X-API-TOKEN", "test")
      .send({
        first_name: "fandi",
        last_name: "hasnur",
        email: "fandi@example.com",
        phone: "081234567890"
      });

    logger.debug(response.body);
    expect(response.status).toBe(200);
    expect(response.body.data.id).toBeDefined();
    expect(response.body.data.first_name).toBe("fandi");
    expect(response.body.data.last_name).toBe("hasnur");
    expect(response.body.data.email).toBe("fandi@example.com");
    expect(response.body.data.phone).toBe("081234567890");
  });


  it('should reject create new contact if data is invalid', async () => {
    const response = await supertest(web)
      .post("/api/contacts")
      .set("X-API-TOKEN", "test")
      .send({
        first_name: "",
        last_name: "",
        email: "fandi",
        phone: "081234567890234567890234567890"
      });

    logger.debug(response.body);
    expect(response.status).toBe(400);
    expect(response.body.errors).toBeDefined();
  });

});