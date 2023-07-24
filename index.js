const express = require("express");
const app = express();
const kafkaRoutes = require("./routes/routes");

app.use(express.json());
// Register Kafka routes
app.use("/kafka", kafkaRoutes);


// Creating Topics
// const topicName = 'orderCreated2';
// const process  = async () => {
//     const admin = kafka.admin();
//     await admin.connect();
//     await admin.createTopics({
//         topics: [{
//             topic: topicName,
//             numPartitions: 2,
//             replicationFactor: 1
//         }
//         ],
// });
//     await admin.disconnect();
// };
// process().then(() => console.log('done'));


// Producing messages
// let messages = [];
// for (let i = 0; i <= 25; i++) {
//     messages.push({key: 'key' + i, value: 'hello world' + i})
// }
// const produceMessage = async () => {
//     const producer = kafka.producer();
//     await producer.connect();
//     await producer.send({
//         topic: 'orderCreated',
//         messages: messages,
//     })
//     await producer.disconnect();
//   };
// produceMessage().catch(error => {
//     console.error('Error:', error);
//   });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
