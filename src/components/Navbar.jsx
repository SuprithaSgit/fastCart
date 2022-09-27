import React from 'react';
import { FaSearch, FaRegHeart, FaRegUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './navbar.css';
import { FiPhoneCall } from 'react-icons/fi';
import { CgShoppingCart } from 'react-icons/cg';

const Navbar = () => {
	const navigate = useNavigate();
	return (
		<div className="navbar">
			<img
				src="https://themes.pixelstrap.com/fastkart/assets/images/logo/2.png"
				alt="logo"
				width="145"
				height="25"
			/>
			<div>
				<input type="text" placeholder="I'm searching for...." />
				<button>
					<FaSearch />
				</button>
			</div>
			<div className="icons">
				<FiPhoneCall />
				<hr />
				<FaRegHeart onClick={() => navigate('wishlist')} />
				<hr />
				<CgShoppingCart onClick={() => navigate('cart')} />
				<hr />
				<FaRegUser />
			</div>
		</div>
	);
};

export default Navbar;
