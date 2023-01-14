# 🌿 CarboScope

A <1KB JavaScript library to measure the carbon footprint of your page.

## Usage

*In the browser*

Copy/paste the content of [./dist/carbonscope.js](./dist/carbonscope.js) in the console on your page. Then run `CarbonScope.measure()` or `CarbonScope.measureOnce()`.

*In your app*

Run `npm install carboscope`. Then:

```js
import CarbonScope from 'carboscope';

CarbonScope.measure(); // or CarbonScope.measureOnce();
```

## API

* `carboscope.asNumber()` - get the kg CO2e as a number
* `carboscope.measure(interval)` - calculate the emissions every two seconds and prints the result to the console. (The default value of `interval` is 2000ms)
* `carboscope.measureOnce()` - the same as `.measure` but it does it only once.

## Formula

```
Carbon Footprint (kg CO2e) = MB * 0.5 kg CO2e/MB
```