/// <reference types= "cypress" />
describe("API Testing", () => {
  const RandomISBN = Math.floor(Math.random() * 13330);
  const RandomAISLE = Math.floor(Math.random() * 14440);
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
  const RandomFirstNames = Math.floor(Math.random() * firstNames.length);
  const RandomLastNames = Math.floor(Math.random() * lastNames.length);
  const RandomAuthor = firstNames[RandomFirstNames] + " " + lastNames[RandomLastNames];
  const bookNames = [
    "Test-Driven Development in Practice",
    "The QA Tester's Handbook",
    "Quality Assurance Essentials",
    "Testing for Success",
    "Agile Testing Strategies",
    "The Art of Software Testing",
    "Quality Control in Action",
    "Automated Testing Mastery",
    "Testing Scenarios Unleashed",
    "Bug Hunting Adventures",
  ];

  const RandomBookNames = Math.floor(Math.random() * bookNames.length);

  it("Test POST Method", () => {
    const requestBody = {
      name: "Qa private Zoom",
      isbn: RandomISBN,
      aisle: RandomAISLE,
      author: RandomAuthor,
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
  it("Test GET Method", () => {
    cy.request({
      method: "GET",
      url: `https://rahulshettyacademy.com/Library//GetBook.php?ID=${RandomISBN}${RandomAISLE}`,
    }).then((Response) => {
      cy.log(Response.body[0].book_name);
      cy.log(Response.body[0].author);
      expect(Response.status).to.eq(200);
      expect(Response.body[0].author).to.eq(RandomAuthor);
    });
  });
  it("Test Delete Method", () => {
    let RequestBody = {
      ID: `${RandomISBN}${RandomAISLE}`,
    };
    cy.request({
      method: "DELETE",
      url: "https://rahulshettyacademy.com/Library/DeleteBook.php",
      body: RequestBody,
    }).then((Response) => {
      cy.log(Response.status);
      cy.log(Response.body);
      expect(Response.status).to.eq(200);
      expect(Response.body.msg).to.eq("book is successfully deleted");
    });
  });
});
