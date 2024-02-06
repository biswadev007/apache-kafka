const { kafka } = require('./client');

const init = async () => {
  const admin = kafka.admin();
  await admin.connect();
  console.log('Admin connected...');

  await admin.createTopics({
    topics: [
      {
        topic: 'delivery-updates',
        numPartitions: 2,
      },
    ],
  });
  console.log('Topic created on {delivery-updates}');

  await admin.disconnect();
  console.log('Admin discunnected!');
};

init();
