import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createproduct } from '../../../services/CreateCRUD';

function CreateComponent() {
    const [inputData, setInputData] = useState({
        product: '',
        price: '',
        duration: '',
        image: ''
    });

    const navigate = useNavigate();


    const convertToBase64 = (files) => {
        Array.from(files).forEach(file => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const base64String = reader.result.split(',')[1];
                setInputData(prevState => ({
                    ...prevState,
                    image: base64String
                }));
            };
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createproduct(inputData)
            .then(() => {
                toast.success("product added");
                navigate('/Administration');
            })
            .catch(error => {
                toast.error("Error adding product");
                console.error(error);
            });
    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="product">product</label>
                        <input
                            type="text"
                            onChange={e => setInputData({ ...inputData, product: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="price">Price</label>
                        <input
                            type="number"
                            onChange={e => setInputData({ ...inputData, price: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="duration">Duration</label>
                        <input
                            type="number"
                            onChange={e => setInputData({ ...inputData, duration: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="image">Upload Image</label>
                        <input 
                            type="file" 
                            multiple 
                            onChange={e => convertToBase64(e.target.files)}
                        />
                    </div>
                    <div>
                        <button type="submit">Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateComponent;
