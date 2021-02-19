# Kazoo JS SDK

Proof of Concept

## Usage

```javascript
import { sdk } from "kazoo-js-sdk";

// Pass configuration
const KazooSDK = sdk({ host: "sandbox.example.com/v1" });

const { authToken } = await KazooSDK.authorize(
  "username",
  "password",
  "account_name"
);

const conferences = await KazooSDK.Conferences.get();

console.log("Conferences", conferences);
```
