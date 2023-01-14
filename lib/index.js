function _getMemory() {
  if (typeof performance !== 'undefined' && performance.getEntries) {
    let size = performance.getEntries().reduce((total, entry) => total + entry.transferSize || 0, 0);
    return size / (1024 * 1024); // in MB
  } else {
    console.warn('Performance API is not supported');
    return 0;
  }
};
function _measure(mb) {
  // Carbon Footprint (kg CO2e) = MB * 0.5 kg CO2e/MB
  return mb * 0.5;
}
const CarboScope = {
  asNumber() {
    return _measure(_getMemory());
  },
  measureOnce() {
    let co2 = _measure(_getMemory());
    console.log(`🌿 CarboScope: ${co2.toFixed(2)} kg CO2e`);
  },
  measure(over) {
    function loop() {
      const co2 = _measure(_getMemory());
      console.log(`🌿 CarboScope: ${co2.toFixed(2)} kg CO2e`);
    }
    this._int = setInterval(loop, over || 2000);
    loop();
  },
  stop() {
    clearInterval(this._int);
  }
}

module.exports = CarboScope;
if (typeof window !== 'undefined') {
  window.CarboScope = CarboScope;
}