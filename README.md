# Kazoo JS SDK

Proof of Concept

## Usage

```javascript
import { sdk as KazooSDK } from "kazoo-js-sdk";

// Pass configuration
const sdk = new KazooSDK({ host: "sandbox.example.com/v1" });

const { authToken } = await sdk.authorize(
  "username",
  "password",
  "account_name"
);

const conferences = await sdk.Conferences.get();
```
