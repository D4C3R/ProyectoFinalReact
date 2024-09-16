import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchproducts, deleteProduct } from '../../../services/AdministrationCRUD'; 
import { toast } from 'react-toastify';

function AdministrationComponent() {  
    const [columns, setColumns] = useState([]);
    const [records, setRecords] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchproducts()
            .then(data => {
                setColumns(Object.keys(data[0]));
                setRecords(data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    const handleDelete = (id) => {
        const confirmation = window.confirm("Are you sure you want to delete this item?");
        if (confirmation) {
            deleteProduct(id)
                .then(() => {
                    toast.success('Item deleted successfully!');
                    // Refresh the data
                    fetchproducts()
                        .then(data => {
                            setColumns(Object.keys(data[0]));
                            setRecords(data);
                        })
                        .catch(error => {
                            console.error('Error fetching products after deletion:', error);
                        });
                })
                .catch(error => {
                    console.error('Error deleting item:', error);
                });
        }
    };

    return (
        <div>
            <div><Link to="/Create">Add +</Link></div>
            <table>
                <thead>
                    <tr>
                        {columns.map((c, i) => (
                            <th key={i}>{c}</th>
                        ))}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        records.map((d, i) => (
                            <tr key={i}>
                                <td>{d.id}</td>
                                <td>{d.product}</td>
                                <td>{d.duration}</td>      
                                <td>
                                    <Link to={`/Update/${d.id}`}>Update</Link>
                                    <button onClick={() => handleDelete(d.id)}>Delete</button>   
                                </td>                       
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default AdministrationComponent;
