import { useRef } from 'react';

import './OpenedNote.css';

const OpenedNote = ({ createNote, closeOpenedNote, notes,setNotes }) => {

    const input = useRef(null);

    const btnOnClickHandlerClose = () => {
        closeOpenedNote();
    }
    const btnOnClickHandlerSave = () => {
        const inputNote = input.current.value;
        notes.push({ id: 2, value:inputNote });//я хочу чтобы у каждой заметки был свой уникальный айди,чтобы не было проблем с удалением
        notes.map(item => item);
        localStorage.setItem('notes', JSON.stringify(notes));
        let localNotes = localStorage.getItem('notes');
        setNotes(localNotes);
        createNote();
        console.log(notes)
    }

    return (
        <div id="openedNote">
            <button id="close" onClick={btnOnClickHandlerClose}>x</button>
            <input ref={input} type="text" className="input" placeholder='Оставьте заметку'  ></input>
            <button className="save" onClick={btnOnClickHandlerSave}>Сохранить</button>
        </div>
    )
}
export default OpenedNote;