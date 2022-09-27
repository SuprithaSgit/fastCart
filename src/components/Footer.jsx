import React from 'react';
import {
	FaFacebookF,
	FaInstagram,
	FaPinterestP,
	FaTwitter,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { FiPhoneCall } from 'react-icons/fi';

import './footer.css';

const Footer = () => {
	return (
		<div className="footer-cont">
			<div className="footer">
				<div className="service-section">
					<div className="service-box">
						<img
							src="https://themes.pixelstrap.com/fastkart/assets/svg/product.svg"
							alt=""
						/>
						<h5>Every Fresh Products</h5>
					</div>
					<div className="service-box">
						<img
							src="	https://themes.pixelstrap.com/fastkart/assets/svg/delivery.svg"
							alt="disount"
						/>
						<h5>Free Delivery For Order Over $50</h5>
					</div>
					<div className="service-box">
						<img
							src="https://themes.pixelstrap.com/fastkart/assets/svg/discount.svg"
							alt="disount"
						/>
						<h5>Daily Mega Discounts</h5>
					</div>
					<div className="service-box">
						<img
							src="https://themes.pixelstrap.com/fastkart/assets/svg/market.svg"
							alt="disount"
						/>
						<h5>Best Price On The Market</h5>
					</div>
				</div>
				<div className="about-section">
					<div className="about">
						<img
							src="https://themes.pixelstrap.com/fastkart/assets/images/logo/2.png"
							alt="logo"
							width="145"
							height="25"
						/>
						<p>
							In publishing and graphic design, Lorem ipsum is a placeholder
							text commonly used to demonstrate the visual form.
						</p>
					</div>
					<div className="about">
						<h3>Categories</h3>
						<ul>
							<li>Frozen Foods</li>
							<li>Biscuits, Snacks</li>
							<li>Grocery, Staples</li>
							<li>Vegetables, Fruit</li>
						</ul>
					</div>
					<div className="about">
						<h3>Useful Links</h3>
						<ul>
							<li>Home</li>
							<li>Shop</li>
							<li>About Us</li>
							<li>Blog</li>
							<li>Contact Us</li>
						</ul>
					</div>
					<div className="about">
						<h3>Help Center</h3>
						<ul>
							<li>Your Order</li>
							<li>Your Account</li>
							<li>Track Order</li>
							<li>Your Wishlist</li>
							<li>Search</li>
						</ul>
					</div>
					<div className="about">
						<h3>Contact Us</h3>
						<div className="contact">
							<FiPhoneCall className="about-icons" />
							<div className="icon-contact">
								<p>Hotline 24/7 :</p>
								<h5>+91 888 104 2340</h5>
							</div>
						</div>

						<div className="contact">
							<HiOutlineMail className="about-icons" />
							<div className="icon-contact">
								<p>Email Address :</p>
								<h5>fastkart@hotmail.com</h5>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-path">
					<p className="copyrights">©2022 Fastkart All rights reserved</p>
					<div className="social-links">
						<p>Stay connected</p>
						<div className="footer-icons">
							<FaFacebookF />
							<FaTwitter />
							<FaInstagram />
							<FaPinterestP />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
