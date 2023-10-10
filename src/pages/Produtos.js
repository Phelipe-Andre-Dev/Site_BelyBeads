import styles from './Produtos.module.css'
import Footer from '../layout/Footer'


import img2 from '../layout/img.2.jpg'
import img3 from '../layout/img.3.jpg'
import img4 from '../layout/img.4.jpg'
import img5 from '../layout/img.5.jpg'




function Produtos (){
    return(
        <div className={styles.containerpr}>
            <h1 className={styles.h1}>Produtos</h1>

            <div className={styles.container}>
                <img src={img2}/>
                <img src={img3}/>
                <img src={img4}/>
                <img className={styles.img5} src={img5}/>
                
             </div>
           
            <div className={styles.f}><Footer/></div>
        </div>
    )
}
export default Produtos