import styles from './Produtos.module.css'
import Footer from '../layout/Footer'
import { Link } from 'react-router-dom'


import img2 from '../layout/img.2.jpg'
import img3 from '../layout/img.3.jpg'
import img4 from '../layout/img.4.jpg'
import img5 from '../layout/img.5.jpg'
import img6 from '../layout/img.6.jpg'
import img7 from '../layout/img.7.jpg'
import img8 from '../layout/img.8.jpg'
import img9 from '../layout/img.9.jpg'
import img10 from '../layout/img.10.jpg'
import img11 from '../layout/img.11.jpg'
import img12 from '../layout/img.12.jpg'






function Produtos (){
    return(
        <div className={styles.containerpr}>
            <h1 className={styles.h1}>Produtos</h1>

            <div className={styles.container}>
                <img src={img2}/>
                <img src={img3}/>
                <img src={img4}/>
                <img className={styles.img5} src={img5}/>
                <img className={styles.img6} src={img6}/>
                <img src={img7}/>
                <img src={img8}/>
                <img src={img9}/>
                <img src={img10}/>
                <img src={img11}/>
                <img src={img12}/>
            </div>

          <h3>Arraste para visualizar...</h3>

          <article>
            <h3 className={styles.textoprodutos}>
                Crie sua própria pulseira, ou chaveiro, personalizados! 
            </h3>
          </article>
          <Link className={styles.btn} to='/pedidos'>Compre Já</Link>
           
            <div className={styles.f}><Footer/></div>
        </div>
    )
}
export default Produtos