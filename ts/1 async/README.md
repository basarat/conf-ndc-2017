```js
function doWork() {
  setTimeout(() => {
    console.log('1s');
    setTimeout(() => {
      console.log('2s');
      setTimeout(() => {
        console.log('3s');
      }, 1000);
    }, 1000);
  }, 1000);
}

doWork();
```
vs. 
```js
const delay = (ms) => new Promise<void>(res => setTimeout(res, ms))

async function doWork() {
  await delay(1000);
  console.log('1s');
  await delay(1000);
  console.log('2s');
  await delay(1000);
  console.log('3s');
}

doWork();
```
Usages: 
* Callback hell
* Browser testing 
* Thinks like mocha and jest support async tests out of the box.