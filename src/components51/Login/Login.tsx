import React from 'react'
import styles from './Login.module.css'
import { ContentContainer } from '../../components5/ContentContainer'

type TextInputProps = {
    id?: string,
    value?: string | number,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    style?: React.CSSProperties,
    label: string,
    error?: string,
    name?: string
}

export const Login: React.FC<TextInputProps> = ({ id, value, onChange, style, label, error, name }) => {
    return(
        <ContentContainer>
                <div className={styles['login-container']}>
                    <h2>Login</h2>
                    <input className={styles['input-class']} type="email" placeholder='Email Address' />
                    <input className={styles['input-class']} type="password" placeholder='Password'/>
                    <input className={styles['login-button']} type="button" value={'Login'} />
                    <input className={styles['register-button']} type="button" value={'Register'} />
                </div>
        </ContentContainer>
        
        
    )
}