import React from 'react';
import cl from './TaskItem.module.css';
import Check from './Check';

export default function TaskItem({ task, changeComplete }) {
	return (
		<div className={cl.wrapper} onClick={() => changeComplete(task.id)}>
			<div className={cl.icon}>
				<Check isCompleted={task.isCompleted}/>
			</div>
			<div className={task.isCompleted ? [cl.text, cl.textCompleted].join(' ') : cl.text}>{task.value}</div>
		</div>
	)
}