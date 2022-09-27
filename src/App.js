import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import Wishlist from './components/Wishlist';
import Navbar from './components/Navbar';

import './styles.css';
import Footer from './components/Footer';

const App = () => {
	return (
		<>
			<Navbar />

			<Routes>
				<Route index element={<Home />} />
				<Route path="wishlist" element={<Wishlist />} />
				<Route path="cart" element={<Cart />} />
			</Routes>

			<Footer />
		</>
	);
};
export default App;
