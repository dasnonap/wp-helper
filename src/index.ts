#! /usr/bin/env node
import { Command } from "commander";

const program = new Command();

program
  .command("testing")
  .description("kurvi testing sbogom")
  .action((str, options) => {});

program
  .command("ima")
  .description("kurvi sbogom")
  .action((str, options) => {});

program
  .command("li")
  .description("kurvi sbogom")
  .action((str, options) => {});

program
  .command("ribi")
  .description("kurvi sbogom")
  .action((str, options) => {});

program.parse();
