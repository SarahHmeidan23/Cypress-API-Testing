/// <reference types= "cypress" />
describe("API Testing", () => {
  const firstNames = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Frank",
    "Grace",
    "Hannah",
    "Ivy",
    "Jack",
  ];
  const lastNames = [
    "Smith",
    "Johnson",
    "Brown",
    "Davis",
    "Wilson",
    "Taylor",
    "Anderson",
    "Moore",
    "Jackson",
    "Perez",
  ];
  const RandomFullNames =
    Math.floor(Math.random() * firstNames.length) +
    Math.floor(Math.random() * lastNames.length);
  const RandomISBN = Math.floor(Math.random() * 13330);
  const RandomAISLE = Math.floor(Math.random() * 14440);
  it("Test POST Method", () => {
    const requestBody = {
      name: "Qa private Zoom",
      isbn: RandomISBN,
      aisle: RandomAISLE,
      author: RandomFullNames,
    };
    cy.request({
      method: "POST",
      url: "https://rahulshettyacademy.com/Library/Addbook.php",
      body: requestBody,
    }).then((Response) => {
      cy.log(Response.status);
      cy.log(Response.body);
      expect(Response.status).to.eq(200);
      expect(Response.body.Msg).to.eq("successfully added");
    });
  });
  it.skip("Test GET Method", () => {
    cy.request({
      method: "GET",
      url: `https://rahulshettyacademy.com/Library//GetBook.php?ID=${RandomISBN}${RandomAISLE}`,
    }).then((Response) => {
      cy.log(Response.body[0].book_name);
      expect(Response.status).to.eq(200);
      expect(Response.body[0].author).to.eq(RandomFullNames);
    });
  });
  it.skip("Test DELETE Method", () => {
  
    cy.request({
      method: "DELETE",
      url: "https://rahulshettyacademy.com/Library/DeleteBook.php",
      body: { ID: RandomISBN + RandomAISLE }
    }).then((Response)=>{
      expect(Response.status).to.eq(200);
      expect(Response.body.Msg).to.eq("book is successfully deleted")
    })
  });
});
