import './Header.css';
const Header = ({ setOpenedNote }) => {

    const btnOnclickHandlerCreate = () => {

        setOpenedNote({state:true,value:''});
        //то же самое setNotes(notes.map((item) =>{return item} ));
    }

    return (
        <div className='header'>
            <button className="createNote" onClick={btnOnclickHandlerCreate}>Создать заметку</button>
        </div>
    );
}
export default Header;