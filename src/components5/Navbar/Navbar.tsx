import React from 'react'
import { Text } from '../Text/Text'
import styles from './Navbar.module.css'
import { ContentContainer } from '../../components5/ContentContainer'
import { Link } from 'react-router-dom'

export const Navbar: React.FC = () => {
  
    return(
        <nav>
            <ContentContainer className={styles.content}>
                <Text variant='h2' style={{ margin: 0}}>Smart Shopping List</Text>
                <div className={styles.links}>
                    <Link to='/' className={styles.link}>Home</Link>
                    <Link to='/login' className={styles.link}>Login</Link>
                    <Link to='/register' className={styles.link}>Register</Link>
                
                    <div className={styles['profile-logo']}>
                        <Text variant={'span'}>U</Text>
                    </div>
                </div>
            </ContentContainer>
        
        </nav>   
    )
}