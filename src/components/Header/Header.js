import './Header.css';
const Header = ({ setOpenedNote }) => {

    const btnOnclickHandlerCreate = () => {
        setOpenedNote({state:true,value:''});
    }

    return (
        <div className='header'>
            <button className="createNote" onClick={btnOnclickHandlerCreate}>Создать заметку</button>
        </div>
    );
}
export default Header;