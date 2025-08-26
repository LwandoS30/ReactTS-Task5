import React, { useState } from 'react'
import styles from './Register.module.css'
import { ContentContainer } from '../../components5/ContentContainer'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const Register: React.FC = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        cellNumber: ''
    })

    type FormErrors = {
        
        firstName?: string, 
        lastName?: string, 
        cellNumber?: string, 
        email?: string,
        password?: string
        confirmPassword?: string
    }

    const [errors, setErrors] = useState<FormErrors>({});
    const [valid, setValid] = useState(true);

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        let isValid = true;
        let validationErrors: FormErrors = {};

        if(formData.firstName === ' ' || formData.firstName === null){
            isValid = false;
            validationErrors.firstName = 'First name is required';
        }

        if(formData.lastName === ' ' || formData.lastName === null){
            isValid = false;
            validationErrors.lastName = 'First name is required';
        }

        if(formData.cellNumber === ' ' || formData.cellNumber === null){
            isValid = false;
            validationErrors.cellNumber = 'cell number is required';
        }

        if(formData.email === ' ' || formData.email === null){
            isValid = false;
            validationErrors.email = 'Email address is required';
        } 
        else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            isValid = false;
            validationErrors.email = 'Email address is invalid';
        }

        if(formData.password === ' ' || formData.password === null){
            isValid = false;
            validationErrors.password = 'Password address is required';
        } 
        else if (formData.password.length < 12) {
            isValid = false;
            validationErrors.password = 'Password needs to be at least 12 characters long';
        }
        if(formData.confirmPassword !== formData.password){
            isValid = false;
            validationErrors.password = 'Password does not match';
        }

        setErrors(validationErrors);
        setValid(isValid);

        if(Object.keys(validationErrors).length === 0){
            axios.post('http://localhost:8000/users', formData)
            .then(result => console.log(result))
            .catch(err => console.log(err))
        }
    }

    return(
        <ContentContainer>
            <Navbar />
            <div className={styles['register-container']}>
                <h2>Register</h2>
                
                <form onSubmit={handleSubmit}>
                    {
                    valid ? <></> :
                        <span className={styles['text-error']}>
                            {errors.firstName}; {errors.lastName}; {errors.email};
                            {errors.password}; {errors.confirmPassword}; {errors.cellNumber}
                        </span>
                    
                    }
                    <input 
                        className={styles['input-class']} 
                        type="email" 
                        name='email'
                        placeholder='Email'
                        onChange={(e) => setFormData({...formData, email: e.target.value})} 
                    />
                    <input 
                        className={styles['input-class']} 
                        type="password" 
                        name='password'
                        placeholder='Password'
                        onChange={(e) => setFormData({...formData, password: e.target.value})} 
                    />
                    <input 
                        className={styles['input-class']} 
                        type="password" 
                        name='confirmPassword'
                        placeholder='Confirm password'
                        onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})} 
                    />
                    <input 
                        className={styles['input-class']} 
                        type="text" 
                        name='fisrtName'
                        placeholder='Name' 
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    />
                    <input 
                        className={styles['input-class']} 
                        type="text" 
                        name='lastName'
                        placeholder='Surname' 
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    />
                    <input 
                        className={styles['input-class']} 
                        type="text" 
                        name='cellNumber'
                        placeholder='Cell number'
                        onChange={(e) => setFormData ({...formData, cellNumber: e.target.value})} 
                    />
                    <button type="submit" className={styles['register-button']} >Register</button> 
                        
                        
                               
                
                </form>
            </div>
            <Footer />
        </ContentContainer>
        
    )
} 