import './Header.css';
const Header = ({ setCreateNote }) => {

    const btnOnclickHandlerCreate = () => {
        setCreateNote();
    }

    return (
        <div className='header'>
            <button className="createNote" onClick={btnOnclickHandlerCreate}>Создать заметку</button>
        </div>
    );
}
export default Header;