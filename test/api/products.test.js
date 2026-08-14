const { spec } = require("pactum");
const { faker } = require("@faker-js/faker");

let token;
beforeEach(async () => {
  token = await spec()
    .post("http://lojaebac.ebaconline.art.br/public/authUser")
    .withJson({
      email: "admin@admin",
      password: "admin123",
    })
    .returns("data.token");
});

it("API - Deve adicionar um produto", async () => {
  const productName = faker.commerce.product();

  await spec()
    .post("http://lojaebac.ebaconline.art.br/api/addProduct")
    .withHeaders("Authorization", token)
    .withJson({
      name: productName,
      price: 20.0,
      quantity: 1,
    })
    .expectStatus(200)
    .expectJson("success", true);
});

let id;
it("API - Deve deletar um produto", async () => {
  id = await spec()
    .get("http://lojaebac.ebaconline.art.br/public/getProducts")
    .withHeaders("Authorization", token)
    .returns("products[1]._id");

  await spec()
    .delete(`http://lojaebac.ebaconline.art.br/api/deleteProduct/${id}`)
    .withHeaders("Authorization", token)
    .expectStatus(200)
    .expectJson("success", true);
});

it("API - Deve editar um produto", async () => {
  const productName = faker.commerce.product();

  id = await spec()
    .get("http://lojaebac.ebaconline.art.br/public/getProducts")
    .withHeaders("Authorization", token)
    .returns("products[2]._id");

  await spec()
    .put(`http://lojaebac.ebaconline.art.br/api/editProduct/${id}`)
    .withHeaders("Authorization", token)
    .withJson({
      name: productName,
      price: 10.0,
      quantity: 500,
    })
    .expectStatus(200)
    .expectJson("success", true);
});
