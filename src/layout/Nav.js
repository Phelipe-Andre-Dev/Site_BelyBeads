import { Link } from "react-router-dom"
import logo from '../../src/layout/logo.jpg'
import styles from './Nav.module.css'
function Nav (){
    return(
        <nav className={styles.nav}>
           
            <ul className={styles.ul}>
                <img className={styles.img} alt='bely' src={logo}></img>
                <li className={styles.li}>
                    <Link to='/'>Home</Link>
                </li>

                <li className={styles.li}>
                    <Link to='Produtos'>Produtos</Link>
                </li>

                <li className={styles.li}>
                    <Link to='Pedidos'>Pedidos</Link>
                </li>
            </ul>
        </nav>
    
   )
}
export default Nav