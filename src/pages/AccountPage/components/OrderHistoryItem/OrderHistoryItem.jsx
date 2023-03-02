import React from 'react';
import './OrderHistoryItem.style.css';

export function OrderHistoryItem() {
	return (
		<div className='orderHistoryItem-container'>
			<h4 className='orderItemName'>Order 1</h4>
			<p className='orderItemDetails'> Details</p>
			<p className='orderItemDetails'> Date</p>
			<p className='orderItemDetails'> 120$</p>
			<p className='orderItemStatus'> Success </p>
		</div>
	);
}
