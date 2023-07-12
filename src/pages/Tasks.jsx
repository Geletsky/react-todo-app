import React, { useState } from 'react';
import TaskItem from '../components/TaskItem/TaskItem';
import Button from '../components/UI/Button/Button';
import { BsPlus } from 'react-icons/bs';
import Modal from '../components/Modal/Modal';

export default function Tasks() {
	const [tasks, setTasks] = useState([
		{ id: 1, value: 'Family', isCompleted: false },
		{ id: 2, value: 'Work', isCompleted: false },
		{ id: 3, value: 'Friends', isCompleted: false }
	])

	const [modalActive, setModalActive] = useState(false);

	const changeIsCompleted = (id) => {
		const copy = [...tasks];
		const currentTask = copy.find(task => task.id === id);
		currentTask.isCompleted = !currentTask.isCompleted;
		setTasks(copy);
	}

	const removeTask = (id) => {
		const copy = [...tasks];
		const newArrayOfTasks = copy.filter((task) => task.id !== id);
		setTasks(newArrayOfTasks);
	}

	return (
		<div className='tasks'>
			<div style={{ color: '#97b4ff', fontWeight: 600, marginBottom: 20, paddingTop: 50 }}>Today's tasks</div>
			{tasks.map(task =>
				<TaskItem task={task} key={task.id} changeComplete={changeIsCompleted} removeTask={removeTask} />
			)}
			<Button style={{ position: 'absolute', bottom: 40, right: 30 }} onClick={() => setModalActive(true)}>
				<BsPlus size={30} color='#fff' />
			</Button>
			<Modal modalActive={modalActive} setModalActive={setModalActive}></Modal>
		</div>
	)
}
