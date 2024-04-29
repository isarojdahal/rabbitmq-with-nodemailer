const sendMail = require("./email.config");
var c = require("./singleton");

(async () => {
  let channel = await c.getInstance();

  var queue = "email";
  channel.consume(queue, async function (msg) {
    // Since the data is sent in Buffer, we need to convert it to string and then parse to JSON.
    let data = JSON.parse(msg.content.toString());
    await sendMail(
      "everydaykarmaa@gmail.com",
      "subject hello",
      "text hello " + data.otp,
      "html hello"
    ).then((res) => {
      console.log(" [x] Received %s", data);
      channel.ack(msg);
    });
  });
})();
