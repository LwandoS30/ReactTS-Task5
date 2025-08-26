import React from 'react'
import { Text } from '../Text/Text'
import styles from './Navbar.module.css'
import { ContentContainer } from '../../components5/ContentContainer'

export const Navbar: React.FC<any> = () => {
  
    return(
        <nav>
            <ContentContainer className={styles.content}>
                <Text variant='h2' style={{ margin: 0}}>Smart Shopping List</Text>
                <div className={styles.links}>
                    <a href="/#" className={styles.link}>Home</a>
                    <a href="/#" className={styles.link}>Login</a>
                    <a href="/#" className={styles.link}>Rgister</a>
                
                    <div className={styles['profile-logo']}>
                        <Text variant={'span'}>U</Text>
                    </div>
                </div>
            </ContentContainer>
        
        </nav>   
    )
}