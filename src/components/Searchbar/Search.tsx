import React from 'react'
import { ContentContainer } from '../../components5/ContentContainer'
import styles from './Searchbar.module.css'

export const Search: React.FC = () => {
    return(
        <div className={styles['search-container']}>
            <ContentContainer className={styles['searchbar-container']}>
                <Search />
            </ContentContainer>
                        
        </div>
    )
}