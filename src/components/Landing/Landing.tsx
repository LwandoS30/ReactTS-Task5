import React from 'react'
import styles from './Landing.module.css'
import { ContentContainer } from '../../components5/ContentContainer'
import { Footer } from '../Footer/Footer'
import { Navbar } from '../Navbar/Navbar'


export const Landing: React.FC = () => {
    return(
        <ContentContainer>
            <Navbar />
            <div className={styles['landing-container']}>
                <h3>Smart Shopping List Welcomes you!</h3>
                <div className={styles['intro-container']}>
                    <p>Simplify your shopping experience with the app that 
                        allows you to manage and orginze what happens to be 
                        needed/ wanted in your house-hold with a few clicks</p>
                </div>

                <div className={styles['shopping-list-buttons']}>
                    <h4>Features: </h4>
                    <ul>
                        <li>Add and manage your shopping list.</li>
                        <li>Edit or delete your shopping list.</li>
                        <li>Sort lists ascending or descending order.</li>
                        <li>Sorted by name, category and date added at.</li>
                    </ul>
                
                    <div className={styles['access-buttons']}>
                        <input className={styles['input-add']} type="text" value={'Add'} />
                        <input className={styles['input-update']} type="text" value={'Update'} />
                        <input className={styles['input-delete']} type="text" value={'Delete'} />
                    </div>
                </div>
            </div>
            <Footer />
        </ContentContainer>
        
    )
}
