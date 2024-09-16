import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCitaById, updateCita } from '../../../services/UpdateCRUD'; // Import the API functions
import { toast } from 'react-toastify';

function UpdateComponent() {
    const { id } = useParams();
    const [data, setData] = useState({ id: '', product: '', duration: '' });
    const navigate = useNavigate();

    useEffect(() => {
        fetchCitaById(id)
            .then(fetchedData => {
                setData(fetchedData);
            })
            .catch(error => {
                toast.error('Error fetching data');
            });
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateCita(id, data)
            .then(() => {
                toast.success('Data updated successfully');
                navigate('/');
            })
            .catch(error => {
                toast.error('Error updating data');
            });
    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="id">ID</label>
                        <input type="text" disabled value={data.id} />
                    </div>
                    <div>
                        <label htmlFor="product">Product</label>
                        <input
                            type="text"
                            value={data.product}
                            onChange={e => setData({ ...data, product: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="duration">duration</label>
                        <input
                            type="time"
                            value={data.duration}
                            onChange={e => setData({ ...data, duration: e.target.value })}
                        />
                    </div>
                    <div>
                        <button type="submit">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdateComponent;
