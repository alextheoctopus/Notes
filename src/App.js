import { useState } from "react";
import OpenedNote from './components/OpenedNote/OpenedNote';
import Note from "./components/Note/Note";
import './App.css';
import Header from "./components/Header/Header";
const App = () => {


  const [notes, setNotes] = useState([{ id: 1, value: 'first note' }]);
  const [openedNote, setOpenedNote] = useState({ state: false });


  const closeOpenedNote = () => {
    setOpenedNote({ state: false });
  }

  const createNote = () => {
    closeOpenedNote();  
    console.log(notes);
  }


  return (
    <>
      <Header setOpenedNote={setOpenedNote} />

      {openedNote.state === true ?
        <OpenedNote createNote={createNote} setNotes={setNotes} closeOpenedNote={closeOpenedNote} notes={notes} setOpenedNote={setOpenedNote} />
        : ''}
      <div key={notes.length}>
        {notes.map((item, index) => <Note key={index} openedNote={openedNote} data={item} />)}
      </div>
    </>
  )
}
export default App;