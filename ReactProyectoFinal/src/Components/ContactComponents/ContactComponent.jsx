import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import "../../styles/AboutUs.css"

const facebookurl = 'https://www.facebook.com/people/saylunails/100063501432977/?mibextid=LQQJ4d&rdid=OI8Ahs49oSMDZtFz&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Yca5ApsSdGzuSrN%2F%3Fmibextid%3DLQQJ4d'
const instagramurl = 'https://www.instagram.com/saylunails_/?igsh=Ynp0emUxdTQwam8y&utm_source=qr'
const whatsappurl = 'https://wa.me/84910984'

function ContactComponent() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_gkkovfa', 'template_oynazvd', form.current, {
        publicKey: '9WY3WlebYDXKmcCHn',
      })
      .then(
        () => {
          toast.success('Email sent!');
        },
        (error) => {
          toast.error('Email sending failed due to: ' + (error.message));
        },
      );
  };
  return (
    <section className='about'>
      <div className='about1'>
        <form ref={form} onSubmit={sendEmail}>
          <label className='tituloemail'>Name</label>
          <br />
          <input type="text" name="user_name" />
          <br />
          <label className='tituloemail'>Email</label>
          <br />
          <input type="email" name="user_email" />
          <br />
          <label className='tituloemail'>Message</label>
          <br />
          <textarea name="message" />
          <br />
          <input type="submit" value="Send" />
          <br />
        </form>
      </div>
      <div className='about2 social-links'>
        <h2 className='tituloemail'>Contact us!</h2>
        <div>
          <Link to={facebookurl}>saylunails</Link>
        </div>
        <div>
          <Link to={instagramurl}className='social-links'>saylunails_</Link>
        </div>
        <div>
          <Link target={'_blank'} to={whatsappurl}className='social-links'>8491 0984</Link>
        </div>
        <br />
        <br />
      </div>
    </section>
  );
};

export default ContactComponent