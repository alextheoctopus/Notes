import React, { useState } from 'react';
import './EditedNote.css';
const EditedNote = ({ editedNote, setEditedNote }) => {
    const [text, setText] = useState(editedNote.text);
    const [isEdit, setIsEdit] = useState(false);

    const btnOnClickHandlerSaveChanges = () => {
        //изменить текст через юзстейт
        setEditedNote({ id: editedNote.id, state: false, text: text });//че я сделала вообще
    }
    console.log(123)
    return (
        <div className='editedNote'>
            {isEdit ? <input className='input' value={text} onChange={(event) => setText(event.target.value)} /> :
                <div className='entryField' onClick={() => setIsEdit(true)}>{text}</div>
            }
            <button className='saveChanges' onClick={btnOnClickHandlerSaveChanges}>Сохранить изменения</button>
        </div>
    )
}

export default EditedNote;