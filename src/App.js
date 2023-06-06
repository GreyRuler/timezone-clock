import './App.css'
import './assets/css/google-icons.css'
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
	const onRemove = (id) => {
		setClocks(clocks.filter(clock => clock.id !== id))
	}
	return (
		<div className="app">
			<ClockForm onSubmit={onSubmit} handlerChangeTitle={handlerChangeTitle}
					   handlerChangeTimezone={handlerChangeTimezone}
					   timezone={timezone} title={title}/>
			<ClockList clocks={clocks} onRemove={onRemove}/>
		</div>
	);
}

export default App;
