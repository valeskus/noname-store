import React from 'react';
import './OrderHistory.style.css';
import { OrderHistoryItem } from '../OrderHistoryItem';

export function OrderHistory() {
	return (
		<div className='orderHistory-container'>
			<h2 id='orderHistoryContainerTitle'>Order History</h2>
			<div className='orderHistoryCard-container'>
				<OrderHistoryItem />
			</div>
		</div>
	);
}
