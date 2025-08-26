import React from 'react'
import styles from './Register.module.css'
import { ContentContainer } from '../../components5/ContentContainer'

export const Register: React.FC = () => {
    return(
        <ContentContainer>
            <div className={styles['register-container']}>
                <h2>Register</h2>
                <form>
                    <input className={styles['input-class']} type="email" placeholder='Email' />
                    <input className={styles['input-class']} type="password" placeholder='Password' />
                    <input className={styles['input-class']} type="text" placeholder='Name' />
                    <input className={styles['input-class']} type="text" placeholder='Surname' />
                    <input className={styles['input-class']} type="text" placeholder='Cell number' />
                    <input className={styles['register-button']} type="button" value={'Register'} />
                </form>
            </div>
        </ContentContainer>
        
    )
} 