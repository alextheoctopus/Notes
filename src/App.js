import { useState } from "react";
import OpenedNote from './components/OpenedNote/OpenedNote';
import Note from "./components/Note/Note";
import './App.css';
import Header from "./components/Header/Header";
const App = () => {


  const [notes, setNotes] = useState([{ id: 1, value: 'first note' }]);
  const [openedNote, setOpenedNote] = useState({ state: false, text: '' });

  const closeOpenedNote = () => {
    setOpenedNote({ state: false });
  }


  let localNotes = localStorage.getItem('notes');

  return (
    <div className="wholeApp">
      <Header setOpenedNote={setOpenedNote} />

      {openedNote.state === true ? <OpenedNote setNotes={setNotes} openedNote={openedNote} closeOpenedNote={closeOpenedNote} notes={notes} setOpenedNote={setOpenedNote} />
        : ''}

      <div key={notes.length}>
        {localNotes && localNotes.map((item, index) => <Note key={index} openedNote={openedNote} data={item} />)}
      </div>
    </div>
  )
}
export default App;