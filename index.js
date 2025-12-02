window.onload = function() {
  const display = document.getElementById('display');

  window.appendToDisplay = function(value) {
    display.value += value;
  };

  window.clearDisplay = function() {
    display.value = "";
  };

  window.deleteLast = function() {
    display.value = display.value.slice(0, -1);
  };

  window.Calculate = function() {
    try {
      display.value = Function('"use strict"; return (' + display.value + ')')();
    } catch (error) {
      display.value = "Error";
    }
  };
};