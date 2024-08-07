import "dotenv/config";
import { Keypair } from "@solana/web3.js";

const secretKey = Uint8Array.from(JSON.parse(process.env.SECRET_KEY ?? ""));
const keypair = Keypair.fromSecretKey(secretKey);

console.log("Keypair successfully generated!");
console.log(`Generated public key: ${keypair.publicKey.toBase58()}`);
