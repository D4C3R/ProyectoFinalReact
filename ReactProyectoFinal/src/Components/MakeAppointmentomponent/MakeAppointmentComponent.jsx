import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchproductById, createAppointment } from '../../../services/MakeAppointmentCRUD';
import { toast } from 'react-toastify';

function MakeAppointmentComponent() {
    const { id } = useParams();
    const [productData, setProductData] = useState({ id: '', product: '', price: '', duration: '', image: '' });
    const [appointmentData, setAppointmentData] = useState({ day: '', hour: '' });
    const navigate = useNavigate();
    useEffect(() => {
        fetchproductById(id)
            .then(fetchedData => {
                setProductData(fetchedData);
            })
            .catch(error => {
                toast.error('Error fetching product data');
            });
    }, [id]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const appointment = {
            product: productData,
            day: appointmentData.day,
            hour: appointmentData.hour
        };
        createAppointment(appointment)
            .then(() => {
                toast.success('Appointment created successfully');
                navigate('/Home'); 
            })
            .catch(error => {
                toast.error('Error creating appointment');
            });
    };
    return (
        <div>
            <h2>Make Appointment for {productData.product}</h2>
            <div>
                {productData.image && (
                    <img
                        src={`data:image/jpeg;base64,${productData.image}`}
                        alt={productData.product}
                        style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                    />
                )}
                <p><strong>Price:</strong> {productData.price}</p>
                <p><strong>Duration:</strong> {productData.duration} hours</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="day">Select Day</label>
                    <input
                        type="date"
                        id="day"
                        value={appointmentData.day}
                        onChange={(e) => setAppointmentData({ ...appointmentData, day: e.target.value })}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="hour">Select Hour</label>
                    <input
                        type="time"
                        id="hour"
                        value={appointmentData.hour}
                        onChange={(e) => setAppointmentData({ ...appointmentData, hour: e.target.value })}
                        required
                    />
                </div>
                <button type="submit">Make Appointment</button>
            </form>
        </div>
    );
}

export default MakeAppointmentComponent;
