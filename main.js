// Function to convert RGB values to Hexadecimal
function rgbToHex(red, green, blue) {
  // Ensure all values are between 0 and 255
  if (
    red < 0 || red > 255 ||
    green < 0 || green > 255 ||
    blue < 0 || blue > 255
  ) {
    return "Invalid input. RGB values must be between 0 and 255.";
  }

  // Convert each color component to a two-digit hexadecimal string
  const rHex = red.toString(16).padStart(2, '0');
  const gHex = green.toString(16).padStart(2, '0');
  const bHex = blue.toString(16).padStart(2, '0');

  // Return the final color code in uppercase
  return `#${rHex}${gHex}${bHex}`.toUpperCase();
}

// Example usage
console.log(rgbToHex(255, 99, 71));   // #FF6347
console.log(rgbToHex(0, 0, 0));       // #000000
console.log(rgbToHex(173, 216, 230)); // #ADD8E6
console.log(rgbToHex(-5, 300, 100));  // Invalid input