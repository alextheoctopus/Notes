import './Note.css';
const Note = ({ setEditNote }) => {
/* 
    const btnOnClickHandlerEdit = () => {
        setEditNote(true);
    }

    const btnOnClickHandlerDelete = () => {

    } */

    return (
        <>
            <div  id="noteList">
                <button id="edit" onClick={btnOnClickHandlerEdit}>Редактировать</button>
                <button id="delete" onClick={btnOnClickHandlerDelete}> Удалить </button>
            </div>
        </>

    )
}
export default Note;