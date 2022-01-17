import { NatsTransport } from "https://deno.land/x/jok_transport@v0.3.2/mod.ts";
import {
  StringCodec,
  connect,
} from "https://deno.land/x/nats@v1.4.0/src/mod.ts";

const transport = new NatsTransport({
  StringCodec,
  connect,
  natsServerUrls: ["nats://localhost:4223"],
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
