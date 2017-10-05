# flag pattern

Both pattern can not eliminated by webpack^3.6.0 + uglifyjs

```js
export class FlagClass {
    static get isEnabled(){
        return process.env.NODE_ENV !== "production";
    }
}
```

vs.

```js
export const FlagObject = {
    isEnabled: process.env.NODE_ENV !== "production"
};
```