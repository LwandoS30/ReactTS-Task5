import React from 'react'
import styles from './Login.module.css'
import { ContentContainer } from '../../components5/ContentContainer'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'
import { Link } from 'react-router-dom'

export const Login: React.FC<any> = () => {
    return(
        <ContentContainer>
            <Navbar />
                <div className={styles['login-container']}>
                    <h2>Login</h2>
                    <input className={styles['input-class']} type="email" placeholder='Email Address' />
                    <input className={styles['input-class']} type="password" placeholder='Password'/>
                    <input 
                        className={styles['login-button']} 
                        type="button" 
                        value={'Login'} />
                    <input 
                        className={styles['register-button']} 
                        type="button"  
                        value={'Register'}   
                    />
                    <p>
                        Don't have and account? <Link to='/register'>Register</Link>  
                    </p>
                </div>
            <Footer />
        </ContentContainer>
    );
}