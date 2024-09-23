import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchproductById, updateproduct } from '../../../services/UpdateCRUD';
import { toast } from 'react-toastify';
import "../../styles/Update.css";

function UpdateComponent() {
    const { id } = useParams();
    const [data, setData] = useState({ id: '', price: "", product: '', duration: '', image: "" });
    const navigate = useNavigate();
    useEffect(() => {
        fetchproductById(id)
            .then(fetchedData => {
                setData(fetchedData);
            })
            .catch(error => {
                toast.error('Error fetching data');
            });
    }, [id]);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const base64String = reader.result.split(',')[1];
                setData(prevData => ({
                    ...prevData,
                    image: base64String
                }));
            };
            reader.onerror = (error) => {
                toast.error('Error reading file');
            };
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        updateproduct(id, data)
            .then(() => {
                toast.success('Data updated successfully');
                navigate('/administration');
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
                        <label htmlFor="product">product</label>
                        <input
                            type="text"
                            value={data.product}
                            onChange={e => setData({ ...data, product: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="price">Price</label>
                        <input
                            type="text"
                            value={data.price}
                            onChange={e => setData({ ...data, price: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="duration">Duration</label>
                        <input
                            type="number"
                            value={data.duration}
                            onChange={e => setData({ ...data, duration: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="image">Image</label>
                        { }
                        <input type="file" accept="image/*" onChange={handleImageChange} />
                        { }
                        {data.image && (
                            <div>
                                <img
                                    src={`data:image/jpeg;base64,${data.image}`}
                                    alt="product"
                                    style={{ width: '150px', height: '150px', marginTop: '10px' }}
                                />
                            </div>
                        )}
                    </div>
                    <div>
                        <button type="submit">Update</button>
                    </div>
                </form>
            </div>
            <br />
        </div>

    );
}

export default UpdateComponent;
