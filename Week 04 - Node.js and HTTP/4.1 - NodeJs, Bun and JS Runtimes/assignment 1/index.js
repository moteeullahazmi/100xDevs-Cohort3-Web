const fs = require ("fs");
const {Command } = require("commander");
const program = new Command();

program
.name("line-counter")
.description("CLI to count the number of lines in a file")
.version("1.0.0")

program
.command("count")
.description("Count the number of lines in a file")
.argument("<file>", "file the count")
.action((file)=>{
  fs.readFile(file, "utf8", (err,data)=>{
    if(err){
      console.error("Error reading files:" +(err.message))
    } else {
      const lines = data.trim().split("\n").filter((line) => line.length >0).length;
      console.log(`There are ${lines} lines in ${file}`);
    }
  })
})

program.parse(process.argv);