import styles from './Home.module.css'

import Footer from '../layout/Footer'

function Home(){
    return(
        <div className={styles.Home}>
            <div>
                <h1>Home</h1>
                <h2>Sejam Bem-Vindos a <h1 className={styles.bely}>BelyBeads</h1></h2>
            
                
            </div>
            <div className={styles.f}><Footer /></div>
        </div>
    )
}
export default Home