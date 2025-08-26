import React from 'react'
import styles from './Footer.module.css'
import { ContentContainer } from '../../components5/ContentContainer'

export const Footer: React.FC = () => {
     return(
        <footer>
            <ContentContainer className={styles['footer-container']}>
                <i>Shopping-List &copy; 2025</i>
            </ContentContainer>
        </footer> 
     )
}
