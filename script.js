const input = document.getElementById("tempInput");
const result = document.getElementById("result");
input.addEventListener("input", convertTemp);

function convertTemp() {
  const value = parseFloat(input.value);
  const type = document.getElementById("conversionType").value;

  if (isNaN(value)) {
    result.textContent = "Please enter a valid number.";
    return;
  }

  if (type === "CtoF") {
    result.textContent = `${value}°C = ${(value * 9 / 5 + 32).toFixed(2)}°F`;
  } else {
    result.textContent = `${value}°F = ${((value - 32) * 5 / 9).toFixed(2)}°C`;
  }
}
