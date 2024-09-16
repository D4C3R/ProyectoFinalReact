import React from 'react'
import { toast } from 'react-toastify';
function HomeComponent() {
    window.onload= function(){
        toast.warning('Bienvenido')
        
    }
    return(
        <section>
            <h1>Hola Mundo</h1>
        </section>
    )
}
export default HomeComponent  