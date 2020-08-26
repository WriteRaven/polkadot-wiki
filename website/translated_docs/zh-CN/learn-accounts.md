---
id: learn-accounts
title: Polkadot 账户
sidebar_label: Polkadot 账户
description: 账户、账户索引、账户身份和回收机制的解释
---

本文档涵盖 Polkadot 和 Kusama 账户的基本地址及其在链上的保存。 欲了解更多关于加密技术背后的详细解释，请参阅 [加密页面](learn-cryptography)。

## 地址格式

The address format used in Substrate-based chains is SS58. SS58 is a modification of Base-58-check from Bitcoin with some minor modifications. Notably, the format contains an _address type_ prefix that identifies an address as belonging to a specific network.

例如:

- Polkadot 地址总是以数字1开头。
- Kusama 地址总是以大写字母开头，如C、D、F、G、H、J...
- 通用Substrate 地址以5开头。

这些前缀在[此处](https://github.com/paritytech/substrate/wiki/External-Address-Format-(SS58))定义。

It's important to understand that the different formats for different networks are merely different representations of the same public key in a private-public keypair generated by an address generation tool. This makes the addresses compatible across Substrate-based chains as long as you convert the format.

## Address Generation, Derivation, and Portability

A valid account only requires a private key that can sign on one of the [supported curves and signature schemes](build-protocol-info#cryptography). Most wallets take many steps from a mnemonic phrase to account key, which affects the ability to use the same mnemonic phrase in multiple wallets. Wallets that use different steps will arrive at a different set of addresses from the same mnemonic.

### Seed Generation

Most wallets generate a mnemonic phrase for users to back up their wallets and generate a private key from the mnemonic. Not all wallets use the same algorithm to convert from mnemonic phrase to private key.

Subkey and Polkadot-JS based wallets use the BIP39 dictionary for mnemonic generation, but use the entropy byte array to generate the private key, while full BIP39 wallets (like Ledger) use 2048 rounds of PBKDF2 on the mnemonic. As such, the same mnemonic will not generate the same private keys. See [Substrate BIP39](https://github.com/paritytech/substrate-bip39) for more information.

### Derivation Paths

Many Polkadot key generation tools support hard and soft derivation. See the [Subkey documentation](https://substrate.dev/docs/en/knowledgebase/integrate/subkey) for details and examples of derivation path formats. The Polkadot-JS Apps and Extension as well as Parity Signer support custom derivation paths using the same syntax as Subkey.

Some wallets will automatically add derivation paths to the end of the generated mnemonic phrase. This will generate separate seeds for separate paths, which allows separate signing keys with the same mnemonic, e.g. `<mnemonic phrase>//polkadot` and `<mnemonic phrase>//kusama`. Although you may correctly save the mnemonic phrase, using it in another wallet will not generate the same addresses unless both wallets use the same derivation paths.

Polkadot and Kusama both have paths registered in the [BIP44 registry](https://github.com/satoshilabs/slips/blob/master/slip-0044.md).

> **Warning:** You must have both the parent private key as well as the derivation path to arrive at the key for an address. Do not use custom derivation paths unless you are comfortable with your understanding of this topic.

### Portability

The above information brings us to portability: the ability to use a mnemonic phrase or seed across multiple wallets. Portability depends on a number of factors:

- Derivation path
- Mnemonic format
- Seed derivation
- Signature scheme

If you want to use the same mnemonic across multiple wallets, make sure that they follow compatible methods for generating keys and signing messages. If you cannot find understandable documentation, reach out to the project maintainers.

|                       | Mnemonic Format | Derivation Path | Seed Derivation |      Signature Support      |
|:--------------------- |:---------------:|:---------------:|:---------------:|:---------------------------:|
| Polkadot-JS Extension |    Standard     |  User-Defined   |      BIP32      |           sr25519           |
| Polkadot-JS Apps      |  Standard\*   |  User-Defined   |      BIP32      | sr25519, ed25519, secp256k  |
| Ledger                |      BIP39      |  BIP44&dagger;  |  BIP32&Dagger;  |        ed25519&sect;        |
| Subkey                |  Standard\*   |  User-Defined   |      BIP32      | sr25519, ed25519, secp256k1 |

\* Ed25519 keys have [limited compatibility](https://github.com/paritytech/substrate-bip39) with BIP39.

&dagger; [BIP44 Registry](https://github.com/satoshilabs/slips/blob/master/slip-0044.md)

&Dagger; Ed25519 and BIP32 based on [Khovratovich](https://github.com/LedgerHQ/orakolo/blob/master/papers/Ed25519_BIP%20Final.pdf)

&sect; Sr25519 planned

### For the Curious: How Prefixes Work

The [SS58 document](https://github.com/paritytech/substrate/wiki/External-Address-Format-(SS58)) states that:

- Polkadot has an address type of `00000000b`, so `0` in decimal.
- Kusama (Polkadot Canary) has an address type of `00000010b`, so `2` in decimal.
- Generic Substrate has `00101010b` as address type, which is `42` in decimal.

Because Base58-check alphabet has no number 0, the lowest value is indeed 1. So `00000000b` is 1 in Base58-check. If we try to [decode](https://www.better-converter.com/Encoders-Decoders/Base58Check-to-Hexadecimal-Decoder) a Polkadot address like `1FRMM8PEiWXYax7rpS6X4XZX1aAAxSWx1CrKTyrVYhV24fg`, the result is `000aff6865635ae11013a83835c019d44ec3f865145943f487ae82a8e7bed3a66b29d7`. The first byte is `00`, which is indeed `00000000` in binary and `0` in decimal and thus matches the address type of Polkadot.

Let's take a look at Substrate addresses. If we decode `5CK8D1sKNwF473wbuBP6NuhQfPaWUetNsWUNAAzVwTfxqjfr`, we get `2a0aff6865635ae11013a83835c019d44ec3f865145943f487ae82a8e7bed3a66b77e5`. The first byte is `2a` which when [converted from hex to decimal](https://www.rapidtables.com/convert/number/hex-to-decimal.html) is 42. 42 is `00101010` in binary, just as the SS58 document states.

Finally, let's look at Kusama addresses. Decoding `CpjsLDC1JFyrhm3ftC9Gs4QoyrkHKhZKtK7YqGTRFtTafgp` gives us `020aff6865635ae11013a83835c019d44ec3f865145943f487ae82a8e7bed3a66b0985` with the first byte being `02`, just as specified. If we try a Kusama address that starts with a completely different letter, like `J4iggBtsWsb61RemU2TDWDXTNHqHNfBSAkGvVZBtn1AJV1a`, we still get `02` as the first byte: `02f2d606a67f58fa0b3ad2b556195a0ef905676efd4e3ec62f8fa1b8461355f1142509`. It seems counterintuitive that some addresses always have the same prefix and others like Kusama can vary wildly, but it's just a quirk of Base58-check encoding.

## Obtaining and Managing an Address

The **most user-friendly** way to create a Kusama address is through the [Polkadot JS UI](https://polkadot.js.org/apps/#/accounts). Remember to back up the seed phrase used to generate your account - the accounts are stored only in your browser, so purging the cache will wipe your accounts as well. You would then have to recreate them using the seed phrase given to you by the UI - this will also restore all your previously held balances.

A **more convenient and recommended** method of keeping the accounts stored on your computer is using the [PolkadotJS extension](https://github.com/polkadot-js/extension). This extension remembers your accounts and allows you to clear your browser cache without fear. Still, don't forget to back up your seed phrase - if you lose access to this computer, or the extension somehow crashes beyond repair, the phrase will come in handy.

Please note that as this keeps your accounts in the browser, it is not a safe place to keep large holdings. By definition, a browser is a "hot wallet" and susceptible to a wide range of attacks, so keep your funds in cold storage when dealing with non-trivial amounts. Creating cold storage is as simple as securely stashing away the seed phrase for your accounts and removing all traces of the accounts from your computer.

Other than the extension and the default UI, Polkadot and Kusama addresses can also be created with the [Subkey tool](https://github.com/paritytech/substrate/tree/master/bin/utils/subkey). Subkey is intended for users comfortable with using the command line and can seem intimidating, but is quite approachable. Follow the instructions in the [Subkey documentation](https://substrate.dev/docs/en/knowledgebase/integrate/subkey). When used properly, Subkey is the **most secure** available method of creating an account.

There is also the very secure [Parity Signer](https://www.parity.io/signer/) but it currently only supports Kusama addresses, not Polkadot or generic Substrate.

Alternatively, you might find some wallets on the [Polkaproject.com page](http://www.polkaproject.com/) but bear in mind that these are **unaudited** and not officially affiliated with Web3 Foundation or the Polkadot project unless otherwise stated.

Hardware wallet integration from [Ledger](https://ledger.com) is coming soon.

## Existential Deposit and Reaping

When you generate an account (address), you only generate a _key_ that lets you access it. The account does not exist yet on-chain. For that, it needs the existential deposit: 0.001666666667 KSM (on Kusama) or 0.01 DOT (old) / 1 _New DOT_ (on Polkadot mainnet) .

Having an account go below the existential deposit causes that account to be _reaped_. The account will be wiped from the blockchain's state to conserve space, along with any funds in that address. You do not lose access to the reaped address - as long as you have your private key or recovery phrase, you can still use the address - but it needs a top-up of another existential deposit to be able to interact with the chain.

Here's another way to think about existential deposits. Ever notice those `Thumbs.db` files on Windows or `.DS_Store` files on Mac? Those are junk, they serve no specific purpose other than making previews a bit faster. If a folder is completely empty save for such a file, you can remove the folder to clear junk off your hard drive. That does not mean you lose access to this folder forever - you can always recreate it. You have the _key_, after all - you're the computer's owner. It just means you want to keep your computer clean until you maybe end up needing this folder again, and then recreate it. Your address is like this folder - it gets removed from the chain when nothing is in it, but gets put back when it has at least the existential deposit.

## Indices

A Kusama address can have an index. An index is like a short and easy to remember version of an address.

Indices are populated in order. Think of them like slots going from 0 to any arbitrary number:

`[0][1][2][3][4][5][6]...`

If slots 0-2 are populated by addresses A, B and C respectively, and I add an existential deposit to address X, that address will automatically be put into slot 3. Henceforth, you can send me money by just sending to `[3]` rather than remembering my whole address.

```js
[0][1][2][3][4][5][6]...
[A][B][C][X][ ][ ][ ]...
```

But what if an account gets reaped as explained above? In that case, the index is emptied. In other words, the slot frees up again. If someone creates a new account, they may end up using the same index another address was using before.

Because of this unreliability of indices, they **may not be present** in Polkadot mainnet.

## Identities

The _Identities_ pallet built into Kusama allows users to attach on-chain metadata to their accounts. This metadata can be verified by independent registrars to provide trustworthiness. To learn more about how to set or release an identity, how to define sub-accounts, or how to become a registrar, please read [this guide](learn-identity).

## Proxy Accounts

Polkadot comes with a generalized proxy account system that allows users to keep keys in cold storage while proxies act on their behalf with restricted (or unrestricted) functionality. See the [proxies](learn-proxies) page for more information.

## Multi-signature Accounts

It is possible to create a multi-signature account in Substrate-based chains. A multi-signature account is composed of one or more addresses and a threshold. The threshold defines how many signatories (participating addresses) need to agree on the submission of an extrinsic in order for the call to be successful.

For example, Alice, Bob, and Charlie set up a multi-sig with a threshold of 2. This means Alice and Bob can execute any call even if Charlie disagrees with it. Likewise, Charlie and Bob can execute any call without Alice. A threshold is typically a number smaller than the total number of members but can also be equal to it, which means they all have to be in agreement.

Multi-signature accounts have several uses:

- securing your own stash: use additional signatories as a 2FA mechanism to secure your funds. One signer can be on one computer, another can be on another, or in cold storage. This slows down your interactions with the chain, but is orders of magnitude more secure.
- board decisions: legal entities such as businesses and foundations use multi-sigs to collectively govern over the entity's treasury.
- group participation in governance: a multi-sig account can do everything a regular account can. A multi-sig account could be a council member in Kusama's governance, where a set of community members could vote as one entity.

Multi-signature accounts **cannot be modified after being created**. Changing the set of members or altering the threshold is not possible and instead requires the dissolution of the current multi-sig and creation of a new one. As such, multi-sig account addresses are **deterministic**, i.e. you can always calculate the address of a multi-sig just by knowing the members and the threshold, without the account existing yet. This means one can send tokens to an address that does not exist yet, and if the entities designated as the recipients come together in a new multi-sig under a matching threshold, they will immediately have access to these tokens.

### Generating Addresses of Multi-signature Accounts

> NOTE: Addresses that are provided to the multi-sig wallets must be sorted. The below methods for generating sort the accounts for you, but if you are implementing your own sorting then be aware that the public keys are compared byte-for-byte and sorted ascending before being inserted in the payload that is hashed.

Addresses are deterministically generated from the signers and threshold of the multisig wallet. For a code example (in TypeScript) of generating you can view the internals of `@w3f/msig-util` [here](https://github.com/lsaether/msig-util/blob/master/src/actions/deriveAddress.ts).

The `@w3f/msig-util` is a small CLI tool that can determine the multisignature address based on your inputs.

```zsh
$ npx @w3f/msig-util@1.0.7 derive --addresses 15o5762QE4UPrUaYcM83HERK7Wzbmgcsxa93NJjkHGH1unvr,1TMxLj56NtRg3scE7rRo8H9GZJMFXdsJk1GyxCuTRAxTTzU --threshold 1
npx: installed 79 in 7.764s
--------------------------------
Addresses: 15o5762QE4UPrUaYcM83HERK7Wzbmgcsxa93NJjkHGH1unvr 1TMxLj56NtRg3scE7rRo8H9GZJMFXdsJk1GyxCuTRAxTTzU
Threshold: 1
Multisig Address (SS58: 0): 15FKUKXC6kwaXxJ1tXNywmFy4ZY6FoDFCnU3fMbibFdeqwGw
--------------------------------
```

The Polkadot JS Apps UI also supports multi-sig accounts, as documented in the [Account Generation page](learn-account-generation#multi-signature-accounts). This is easier than generating them manually.

### Making Transactions with a Multi-signature Account

There are three types of actions you can take with a multi-sig account:

- Executing a call.
- Approving a call.
- Cancelling a call.

In scenarios where only a single approval is needed, a convenience method `as_multi_threshold_1` should be used. This function takes only the other signatories and the raw call as its arguments.

However, in anything but the simple one approval case, you will likely need more than one of the signatories to approve the call before finally executing it. When you create a new call or approve a call as a multi-sig, you will need to place a small deposit. The deposit stays locked in the pallet until the call is executed. The reason for the deposit is to place an economic cost on the storage space that the multi-sig call takes up on the chain and discourage users from creating dangling multi-sig operations that never get executed. The deposit will be reserved in the caller's accounts so participants in multi-signature wallets should have spare funds available.

The deposit is dependent on the `threshold` parameter and is calculated as follows:

```
Deposit = DepositBase + threshold * DepositFactor
```

Where `DepositBase` and `DepositFactor` are chain constants set in the runtime code.

Currently, the DepositBase is equal to `deposit(1, 88)` and the DepositFactor is equal to `deposit(0,32)`.

The deposit function in JavaScript is defined below, cribbed from the [Rust source](https://github.com/paritytech/polkadot/blob/master/runtime/kusama/src/constants.rs#L26).

```js
// Polkadot
const DOLLARS = 10000000000; // planck
const MILLICENTS = 100000; // planck

// Kusama
// const DOLLARS = 166666666666.67;
// const MILLICENTS = 1666666.66;

const deposit = (items, bytes) => {
  return items * 20 * DOLLARS + bytes * 100 * MILLICENTS;
};

console.log("DepositBase", deposit(1, 88));
console.log("DepositFactor", deposit(0, 32));
```

Thus the deposit values can be calculated as shown in the table below.

|               | Polkadot     | Kusama          |
| ------------- | ------------ | --------------- |
| DepositBase   | 200880000000 | 3347999999941.4 |
| DepositFactor | 320000000    | 5333333312      |

Let's consider an example of a multi-sig on Polkadot with a threshold of 2 and 3 signers: Alice, Bob, and Charlie. First Alice will create the call on chain by calling `as_multi` with the raw call. When doing this Alice will have to deposit 0.20152 DOT while she waits for either Bob or Charlie to also approve the call. When Bob comes to approve the call and execute the transaction, he will not need to place the deposit and Alice will receive her deposit back.

## Resources

- [Understanding Accounts and Keys in Polkadot](https://www.crowdcast.io/e/polkadot-keys) - An explanation of what the different kinds of accounts and keys are used for in Polkadot, with Bill Laboon and Chinmay Patel of BlockX Labs.