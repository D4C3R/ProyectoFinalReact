import React from 'react'
import saylu_icon from "../../img/saylu_icon.jpeg"
import "../../styles/AboutUs.css"


function AboutUsComponent() {
    return (
        <section>
            <br />
            <div className='image'>
                <img src={saylu_icon} className='imageAboutUs' />
            </div>
            <div className='loreAboutUs'>
                <p>
                    <h2 className='tituloAboutUs'>About us</h2>
                    <br /><br />
                    <strong className='tituloAboutUs'>History</strong> 
                    <br />
                    Saylu Nails was born from my passion and creativity, a dedicated nail artist and mother. 
                    The name "Saylu" is a heartfelt blend of my name and my son name Luca, symbolizing what inspires me every day. 
                    After looking for a way to bring sustent to my home, I noticed that many women couldn’t afford the high prices 
                    associated with professional nail care. 
                    Motivated by my love for the craft and her desire to make beauty accessible to all, 
                    she decided to open her own little bussines, offering quality nail services at fair prices. 
                    Saylu Nails became not just a business, but a reflection of Saray's mission to bring beauty and confidence to women from all walks of life.
                    <br /><br />
                    <strong className='tituloAboutUs'>Mission</strong>
                    <br />
                    At Saylu Nails, our mission is to provide high-quality, professional nail services that are accessible to every woman. 
                    We believe that everyone deserves to feel beautiful and confident, regardless of budget. 
                    Through a combination of expertise, creativity, and a commitment to affordability, we aim to bring a touch of luxury to everyday life.
                    <br /><br />
                    <strong className='tituloAboutUs'>Vision</strong>
                    <br />
                    Saylu Nails envisions a world where beauty and self-care are within reach for all women. 
                    We strive to become a go-to destination where women can enjoy professional nail services without worrying about the cost. 
                    As we grow, we hope to expand our impact, continuing to innovate while staying true to our core belief: 
                    that beauty should be accessible, inclusive, and empowering.
                    <br />
                    <strong className='tituloAboutUs'><strong>Values:</strong></strong>
                    <br />
                    <strong className='tituloAboutUs'>Affordability</strong> 
                    <br />
                    We believe that looking and feeling your best shouldn't come at a high cost. 
                    Our goal is to offer top-tier services at prices that suit most budgets.
                    <br /><br />
                    <strong className='tituloAboutUs'>Quality</strong>
                    <br />
                    We are committed to maintaining the highest standards in nail care, using professional-grade products and techniques.
                    <br /><br />
                    <strong className='tituloAboutUs'>Empathy</strong>
                    At Saylu Nails, we treat every client with respect and care, creating a warm and welcoming environment where everyone feels valued.
                    <br /><br />
                    <strong className='tituloAboutUs'>Creativity</strong>
                    Each nail design is an expression of art. We take pride in offering personalized and creative services that reflect our clients’ unique styles.
                    <br /><br />
                </p>
            </div>
        </section>
    )
}
export default AboutUsComponent