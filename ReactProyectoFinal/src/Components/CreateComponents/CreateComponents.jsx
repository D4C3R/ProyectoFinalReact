import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createCita } from '../../../services/CreateCRUD';

function CreateComponent() {
    const [inputData, setInputData] = useState({ product: '', price: '', duration: '', image: '' });
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        createCita(inputData)
            .then(() => {
                toast.success("Appointment added");
                navigate('/Administration');
            })
            .catch(error => {
                toast.error("Error adding appointment");
                console.error(error);
            });
    };
    const converttoBase64 = (files) => {
        Array.from(files).forEach(file => {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                var arrayAuxiliar = [];
                var base64 = reader.result;
                arrayAuxiliar = base64.split(',');
                console.log(arrayAuxiliar[1]);
            }
        })
    }
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="product">Product</label>
                        <input
                            type="text"
                            onChange={e => setInputData({ ...inputData, product: e.target.value })}
                        />
                    <div>
                        <label htmlFor="price">Price</label>
                        <input
                            type="number"
                            onChange={e => setInputData({ ...inputData, price: e.target.value })}
                        />
                    </div>
                    </div>
                    <div>
                        <label htmlFor="duration">duration</label>
                        <input
                            type="time"
                            onChange={e => setInputData({ ...inputData, duration: e.target.value })}
                        />
                    </div>
                    <div>
                        <input type="file" multiple onChange={(e)=>converttoBase64(e.target.files)}/>
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
