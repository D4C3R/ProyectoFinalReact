import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createCita } from '../../../services/CreateCRUD'; // 

function SubmitImage(){ 
    const [file, setFile] = useState()
    const upload = () => {
const formData = new FormData()
formData.append('file',file)
axios.post('http://localhost:2077/products',formData)
.then(res =>{})
.catch(er => console.log(er))
    }
    return(
        <div>
            <input type="file" onChange={(e) => setFile(e.target.files[0])}/> 
            <button type='button' onClick={upload}>upload</button>
        </div>
    )
}
  
export default SubmitImage