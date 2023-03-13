import './Note.css';

const Note = ({ setOpenedNote, data }) => {

    const btnOnClickHandlerEdit = () => {
        setOpenedNote({ state: true, text: data});
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