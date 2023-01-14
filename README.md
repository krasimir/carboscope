# 🌿 CarboScope

A <1KB JavaScript library to measure the carbon footprint of your page.

## Usage

*In the browser*

Copy/paste the content of [./dist/carboscope.js](./dist/carboscope.js) in the console on your page. Then run `CarboScope.measure()` or `CarboScope.measureOnce()`.

*In your app*

Run `npm install carboscope`. Then:

```js
import CarboScope from 'carboscope';

CarboScope.measure(); // or CarboScope.measureOnce();
```

## API

* `.asNumber()` - get the kg CO2e as a number
* `.measure(interval)` - calculate the emissions every two seconds and prints the result to the console. (The default value of `interval` is 2000ms)
* `.measureOnce()` - the same as `.measure` but it does it only once.

## Formula

```
Carbon Footprint (kg CO2e) = MB * 0.5 kg CO2e/MB
```