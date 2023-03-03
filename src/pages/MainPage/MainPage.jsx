import React, { useCallback, useEffect, useMemo } from 'react';
import './MainPage.style.css';
import { useNavigate } from 'react-router-dom';
import { UserService } from '../../services';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/user/actionCreators';

export function MainPage() {
	const dispatch = useDispatch();
	let navigate = useNavigate();

	// useEffect(() => {
	// 	UserService.getUserData().then((data) => {
	// 		if (!data) {
	// 			return;
	// 		}
	// 		dispatch(setUser(data));
	// 	}, []);
	// }, []);

	const bannerImageList = useMemo(
		() => ['/banner2.png', '/banner3.png', '/banner4.png'],
		[]
	);
	const handleClick = useCallback(() => {
		navigate('/productList');
	}, [navigate]);
	return (
		<div className='mainPage-container'>
			<div className='mainBanner-container'>
				<img className='banner-item' src='/banner1.png' alt='banner' />
				<div id='bannerButton' onClick={handleClick}>
					<h2>GO SHOP</h2>
				</div>
			</div>

			<div className='middleBanner-container'>
				<div className='midleBanner-item gallery'>
					{bannerImageList.map((image, index) => {
						return (
							<img
								className='midleBanner-gallery-image'
								src={image}
								alt='banner'
								key={index}
							/>
						);
					})}
				</div>
				<div className='midleBanner-item'>
					<img className='midleBanner-image' src='/banner3.png' alt='banner' />
				</div>
			</div>
			<div className='info-container'>
				<div className='aboutUs-container'>
					<h2 id='aboutUsTitle'>About Us</h2>
					<div className='info-context'>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
