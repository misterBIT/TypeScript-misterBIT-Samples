// ---------------------- ENUMS ----------------------------------------------------
enum Color {Red, Green, Blue};
var c: Color = Color.Green;

// Start from 1:
enum Color1 { Red = 1, Green, Blue };
//  manually set the values
enum Color2 { Red = 1, Green = 2, Blue = 9 };

var colorName: string = Color2[9];

console.log("Color name: ", colorName);
console.log("Color: ", Color2["Green"]);