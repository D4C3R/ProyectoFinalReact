import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { fetchproduct } from '../../../services/AdministrationCRUD';
import { toast } from 'react-toastify';
import Card from 'react-bootstrap/Card';
import "../../styles/Home.css";

function RandomProductComponent() {
    const [randomProduct, setRandomProduct] = useState(null);

    useEffect(() => {
        fetchproduct()
            .then(data => {
                if (data.length > 0) {
                    const randomIndex = Math.floor(Math.random() * data.length);
                    setRandomProduct(data[randomIndex]);
                }
            })
            .catch(error => {
                console.error('Error fetching product:', error);
                toast.error('Error fetching product');
            });
    }, []);

    return (
        <section className="random-product-section">
            <h2 className="texto">Featured Product</h2>
            {randomProduct ? (
                <Card className="h-100 shadow-sm random-product-card">
                    {randomProduct.image ? (
                        <Card.Img
                            variant="top"
                            src={`data:image/jpeg;base64,${randomProduct.image}`}
                            alt="Product"
                            className="random-product-image"
                        />
                    ) : (
                        <Card.Img
                            variant="top"
                            src="https://via.placeholder.com/200"
                            alt="No Image"
                            className="random-product-image"
                        />
                    )}
                    <Card.Body>
                        <Card.Title><strong>{randomProduct.product}</strong></Card.Title>
                        <Card.Text>
                            <strong>Price:</strong> {randomProduct.price} 
                            <br />
                            <strong>Duration (Hours):</strong> {randomProduct.duration}
                            <br />
                            <Link to={`/MakeAppointment/${randomProduct.id}`}>Make appointment</Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            ) : (
                <p>Loading...</p>
            )}
        </section>
    );
}

export default RandomProductComponent;
