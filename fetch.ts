const pinata_api_key = "";
const pinata_secret_api_key = "";

const hash = await fetch(
  "https://api.pinata.cloud/data/pinList?status=pinned&metadata[name]=Test-PR-1",
  {
    headers: {
      pinata_api_key,
      pinata_secret_api_key,
    },
  }
)
  .then((x) => x.json())
  .then((x) => x.rows[0]?.ipfs_pin_hash);

await fetch(`https://api.pinata.cloud/pinning/unpin/${hash}`, {
  method: "DELETE",
  headers: {
    pinata_api_key,
    pinata_secret_api_key,
  },
});
