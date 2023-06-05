import './App.css'
import ClockForm from './components/ClockForm';
import { useState } from 'react';
import ClockList from './components/ClockList';
import { nanoid } from 'nanoid';

function App() {
	const [clocks, setClocks] = useState([])
	const [title, setTitle] = useState('')
	const [timezone, setTimezone] = useState('')
	const handlerChangeTitle = (event) => {
		setTitle(event.target.value)
	}
	const handlerChangeTimezone = (event) => {
		setTimezone(event.target.value)
	}
	const onSubmit = (event) => {
		event.preventDefault()
		if (!title) return
		setClocks([...clocks, {
			id: nanoid(),
			title,
			timezone
		}])
		setTitle('')
		setTimezone('')
	}
	return (
		<div className="app">
			<ClockForm onSubmit={onSubmit} handlerChangeTitle={handlerChangeTitle}
					   handlerChangeTimezone={handlerChangeTimezone}/>
			<ClockList clocks={clocks}/>
		</div>
	);
}

export default App;
