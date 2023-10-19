import styles from './Home.module.css'
import { Link } from 'react-router-dom'
import Footer from '../layout/Footer'

function Home(){
    return(
        <div className={styles.Home}>
            <div>
                <h1>Home</h1>
                <h2>Sejam Bem-Vindos a <h1 className={styles.bely}>BelyBeads</h1></h2>
               
                <h3 className={styles.textohome}> Descubra o charme e exclusividade das pulseiras
                    personalizadas da BelyBeads, crie sua própria pulseira, para usar em qualquer ocasião.

                </h3>
                

                <h2>Siga também nossa página no Instagram <h3><a href="https://instagram.com/belybeadss?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr">BelyBeads</a></h3>
                    
                </h2> 
                
                            
            </div>
            <Link className={styles.btn} to='/produtos'>Produtos</Link>
            <div className={styles.f}><Footer /></div>
        </div>
    )
}
export default Home