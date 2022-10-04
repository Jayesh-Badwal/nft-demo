const { Blockchain, Transaction } = require("./blockchain");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const myKey = ec.keyFromPrivate(
  "555afc8b1b57223f7a3f618602fa9d3afe8e7f3776a50a44a99d33c09e9d3c8c"
);
const myWalletAddress = myKey.getPublic("hex");

let savjeeCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, "public key goes here", 10);
tx1.signTransaction(myKey);
savjeeCoin.addTransaction(tx1);

console.log("\n Starting the miner...");
savjeeCoin.minePendingTransactions(myWalletAddress);

console.log(
  "\nBalance of xavier-address ",
  savjeeCoin.getbalanceOfAddress(myWalletAddress)
);

console.log("\nChain:", savjeeCoin.chain);
console.log("\nTransactions:", savjeeCoin.chain[1].transactions);
