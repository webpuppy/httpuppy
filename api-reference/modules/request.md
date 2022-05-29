[httpuppy - v0.1.0](../README.md) / [Modules](../modules.md) / request

# Module: request

**`description`** hooks for handling requests for the core module

## Table of contents

### Functions

- [useStaticHandler](request.md#usestatichandler)

## Functions

### useStaticHandler

▸ **useStaticHandler**(`req`, `res`, `config`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `req` | `IncomingMessage` | incoming message to handle args from |
| `res` | `ServerResponse` | response message to send |
| `config` | `uOptions` | config from server |

#### Returns

`void`

nothing, it inherits flow control from the requesting branch

#### Defined in

[request.ts:28](https://github.com/abschill/http-simple/blob/a9450e2/src/request.ts#L28)