const express = require("express");
const kafkaController = require("../controllers/topics");
const router = express.Router();

// Route for listing topics
router.get("/topics", kafkaController.listTopics);

// Other routes for other Kafka-related APIs can be added here

module.exports = router;