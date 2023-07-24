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

// Other controller functions for other Kafka-related APIs can be added here

module.exports = {
  listTopics,
};