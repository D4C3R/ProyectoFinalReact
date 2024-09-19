import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { fetchproduct } from '../../../services/AdministrationCRUD';
import { toast } from 'react-toastify';
import Card from 'react-bootstrap/Card';
import "../../styles/Home.css"; 

function HomeComponent() {
    window.onload = function () {
        toast('Welcome');
    };

    const [records, setRecords] = useState([]);

    useEffect(() => {
        fetchproduct()
            .then(data => {
                setRecords(data);
            })
            .catch(error => {
                console.error('Error fetching product:', error);
            });
    }, []);

    return (
        <section className="card-container">
            {records.map((d, i) => (
                <div className="card-item" key={i}>
                    <Card className="h-100 shadow-sm">
                        {d.image ? (
                            <Card.Img
                                variant="top"
                                src={`data:image/jpeg;base64,${d.image}`}
                                alt="product"
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                        ) : (
                            <Card.Img
                                variant="top"
                                src="https://via.placeholder.com/200"
                                alt="No Image"
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                        )}
                        <Card.Body>
                            <Card.Title><strong>{d.product}</strong></Card.Title>
                            <Card.Text>
                                <strong>Price:</strong> {d.price} 
                                <br />
                                <strong>Duration(Hours):</strong> {d.duration}
                                <br />
                                <Link to={`/MakeAppointment/${d.id}`}>Make appointment</Link>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </section>
    );
}

export default HomeComponent;


/*
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchproduct, deleteproduct } from '../../../services/AdministrationCRUD';
import { toast } from 'react-toastify';
import "../../styles/Home.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';

function HomeComponent() {
    window.onload = function () {
        toast.success('Bienvenido')
    }
    const [product, setproduct] = useState([]);

    
    const navigate = useNavigate();
    useEffect(() => {
        fetchproduct()
    }, []);
    return (
        <div>
        <Row className="flex-wrap">
{product.map((product, index) => (
<Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
<Card>
<Card.img variant="top">
{d.image ? (
                                        <img
                                            src={`data:image/jpeg;base64,${product.image}`}
                                            alt="product"
                                            style={{ width: '100px', height: '100px' }}
                                        />
                                    ) : (
                                        <p>No image</p>
                                    )}    
</Card.img>
<Card.Body>
<Card.Title>{product.product}</Card.Title>
<Card.Text>{product.price}</Card.Text>
<Card.Text>{product.duration}</Card.Text>
<Button variant='danger' className='p-1 mx-2' ></Button>
</Card.Body>
</Card>
</Col>
))}
        </Row>
        </div>
           
    )
}
export default HomeComponent 
*/ 