const chalk = require("chalk");
console.log(chalk.blue("Hello World!"));


console.log(chalk.blue("Hello World!"));   // Blue text
console.log(chalk.red("Error: Something went wrong!"));  // Red text
console.log(chalk.green("Success: Operation completed.")); // Green text
console.log(chalk.bold("Bold Text"));  // Bold text
console.log(chalk.underline("Underlined Text"));  // Underlined text
console.log(chalk.italic("Italic Text"));  // Italic text
console.log(chalk.strikethrough("Strikethrough text"));  // ~Crossed-out text~
console.log(chalk.red.bold.underline("Warning: Critical Error!"));
console.log(chalk.blue.bgWhite.bold(" Info: System update available."));
console.log(chalk.green.inverse(" Inverted Text "));  // Green background with white text
const name = "John";
console.log(`Hello, ${chalk.yellow(name)}! Welcome back.`);
console.log(chalk.bgCyan(" Cyan Background "));
console.log(chalk.bgMagenta(" Magenta Background "));
console.log(chalk.bgGreen(" Green Background "));
const colors = ["red", "green", "blue", "yellow", "magenta", "cyan"];
colors.forEach(color => {
    console.log(chalk[color](`This is ${color} text`));
});
const error = chalk.bold.red;
const warning = chalk.keyword("orange");
const success = chalk.green;

console.log(error("Error: Something went wrong!"));
console.log(warning("Warning: Proceed with caution."));
console.log(success("Success: Everything is fine!"));
const rainbow = chalk.bold.rgb(255, 0, 0); // Custom RGB color (red)
console.log(rainbow("This is a custom RGB color text!"));
