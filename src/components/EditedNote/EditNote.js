import React, { useState } from 'react';
import './EditNote.css';
const EditNote = ({ changeNote, createNewNote, type, closeOpenedNote, noteData }) => {
    const [value, setValue] = useState(noteData?.text);

    const btnOnClickHandlerSaveChanges = () => {
        if (type === 'edit') {
            changeNote({ id: noteData.id, value });
        } else {
            createNewNote({ value });
        }
        closeOpenedNote();

    }

    const btnOnClickHandlerClose = () => {
        closeOpenedNote();
    }

    return (
        <div className='editNote'>
            {type === 'edit' ? <p>Редактировать</p> : <p>Создать новую заметку</p>}
            <input className='input' value={value} onChange={(event) => setValue(event.target.value)} />
            <button className='saveChanges' onClick={btnOnClickHandlerSaveChanges}>Сохранить изменения</button>
            <button className='close' onClick={btnOnClickHandlerClose}>x</button>
        </div>
    )
}

export default EditNote;