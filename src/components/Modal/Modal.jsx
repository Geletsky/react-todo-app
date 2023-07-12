import React from 'react';
import cl from './Modal.module.css';

export default function Modal({ modalActive, setModalActive }) {
	return (
		<div className={modalActive ? [cl.modal, cl.modalActive].join(" ") : cl.modal}>
			<div className={cl.modalContent}>Modal</div>
		</div>
	)
}
