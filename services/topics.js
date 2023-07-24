const kafka = require("../config/kafka");

const getTopics = async () => {
  const admin = kafka.admin();
  await admin.connect();
  const topics = await admin.listTopics();
  await admin.disconnect();
  return topics;
};

// Other Kafka-related service functions can be added here

module.exports = {
  getTopics,
};