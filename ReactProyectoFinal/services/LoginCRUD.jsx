
import axios from 'axios';
import { toast } from 'react-toastify';

const LoginCRUD = async (username, password, navigate, setLoginError, setLoginMessage) => {
    try {
        const url = `http://localhost:2077/users?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
        const response = await axios.get(url);
        const data = response.data;
        if (Array.isArray(data) && data.length > 0) {
            const user = data[0];
            if (user.password === password) {
                setLoginMessage('Login successful');
                toast.success('Login successful');
                localStorage.setItem('Identified','True')
                setTimeout(() => {
                    navigate('/Home');
                }, 1000);
            } else {
                setLoginError('Invalid password');
                toast.error('Invalid password');
            }
        } else {
            setLoginError('Invalid username');
            toast.error('Invalid username');
        }
    } catch (error) {
        console.error(error);
        setLoginError('Login failed due to: ' + (error.response?.data?.error || error.message));
        toast.error('Login failed due to: ' + (error.response?.data?.error || error.message));
    }
};

export default LoginCRUD;
