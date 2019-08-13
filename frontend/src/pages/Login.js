import React, { useState } from 'react';
import './Login.css'
import logo from '../assets/logo.svg';

import api from '../services/api.js';

export default function Login({ history }) {
    const [username, setUsername] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.post('/devs', {
            username
        });

        history.push(`/dev/${response.data._id}`)
    }

    return (
        <div className='login-container'>
            <form onSubmit={handleSubmit}>
                <img src={logo} alt='Logo Tindev'/>
                <input 
                placeholder='Digite seu usuário do Github'
                value={username}
                onChange={e => setUsername(e.target.value)} 
                />
                <button type='submit'>Entrar</button>
            </form>
        </div>
    );
};