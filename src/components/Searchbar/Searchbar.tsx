import React from 'react'
import styles from './Searchbar.module.css'
import { Text } from '../Text/Text'
import searchicon  from '../../assets/searchicon.png'
import { ContentContainer } from '../ContentContainer'

export const Searchbar: React.FC = () => {
    return(
       <ContentContainer>
            <div className={styles['search-bar']}>
                <Text variant={'span'} style={{ color: 'rgb(20, 20, 20)', padding: 10 }}>Search</Text>
                <input type='text' className={ styles[ 'search-input' ]} placeholder='Search for perfumes...' />
                <img src={ searchicon } alt='search bar icon' className={styles['search-icon']} />
            </div>
       </ContentContainer>
    )
}