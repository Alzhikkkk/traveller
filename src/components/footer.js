import phone from '../assets/phone.svg'
import email from '../assets/email.svg'
import destination from '../assets/destination.svg'
import australia from '../assets/australia.webp'
import udaipur from '../assets/udaipur.webp'
import waterfall from '../assets/waterfall.webp';
import disney from '../assets/disney.webp'


export default function Footer(){
    return(
        <footer className="footer">
            <div>
                <div className="footer-logo">
                    <h1>Traveller</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis vehicula arcu a euismod. Vivamus dolor turpis, posuere vel lorem posuere, imperdiet vulputate tortor. In vitae lobortis nisl.</p>
                </div>
                <div className="footer-links">
                    <div>
                        <h1>Company</h1>
                            <ul>
                                <li>About us</li>
                                <li>Shop</li>
                                <li>News</li>
                                <li>Contact</li>
                            </ul>
                    </div>
                </div>
            </div>

            <div>
                <div className="footer-gallery">
                    <h1>Gallery</h1>
                    <div className='gallery--items'>
                        <span>
                            <img src={disney} alt="" />
                            <img src={waterfall} alt="" />
                        </span>
                        <span>
                            <img src={australia} alt="" />
                            <img src={udaipur} alt="" />
                        </span>
                    </div>
                </div>
                <div className="footer-contact">
                    <div>
                        <h1>Contact us</h1>
                        <div className='contact-items'>
                            <span><img src={destination} alt="" />Somewhere you know</span>
                            <span><img src={phone} alt="" />012345678</span>
                            <span><img src={email} alt="" />alzhikakh@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}