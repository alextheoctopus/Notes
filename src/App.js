import { useState } from "react";
import './App.css';
import Header from "./components/Header/Header";
import EditNote from "./components/EditedNote/EditNote";
import NoteList from "./components/NoteList/NoteList";
const App = () => {

  const localNotes = JSON.parse(localStorage.getItem('notes'));

  const [notes, setNotes] = useState(localNotes || [{ id: 0, value: 'first note' }]);
  const [noteData, setNoteData] = useState({});
  const [openEditNote, setOpenEditNote] = useState(false);

  const closeOpenedNote = () => {
    setNoteData({});
    setOpenEditNote(false);
  }

  const setCreateNote = () => {
    setOpenEditNote('create')
  }

  const setEditNote = (data) => {
    setOpenEditNote('edit');
    setNoteData(data);
  }

  const createNewNote = ({ value }) => {
    notes.push({ id: notes.length, value });
    localStorage.setItem('notes', JSON.stringify(notes));
    setNotes(notes);
    setOpenEditNote(false);
  }

  const changeNote = ({ id, value }) => {
    const note = notes.find(note => note.id === id);
    note.value = value;
    localStorage.setItem('notes', JSON.stringify(notes));

    setNotes(notes);
    setOpenEditNote(false);
  }

  return (
    <div className="wholeApp">
      <Header setCreateNote={setCreateNote} />
      {openEditNote && <EditNote
        changeNote={changeNote}
        createNewNote={createNewNote}
        closeOpenedNote={closeOpenedNote}
        type={openEditNote}
        noteData={noteData} />
      }
      <NoteList key={notes.length} notes={notes} setEditNote={setEditNote} />

    </div>
  )
}
export default App;