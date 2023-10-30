#! /usr/bin/env node
import { Command } from "commander";
import MySQLValidator from "./Validators/MySQLValidator";

// const program = new Command();

// program
//   .command("testing")
//   .description("kurvi testing sbogom")
//   .action((str, options) => {});

// program
//   .command("ima")
//   .description("kurvi sbogom")
//   .action((str, options) => {});

// program
//   .command("li")
//   .description("kurvi sbogom")
//   .action((str, options) => {});

// program
//   .command("ribi")
//   .description("kurvi sbogom")
//   .action((str, options) => {});

// program.parse();
const validator = new MySQLValidator();
try {
  const test = validator.validate();
} catch (error) {
  console.log("finaly working please", error, validator.getIsValid());
}
// const test = validator.validate().catch((err) => {
//   console.log("az sym ");
// });
// try {

//   console.log(test, typeof test);
// } catch (error) {
//   console.log(typeof error);
// }
// validator.validate().then(() => {
//   console.log("MySQL is installed" + validator.getIsValid());
// });
