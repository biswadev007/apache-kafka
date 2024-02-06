const { kafka } = require('./client');

const producerInit = async () => {
  const producer = kafka.producer();
  await producer.connect();
  console.log('Producer connected!');

  await producer.send({
    topic: 'delivery-updates',
    messages: [
      {
        key: 'delivery-boy-location',
        value: JSON.stringify({ location: [49.8982372, 62.823872] }),
        partition: 0,
      },
    ],
  });
  console.log('Message delivered');

  await producer.disconnect();
  console.log('producer disconnected!');
};

producerInit();
