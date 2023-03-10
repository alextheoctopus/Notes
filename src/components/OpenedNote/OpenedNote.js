import './OpenedNote.css';
const OpenedNote = ({setEditNote}) => {

const btnOnClickHandlerClose=()=>{
    setEditNote(false);
}

    return (
        <>
            <div id="openedNote">
                <button id="close" onClick={btnOnClickHandlerClose}>x</button>
            </div>
        </>
    )
}
export default OpenedNote;