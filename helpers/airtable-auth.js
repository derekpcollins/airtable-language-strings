require("dotenv").config();

var Airtable = require("airtable");
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_ACCESS_TOKEN,
});
var base = Airtable.base(process.env.AIRTABLE_BASE_ID);
var table = base(process.env.AIRTABLE_TABLE_ID);

console.log(table);
