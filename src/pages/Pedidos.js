import {useState} from 'react'
import styles from './Pedidos.module.css'
import emailjs from '@emailjs/browser'

import Footer from '../layout/Footer'

function Pedidos (){

    const [nome, setNome] = useState('')
    const [contato, setContato] = useState('')
    const [pedido, setPedido] = useState('')

    const [msg, setMsg] = useState ('')

    

    function enviar(e){
        e.preventDefault()

        if (nome === ''){
            setMsg('Digite seu nome')
            return false
        }

        if(contato === ''){
            setMsg('Digite seu WhatsApp')
            return false
        }
        
        if (pedido === ''){
            setMsg('Qual o seu pedido?')
            return false
        }

        if(nome || contato || pedido !== ''){
        setMsg('Pedido enviado, em breve entraremos em contato com mais informações...Obrigado!')
         
           
        }
          
        const templateParams = {
            from_name: nome,
            number: contato,
            message: pedido,

        }

        emailjs.send('service_oes41pg', 'template_6d0q1wq', templateParams, 'K-AE_qQ5_fftczNzZ' )
        .then((response) => {
            alert('Email enviado', response.status, response.text)
            setNome ('')
            setContato ('')
            setPedido ('')

        }, (err)=>{
            alert('Erro ao enviar', err)
        })
        
       
    }   

    return(
        <body className={styles.body}>
            <div className={styles.container}>
                <h1>Faça seu pedido !</h1>
                
                <label>Digite seu nome</label>
                <input type='text' placeholder='Digite seu nome...' value={nome} onChange={(e) => setNome (e.target.value)}  />

                <label>Digite seu WhatsApp</label>
                <input type='number' placeholder='Insira seu contato...' value={contato} onChange={(e) => setContato (e.target.value)} />

                <label>Faça seu pedido</label>
                <input className={styles.inputmsg} type='text' placeholder='Deixe sua mensagem...' value={pedido} onChange={(e) => setPedido (e.target.value)} />
                
                <div className={styles.msg} ><alert>{msg}</alert></div>
                
                <button type='submit' onClick={enviar}>Enviar</button>
               
            </div>
            <div className={styles.f}><Footer /></div>
        </body>
    
    
    
    )
}
export default Pedidos