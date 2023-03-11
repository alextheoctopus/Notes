import './OpenedNote.css';
import { useRef } from 'react';
const OpenedNote = ({ notes, setNotes, setOpenedNote }) => {

    const input = useRef(null);

    const btnOnClickHandlerClose = () => {
        setOpenedNote({ state: false, value: '' });
    }
    const btnOnClickHandlerSave = () => {
        const inputNote = input.current.value;
        notes.push(notes.length + 1);
        setNotes(notes.map(item => item));
        setOpenedNote({ state: false, value: inputNote });
        //сохранить данные
    }

    return (
        <>
            <div id="openedNote">
                <button id="close" onClick={btnOnClickHandlerClose}>x</button>
                <input ref={input} type="text" className="input" placeholder='Оставьте заметку'  ></input>
                <button className="save" onClick={btnOnClickHandlerSave}>Сохранить</button>
            </div>
        </>
    )
}
export default OpenedNote;