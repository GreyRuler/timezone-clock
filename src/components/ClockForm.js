export default function ClockForm({
									  title,
									  timezone,
									  onSubmit,
									  handlerChangeTitle,
									  handlerChangeTimezone
								  }) {
	return (
		<form onSubmit={onSubmit}>
			<label htmlFor="title">Название</label>
			<input type="text" id="title" value={title} onChange={handlerChangeTitle}/>
			<label htmlFor="timezone">Временная зона</label>
			<input type="number" min={-11} max={11} step={1} id="timezone"
				   onChange={handlerChangeTimezone} value={timezone}/>
			<button type="submit">Добавить</button>
		</form>
	)
}
