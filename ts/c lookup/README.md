# 1 

Quite commonly you have giant objects e.g. JSON endpoint payloads can become quite big.

* You can define them as a single Type, But you normally don't create these in a single statement e.g. you don't do 

```js
const submit: SubmitRequest = {
  payment: {
    cardToken: ''
  },
}
```
And you still have to do all those other sub sections to deal with. 

Traditionally you would just swap these out into their own types. 

```js
type Payment = {
    cardToken: string,
}

const payment: Payment = {
  cardToken: ''
}
```
* But then you have all these types lying around, which is just noise.
* You have to come up with names that don't really make sense e.g. is it `Payment` or `SubmitPayment`
* the next guy, if they want to answer "what is the payload", they have to mentally place all these types into their place.

With TypeScript latest you can lookup a type by string literals e.g.
```js
const payment: SubmitRequest['payment'] = {
  cardToken: ''
};
```