import { useState } from "react";
import TaskItem from "./components/TaskItem/TaskItem";
import './styles/App.css';

function App() {
	const [tasks, setTasks] = useState([
		{ id: 1, task: 'Daily meeting with team', category: 'business', isCompleted: false },
		{ id: 2, task: 'Daily meeting with family', category: 'personal', isCompleted: false },
		{ id: 3, task: 'Daily meeting with friends', category: 'personal', isCompleted: false }
	])

	const changeComplete = (id) => {
		const copy = [...tasks];
		const currentTask = copy.find(item => item.id === id);
		currentTask.isCompleted = !currentTask.isCompleted;
		setTasks(copy);
	}

	return (
		<div className="container">
			{tasks.map(task =>
				<TaskItem task={task} key={task.id} changeComplete={changeComplete}/>)}
		</div>
	);
}

export default App;
