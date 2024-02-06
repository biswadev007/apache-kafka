const { kafka } = require('./client');

const consumerInit = async () => {
  const consumer = await kafka.consumer({ groupId: 'delivery-status' });

  await consumer.connect();
  await consumer.subscribe({ topics: ['delivery-updates'], fromBeginning: true });
  await consumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
      console.log({
        topic,
        partition,
        key: message.key.toString(),
        value: message.value.toString(),
      });
    },
  });
};

consumerInit();