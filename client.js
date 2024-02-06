const { Kafka } = require('kafkajs')

exports.kafka = new Kafka({
  clientId: 'kafka-learning',
  brokers: ['192.168.1.5:9092']
});