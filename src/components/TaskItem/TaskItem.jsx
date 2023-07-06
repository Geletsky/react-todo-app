import React from 'react';
import cl from './TaskItem.module.css';
import Check from './Check';


export default function TaskItem({ task, changeComplete }) {

	return (
		<div className={cl.wrapper} onClick={() => changeComplete(task.id)}>
			<div className={task.isCompleted ? [cl.icon, cl.iconActive].join(' ') : cl.icon}>
				<Check isCompleted={task.isCompleted}/>
			</div>
			<div className={task.isCompleted ? [cl.task, cl.taskLine].join(' ') : cl.task}>{task.task}</div>
		</div>
	)
}
