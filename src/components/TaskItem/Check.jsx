import React from 'react';
import { BsCheck } from 'react-icons/bs';

export default function Check({ isCompleted }) {
	return (
		<div>
			{isCompleted && <BsCheck size={22} color='#000' />}
		</div>
	)
}
