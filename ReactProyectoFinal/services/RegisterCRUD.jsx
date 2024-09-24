import { toast } from 'react-toastify';

const RegisterCRUD = (allData, navigate) => {
    fetch("http://localhost:2077/users", {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(allData)
    })
    .then((res) => {
        toast.success('Register complete');
        setTimeout(() => {
            navigate('/Login');
        }, 5000);
    })
    .catch((err) => {
        toast.error('Register failed due to ' + err.message);
    });
};

export default RegisterCRUD;
