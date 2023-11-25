#! /usr/bin/env node
import CommandFactory from "./Factory/CommandFactory";

const factoryCommand = new CommandFactory();

factoryCommand.init();

factoryCommand.getProgram().parse();
