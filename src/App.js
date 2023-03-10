import { useState } from "react";
import Note from "./components/Note/Note";
import './App.css';
const App = () => {

 
  const [createNote, setCreateNote] = useState([]);
  

  let k = 1;

  const btnOnclickHandlerCreate = () => {
    createNote.push(++k);
    
    setCreateNote(createNote);
    console.log(createNote);
  }

  return (
    <>
      <button id="createNote" onClick={btnOnclickHandlerCreate}></button>
      {createNote.map((item, index) => <Note createNote={createNote} key={index}></Note>)}

    </>
  )
}
export default App;