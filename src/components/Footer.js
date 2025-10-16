import React from 'react'
import logo from '../images/logo.svg'

function Footer() {
  return (
    <footer>
        <section>
            <div className='company-info'>
                <img src={logo} alt='small logo'/>
                <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes served with a modern twist.</p>
            </div>
            <div>
                <h4>Quick links</h4>
                <ul>
                    <li><a href='/'>Menu</a></li>
                    <li><a href='/'>Reservations</a></li>
                    <li><a href='/'>Online Orders</a></li>
                </ul>
            </div>
            <div>
                <h4>Contact Us</h4>
                <ul>
                    <li><strong>Address: </strong>Street 123/456, Chicago</li>
                    <li><strong>Telephone: </strong> +0123 456 789</li>
                    <li><strong>Email: </strong> info@littlelemon.com</li>
                </ul>
            </div>
            <div>
                <h4>Social Media</h4>
                <ul>
                    <li><a href='/'>Facebook</a></li>
                    <li><a href='/'>Instagram</a></li>
                    <li><a href='/'>Youtube</a></li>
                </ul>
            </div>
        </section>
    </footer>
  );
};

export default Footer;