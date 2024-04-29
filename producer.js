(async () => {
  var c = require("./singleton");
  let channel = await c.getInstance();
  console.log("channel", channel);

  var queue = "email";
  let msg = {
    otp: 123,
  };
  channel.assertQueue(queue, {
    durable: false,
  });

  channel.sendToQueue(queue, Buffer.from(JSON.stringify(msg)));
  console.log(" [x] Sent %s", msg);
})();
