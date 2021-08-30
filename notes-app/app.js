const yargs = require("yargs");
const notes = require("./notes.js");

yargs.version("1.0.0");

// yargs command for add note function
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => notes.addNote(argv.title, argv.body),
});

// yargs command for remove note function
yargs.command({
  command: "remove",
  describe: "Remove a note by title",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => notes.removeNote(argv.title),
});

// yargs command to list notes
yargs.command({
  command: "list",
  describe: "List all Notes in the db",
  handler: () => notes.listNotes(),
});

// yargs command to read a note
yargs.command({
  command: "read",
  describe: "Read a note by entering title",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => notes.readNote(argv.title),
});

yargs.parse();
