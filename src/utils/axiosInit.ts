import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://idyllic-pegasus-70f08e.netlify.app',
    timeout: 3000,
});