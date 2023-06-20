const express = require("express");
const { Kafka } = require("kafkajs");
const app = express();

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

// Getting topics list
const getTopics = async () => {
  const admin = kafka.admin();
  await admin.connect();
  const topics = await admin.listTopics();
  await admin.disconnect();
  return topics;
};
getTopics()
  .then((topics) => {
    console.log("Kafka topics:", topics);
  })
  .catch((error) => {
    console.error("Error:", error);
  });


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



app.use(express.json());
// app.use(cors());
// app.options("*", cors());
