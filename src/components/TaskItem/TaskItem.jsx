import React from 'react';
import cl from './TaskItem.module.css';
import Check from './Check';
import Trash from './Trash';

export default function TaskItem({ task, changeComplete, removeTask }) {
	return (
		<div className={cl.item}>
			<div className={cl.wrapper} onClick={() => changeComplete(task.id)}>
				<div className={cl.check}>
					<Check isCompleted={task.isCompleted} />
				</div>
				<div className={task.isCompleted ? [cl.text, cl.textCompleted].join(' ') : cl.text}>{task.value}</div>
			</div>
			<div className={cl.trash} onClick={() => removeTask(task.id)}>
				<Trash />
			</div>
		</div>
	)
}