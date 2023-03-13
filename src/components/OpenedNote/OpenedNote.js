import { useRef } from 'react';

import './OpenedNote.css';

const OpenedNote = ({ createNote, openedNote, closeOpenedNote, notes, setNotes, setOpenedNote }) => {

    const input = useRef(null);

    const btnOnClickHandlerClose = () => {
        closeOpenedNote();
    }

    const btnOnClickHandlerSave = () => {
        const inputNote = input.current.value;

        notes.push({ id: 2, value: inputNote });//я хочу чтобы у каждой заметки был свой уникальный айди,чтобы не было проблем с удалением
        notes.map(item => item);

        localStorage.setItem('notes', JSON.stringify(notes));

        setNotes(notes);

        setOpenedNote({ state: false });

    }

    return (
        <div className="openedNote">
            <input ref={input} type="text" className="input" placeholder='Оставьте заметку'>{openedNote.text}</input>
            <button className="save" onClick={btnOnClickHandlerSave}>Сохранить</button>
            <button className="close" onClick={btnOnClickHandlerClose}>x</button>
        </div>
    )
}
export default OpenedNote;