import './Note.css';

const Note = ({ data }) => {

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
                <p className="text1">{data.value}</p>
            </div>
        </>

    )
}
export default Note;