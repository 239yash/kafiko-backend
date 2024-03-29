const express = require("express");
const kafkaController = require("../controllers/topics");
const router = express.Router();

// Route for listing topics
router.get("/topics", kafkaController.listTopics);
router.post("/topics/create", kafkaController.createTopic);
router.get("/partitions/:topicName", kafkaController.listPartitions);

module.exports = router;