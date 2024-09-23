import React, { useState, useEffect } from 'react';
import { fetchproduct } from '../../../services/AdministrationCRUD';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import RandomProductComponent from '../RandomProductomponent/RandomProductComponent';
import "../../styles/Home.css";

function HomeComponent() {
    const [records, setRecords] = useState([]);
    const [filteredRecords, setFilteredRecords] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("");
    
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
    const handleSort = (order) => {
        setSortOrder(order);
        const sorted = [...filteredRecords].sort((a, b) => {
            if (order === "asc") return a.price - b.price;
            if (order === "desc") return b.price - a.price;
            return 0;
        });
        setFilteredRecords(sorted);
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
                <div className="sort-buttons">
                    <button onClick={() => handleSort("asc")}>Sort by Price: Low to High</button>
                    <button onClick={() => handleSort("desc")}>Sort by Price: High to Low</button>
                </div>
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
                                <Card.Img
                                    variant="top"
                                    src="https://via.placeholder.com/200"
                                    alt="No Image"
                                    className="product-image"
                                />
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
