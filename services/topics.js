const kafka = require("../config/kafka");

const getTopics = async () => {
  const admin = kafka.admin();
  await admin.connect();
  const topics = await admin.listTopics();
  await admin.disconnect();
  return topics;
};

async function createTopic(topicName) {
  const admin = kafka.admin();
  try {
    await admin.connect();
    await admin.createTopics({
      topics: [
        {
          topic: topicName,
          numPartitions: 1,
          replicationFactor: 1,
        },
      ],
    });
    console.log(`Topic "${topicName}" created successfully.`);
  } catch (error) {
    console.error(`Failed to create topic "${topicName}": ${error.message}`);
    throw error;
  } finally {
    await admin.disconnect();
  }
}


module.exports = {
  getTopics,
  createTopic,
};
