import './NavBar.scss'
import IntoLogo from '../../assets/IntoLogoBCKHR.png'
import CartWidget from '../CartWidget/CartWidget'
export const NavBar = () => {

    return(
        <header className='header'>
            <div className='header__container'>
                {<a href="index.html">
                        <img src={IntoLogo} className="logo" alt="Into Logo" />
                </a>}
                <nav className='navbar'>
                    <ul>
                        <li>
                            <a href="#" className='navbar__link'>Aperitivos</a>
                        </li>
                        <li>
                            <a href="#" className='navbar__link'>Vinos</a>
                        </li>
                    </ul>
                </nav>
                <CartWidget/>
            </div>
        </header>
    )
}

export default NavBar