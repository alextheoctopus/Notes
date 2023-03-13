import './Note.css';

const Note = ({ id, setEditedNote, data, editedNote }) => {

    const btnOnClickHandlerEdit = () => {
        setEditedNote({ id: id, state: true, text: data.value });
    }
    console.log(editedNote.text)

    return (
        <>
            <div className="noteList" >
                <button className="edit" onClick={btnOnClickHandlerEdit}>Редактировать</button>
                {editedNote.text != data.value ? <p className="text1">{editedNote.text}</p> : <p className="text1">{data.value}</p>}
            </div>
        </>

    )
}
export default Note;