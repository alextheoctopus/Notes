import { useRef } from 'react';

import './OpenedNote.css';

const OpenedNote = ({ createNote, closeOpenedNote, notes, setNotes, setOpenedNote }) => {

    const input = useRef(null);

    const btnOnClickHandlerClose = () => {
        closeOpenedNote();
    }
    const btnOnClickHandlerSave = () => {
        //const inputNote = input.current.value;

        /*   notes.push({ id: 2, value: inputNote });//я хочу чтобы у каждой заметки был свой уникальный айди,чтобы не было проблем с удалением
          notes.map(item => item); */

        localStorage.setItem('notes', JSON.stringify(notes));

        let localNotes = localStorage.getItem('notes');
        setNotes(JSON.parse(localNotes));

        setOpenedNote({ state: false });

        console.log(notes);
    }

    return (
            <div className="openedNote">
                <input ref={input} type="text" className="input" placeholder='Оставьте заметку'  ></input>
                <button className="save" onClick={btnOnClickHandlerSave}>Сохранить</button>
                <button className="close" onClick={btnOnClickHandlerClose}>x</button>
            </div>
    )
}
export default OpenedNote;