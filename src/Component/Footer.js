import React from 'react';
import "./Footer.css";



const Footerone = () => {
    return (

        <footer className='footer-section'>
            <h1 className='zob'>zomato</h1>
            <section className='d-flex justify-content-around'>

                <section>
                    <p className='foot-headings'>ABOUT ZOMATO</p>
                    <ul>
                        <li>Who We Are</li>
                        <li>Blog</li>
                        <li>Work With Us</li>
                        <li>Investor Relations</li>
                        <li>Report Fraud</li>
                        <li>Contact Us</li>

                    </ul>

                </section>
                <section>
                    <p className='foot-headings'>ZOMAVERSE</p>
                    <ul>
                        <li>Zomato</li>
                        <li>Blinkit</li>
                        <li>Feeding India</li>
                        <li>Investor Relations</li>
                        <li>Hyperpure</li>
                        <li>Zomaland</li>

                    </ul>

                </section>
                <section>
                    <p className='foot-headings'>FOR RESTAURANTS</p>
                    <ul>
                        <li>Partner With Us</li>
                        <li>Apps For You</li>

                    </ul>
                    <p className='foot-headings'>FOR ENTERPRISES</p>

                    <ul>
                        <li>Zomato For Enterprise</li>

                    </ul>

                </section>
                <section>
                    <p className='foot-headings'>LEARN MORE</p>
                    <ul>
                        <li>Privacy</li>
                        <li>Security</li>
                        <li>Terms</li>
                        <li>Sitemap</li>

                    </ul>

                </section>


            </section>
        </footer>
    )
}
export default Footerone;