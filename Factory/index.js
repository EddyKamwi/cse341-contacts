const Contact = require("../modules/Contact");

async function main(data) {
    
    const results = await Contact.createMany(data);
    console.log(results)
}
const data = [
    {
      "firstName": "Emily",
      "lastName": "Clark",
      "email": "emily.clark@yahoo.com",
      "favoriteColor": "teal",
      "birthday": "03/15/92"
    },
    {
      "firstName": "James",
      "lastName": "Rodriguez",
      "email": "james.rodriguez@outlook.com",
      "favoriteColor": "navy",
      "birthday": "11/22/85"
    },
    {
      "firstName": "Sophia",
      "lastName": "Kim",
      "email": "sophiakim23@gmail.com",
      "favoriteColor": "coral",
      "birthday": "07/04/99"
    },
    {
      "firstName": "Ethan",
      "lastName": "Patel",
      "email": "ethan.patel@protonmail.com",
      "favoriteColor": "black",
      "birthday": "09/30/78"
    },
    {
      "firstName": "Isabella",
      "lastName": "Morales",
      "email": "isabella.m@hotmail.com",
      "favoriteColor": "lavender",
      "birthday": "02/14/02"
    },
    {
      "firstName": "Liam",
      "lastName": "Nguyen",
      "email": "liam.nguyen@workmail.com",
      "favoriteColor": "forestgreen",
      "birthday": "05/05/88"
    },
    {
      "firstName": "Ava",
      "lastName": "Schmidt",
      "email": "ava.schmidt@icloud.com",
      "favoriteColor": "gold",
      "birthday": "12/25/95"
    },
    {
      "firstName": "Noah",
      "lastName": "Santos",
      "email": "noah.santos01@gmail.com",
      "favoriteColor": "maroon",
      "birthday": "08/17/83"
    },
    {
      "firstName": "Mia",
      "lastName": "Foster",
      "email": "miafoster@edu.com",
      "favoriteColor": "turquoise",
      "birthday": "10/31/00"
    },
    {
      "firstName": "Oliver",
      "lastName": "Chowdhury",
      "email": "oliver.chow@business.com",
      "favoriteColor": "salmon",
      "birthday": "04/09/91"
    }
]
main(data);