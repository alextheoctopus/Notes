import './Note.css';

const Note = ({ setEditNote, data }) => {
    const { id, value } = data;

    const btnOnClickHandlerEdit = () => {
        setEditNote({ id, value });
    }

    return (
        <>
            <div className="noteList" >
                <button className="edit" onClick={btnOnClickHandlerEdit}>Редактировать</button>
                <p className='text1'>{value}</p>
            </div>
        </>

    )
}
export default Note;