import { useState } from "react";
import OpenedNote from './components/OpenedNote/OpenedNote';
import Note from "./components/Note/Note";
import './App.css';
import Header from "./components/Header/Header";
const App = () => {


  const [notes, setNotes] = useState([1]);
  const [openedNote, setOpenedNote] = useState({ state: false, value: '' });

  return (
    <>
      <Header setOpenedNote={setOpenedNote} />
      {openedNote.state === true ? <OpenedNote notes={notes} setNotes={setNotes} setOpenedNote={setOpenedNote} /> : ''}
      <div key={notes.length}>
        {notes.map((item, index) => <Note key={index} openedNote={openedNote}></Note>)}
      </div>
    </>
  )
}
export default App;