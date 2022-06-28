const { DocumentClient } = require("aws-sdk/clients/dynamodb");

const isTest = process.env.JEST_WORKER_ID;
const config = {
  convertEmptyValues: true,
  ...(isTest && {
    endpoint: "localhost:8000",
    sslEnabled: false,
    region: "local-env",
  }),
};

const ddb = new DocumentClient(config);

it("should insert item into table, edit and get", async () => {
  await ddb
    .put({ TableName: "users", Item: { userId: "1", name: "world" } })
    .promise();

  const { Item } = await ddb
    .get({ TableName: "users", Key: { userId: "1" } })
    .promise();

  expect(Item).toEqual({
    userId: "1",
    name: "world",
  });
});

it("should  delete item", async () => {
  await ddb
    .put({ TableName: "users", Item: { userId: "1", name: "world" } })
    .promise();

  const { Item } = await ddb
    .delete({ TableName: "users", Key: { userId: "1" } })
    .promise();

  expect(Item).toEqual(undefined);
});
