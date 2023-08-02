const kafkaService = require("../services/topics");

const listTopics = async (req, res) => {
  try {
    const topics = await kafkaService.getTopics();
    res.json({ topics });
  } catch (error) {
    console.error("Error fetching topics:", error);
    res.status(500).json({ error: "Error fetching topics" });
  }
};

const createTopic = async (req, res) => {
  try {
    const { topicName } = req.body;

    if (!topicName || typeof topicName !== 'string') {
      return res.status(400).json({ error: 'Invalid topic name in the request body.' });
    }
    await kafkaService.createTopic(topicName);
    res.status(200).json({"success" : true});
  } catch (error) {
    console.error("Error creating topic:", error);
    res.status(500).json({ error: "Error creating topic" });
  }
};

// Other controller functions for other Kafka-related APIs can be added here

module.exports = {
  listTopics,
  createTopic,
};