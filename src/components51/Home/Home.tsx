import React from 'react'
import styles from './Home.module.css'
import { ContentContainer } from '../../components5/ContentContainer'

export const Home: React.FC = () => {
    return(
        <ContentContainer>
            <div className={styles['home-container']}>
                <form>
                    <label>Item Name: </label>
                    <input className={styles['itemName']}type="text" placeholder='product name'/>
                    <br />
                    <label>Quantity: </label>
                    <input className={styles['itemQuantity']} value={0} type="number" placeholder='Quantity' />
                    <br />
                    <label>Notes: </label>
                    <br />
                    <textarea className={styles['notes']} name="" id="" cols={0} rows={10}></textarea>
                    <br />
                    <label>Category: </label>
                    <select className={styles['categorOption']}>
                        <option value='category'>Category</option>
                        <option value='dairy'>Dairy</option>
                        <option value='produce'>Produce</option>
                        <option value='pantry'>Pantry</option>
                        <option value='meat'>Meat</option>
                        <option value='seafood'>Seafood</option>
                        <option value='beverage'>Beverage</option>
                        <option value='toileries'>Toiletry</option>
                        <option value='householdCleaning'>Household & Cleaning</option>
                        <option value='category'>Category</option>
                        <option value='other'>Other</option>
                    </select>
                    <br />
                    <button className={styles['addItem']} >Add Item</button>
                    <button className={styles['updateItem']} >Update Item</button>
                    <button className={styles['deleteItem']} >Delete Item</button>
                </form>
            </div>
    
        </ContentContainer>
        )
}