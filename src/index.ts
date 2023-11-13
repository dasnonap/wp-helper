#! /usr/bin/env node
import { Command } from "commander";
import MySQLValidator from "./Validators/MySQLValidator";
import WPCliValidator from "./Validators/WPCliValidator";

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
// const validator = new MySQLValidator();
const validator = new WPCliValidator();
try {
  const test = validator.validate();

  console.log(validator.getIsValid());
} catch (error) {
  console.log("finaly working please", error, validator.getIsValid());
}
