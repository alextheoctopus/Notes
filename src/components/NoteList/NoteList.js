import Note from "../Note/Note";

const NoteList = ({ notes, setEditNote }) => {
    return (
        <div key={notes.length}>
            {notes.map((item, index) => { return <Note key={index} data={item} setEditNote={setEditNote} /> })}
        </div>
    );
}

export default NoteList;