export default function ClockForm({
									  onSubmit,
									  handlerChangeTitle,
									  handlerChangeTimezone
								  }) {
	return (
		<form onSubmit={onSubmit}>
			<label htmlFor="title">Название</label>
			<input type="text" id="title" onChange={handlerChangeTitle}/>
			<label htmlFor="timezone">Временная зона</label>
			<input type="number" min={-11} max={11} step={1} id="timezone"
				   onChange={handlerChangeTimezone}/>
			<button type="submit">Добавить</button>
		</form>
	)
}
