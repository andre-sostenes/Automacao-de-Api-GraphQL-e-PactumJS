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

it("API - Deve adicionar uma categoria", async () => {
  const newCategory = faker.lorem.word(6);

  await spec()
    .post("http://lojaebac.ebaconline.art.br/api/addCategory")
    .withHeaders("Authorization", token)
    .withJson({
      name: newCategory,
      photo:
        "https://www.zipmaster.com/wpcontent/uploads/2022/04/Reusable-Cloth-Shopping-Bags-RainbowPack-200-Case-Reusable-Bags-B26-061-3-1000x1000.jpg.webp",
    })
    .expectStatus(200)
    .expectJson("success", true);
});

let id;
it("API - Deve deletar uma categoria", async () => {
  id = await spec()
    .get("http://lojaebac.ebaconline.art.br/public/getCategories")
    .withHeaders("Authorization", token)
    .returns("categories[1]._id");

  await spec()
    .delete(`http://lojaebac.ebaconline.art.br/api/deleteCategory/${id}`)
    .withHeaders("Authorization", token)
    .expectStatus(200)
    .expectJson("success", true);
});

it("API - Deve editar uma categoria", async () => {
  const newCategory = faker.lorem.word();
  id = await spec()
    .get("http://lojaebac.ebaconline.art.br/public/getCategories")
    .withHeaders("Authorization", token)
    .returns("categories[2]._id");

  await spec()
    .put(`http://lojaebac.ebaconline.art.br/api/editCategory/${id}`)
    .withHeaders("Authorization", token)
    .withJson({
      name: newCategory,
      photo: null,
    })
    .expectStatus(200)
    .expectJson("success", true);
});
