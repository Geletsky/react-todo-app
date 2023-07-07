import React, { useState } from 'react';
import TaskItem from '../components/TaskItem/TaskItem';

export default function Tasks() {
	const [tasks, setTasks] = useState([
		{ id: 1, value: 'Family', isCompleted: false },
		{ id: 2, value: 'Work', isCompleted: false },
		{ id: 3, value: 'Friends', isCompleted: false }
	])

	const changeIsCompleted = (id) => {
		const copy = [...tasks];
		const currentTask = copy.find(task => task.id === id);
		currentTask.isCompleted = !currentTask.isCompleted;
		setTasks(copy);
	}

	return (
		<div>
			{tasks.map(task => 
				<TaskItem task={task} key={task.id} changeComplete={changeIsCompleted}/>
			)}
		</div>
	)
}
