const fs = require("fs");
const chalk = require("chalk");

// Add Note function
const addNote = (title, body) => {
  const notes = loadNotes();
  const dupeNote = notes.find((note) => note.title === title);

  if (!dupeNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note Added!!"));
  } else {
    console.log(chalk.red.inverse("Note title already taken!!"));
  }
};

// Remove Note by title function
const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title != title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note Removed!"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse("No Note found!"));
  }
};

// List all Notes
const listNotes = () => {
  const notes = loadNotes();
  notes.forEach((note) => {
    console.log(chalk.blueBright(note.title));
  });
};

// Read a note by title
const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.greenBright(note.body));
  } else {
    console.log(chalk.red.inverse("No notes found"));
  }
};

// Save note function to write note to the file when we done edeting
const saveNotes = (notes) => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

// load notes from json file
const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync("notes.json").toString());
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
