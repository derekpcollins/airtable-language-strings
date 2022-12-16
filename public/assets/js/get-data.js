const table = require("../helpers/airtable-auth");

async function getData() {
  const records = await table
    .select({
      view: "Grid view",
    })
    .firstPage();

  const formattedRecords = await records.map((record) => ({
    id: record.id,
    ...record.fields,
  }));

  return formattedRecords;
}

module.exports = async (req, res) => {
  try {
    res.send(await getData());
  } catch (err) {
    res.send(err);
  }
};
