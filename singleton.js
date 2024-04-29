var amqp = require("amqplib");

class QueueConnection {
  static connection = null;
  static channel = null;

  static async getInstance() {
    if (!QueueConnection.connection) {
      QueueConnection.connection = await amqp.connect("amqp://127.0.0.1");
      QueueConnection.channel =
        await QueueConnection.connection.createChannel();
    }
    return this.channel;
  }
}

module.exports = QueueConnection;
