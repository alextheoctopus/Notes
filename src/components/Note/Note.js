import './Note.css';

const Note = ({ openedNote/* ,setEditNote */ }) => {

    const btnOnClickHandlerEdit = () => {
        //setEditNote(true);
    }

    const btnOnClickHandlerDelete = () => {

    }

    return (
        <>
            <div className="noteList" >
                <button className="edit" onClick={btnOnClickHandlerEdit}>Редактировать</button>
                <button className="delete" onClick={btnOnClickHandlerDelete}>Удалить</button>
                <p>{openedNote.value}</p>
            </div>
        </>

    )
}
export default Note;