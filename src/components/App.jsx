import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import NoteComponent from "./Note";
import Notes from "../notes.js";

function App() {
  return (
    <div>
      <Header />
      {Notes.map((note) => (
        <NoteComponent
          key={note.id}
          title={note.title}
          content={note.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
