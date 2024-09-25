import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchproduct, deleteproduct } from '../../../services/AdministrationCRUD'; 
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import '../../styles/Administration.css';

function AdministrationComponent() {
    const [columns, setColumns] = useState([]);
    const [records, setRecords] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetchproduct()
            .then(data => {
                if (data.length > 0 && data[0].image) {
                    setColumns([...Object.keys(data[0]), 'image']);
                } else {
                    setColumns(Object.keys(data[0]));
                }
                setRecords(data);
            })
            .catch(error => {
                console.error('Error fetching product:', error);
            });
    }, []);
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteproduct(id)
                    .then(() => {
                        toast.success('Item deleted successfully!');
                        fetchproduct()
                            .then(data => {
                                setColumns(Object.keys(data[0]));
                                setRecords(data);
                            })
                            .catch(error => {
                                console.error('Error fetching product after deletion:', error);
                            });
                    })
                    .catch(error => {
                        toast.error('Error deleting item');
                        console.error('Error deleting item:', error);
                    });
            } else {
                toast.info('Action canceled');
            }
        });
    };
    return (
        <div className='productList'>
            <div><Link to="/Create">Add +</Link></div>
            <table>
                <thead>
                    <tr>
                        {columns.map((c, i) => (
                            <th key={i}>{c}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {
                        records.map((d, i) => (
                            <tr key={i}>
                                <td>{d.id}</td>
                                <td>{d.product}</td>
                                <td>{d.price}</td>
                                <td>{d.duration}</td>
                                <td>
                                    {}
                                    {d.image ? (
                                        <img 
                                            src={`data:image/jpeg;base64,${d.image}`} 
                                            alt="product"
                                            style={{ width: '100px', height: '100px' }} 
                                        />
                                    ) : (
                                        <p>No image</p>
                                    )}
                                </td>
                                <td>
                                    <Link to={`/Update/${d.id}` }className=''>Update</Link>
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
