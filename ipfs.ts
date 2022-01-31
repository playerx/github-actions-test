import { IPFS } from "https://deno.land/x/ipfs/mod.ts";

const ipfs = new IPFS({});

const body = new FormData();

const file = await Deno.readFile("README.md");

body.append("file", new Blob([file], { type: "text/plain" }), "README2.md");

const json = await ipfs.add(body);

console.log(json);

// QmZsEtSahM7JmsA8pd4qkAWjpgVecPX2CwznaQ5oyu7zNv
// const ipfs = new IPFS({});

const res = await ipfs.cat("QmZsEtSahM7JmsA8pd4qkAWjpgVecPX2CwznaQ5oyu7zNv");

console.log(await res.text()); // hello worlds
