import React, { useState, useEffect } from 'react';
import { fetchproduct } from '../../../services/HomeCRUD';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import RandomProductComponent from '../RandomProductomponent/RandomProductComponent';
import "../../styles/Home.css";

function HomeComponent() {
    const [records, setRecords] = useState([]);
    const [filteredRecords, setFilteredRecords] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    
    useEffect(() => {
        fetchproduct()
            .then(data => {
                setRecords(data);
                setFilteredRecords(data);
            })
            .catch(error => {
                console.error('Error fetching product:', error);
            });
    }, []);
    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);
        const filtered = records.filter(product =>
            product.product.toLowerCase().includes(value)
        );
        setFilteredRecords(filtered);
    };

    return (
        <section>
            <RandomProductComponent />
            <div className="search-sort-container">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="search-bar"
                />
            </div>
            <h2 className="random-product-section">Available Products</h2>
            <section className="card-container">
                {filteredRecords.map((d, i) => (
                    <div className="card-item" key={i}>
                        <Card className="h-100 shadow-sm">
                            {d.image ? (
                                <Card.Img
                                    variant="top"
                                    src={`data:image/jpeg;base64,${d.image}`}
                                    alt="product"
                                    className="product-image"
                                />
                            ) : (
                                <Card.Img/>
                            )}
                            <Card.Body>
                                <Card.Title><strong>{d.product}</strong></Card.Title>
                                <Card.Text>
                                    <strong>Price:</strong> {d.price}
                                    <br />
                                    <strong>Duration (Hours):</strong> {d.duration}
                                    <br />
                                    <Link to={`/MakeAppointment/${d.id}`}>Make appointment</Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </section>
        </section>
    );
}

export default HomeComponent;
