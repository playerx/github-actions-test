const { NatsTransport } = require("jok_transport");
const { StringCodec, connect } = require("nats.ws");

async function run() {
  const transport = new NatsTransport({
    StringCodec,
    connect,
    natsServerUrls: ["ws://localhost:9099"],
  });

  await transport.init();

  await transport.start();

  transport.on("test", (ctx, x) => {
    console.log("received", ctx, x);

    return 1;
  });

  const result = await transport.execute({
    route: "test",
    payload: { somethig: 123 },
  });

  console.log("result", result);
}

run();
