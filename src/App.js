import { useState } from "react";
import OpenedNote from './components/OpenedNote/OpenedNote';
import Note from "./components/Note/Note";
import './App.css';
import Header from "./components/Header/Header";
import EditedNote from "./components/EditedNote/EditedNote";
const App = () => {


  const [notes, setNotes] = useState([{ id: 1, value: 'first note' }]);
  const [openedNote, setOpenedNote] = useState({ state: false, text: '' });
  const [editedNote, setEditedNote] = useState({ id:0, state: false, text: 'first note' });

  const closeOpenedNote = () => {
    setOpenedNote({ state: false });
  }


  /* let localNotes = localStorage.getItem('notes');
 */
  return (
    <div className="wholeApp">
      <Header setOpenedNote={setOpenedNote} />

      {openedNote.state === true ? <OpenedNote setNotes={setNotes} openedNote={openedNote} closeOpenedNote={closeOpenedNote} notes={notes} setOpenedNote={setOpenedNote} />
        : ''}
      {editedNote.state ? <EditedNote editedNote={editedNote} setEditedNote={setEditedNote}></EditedNote> : ''}

      <div key={notes.length}>
        {notes.map((item,index ) => <Note key={index} id={index} data={item} editedNote={editedNote} setEditedNote={setEditedNote} />)}
      </div>

    </div>
  )
}
export default App;