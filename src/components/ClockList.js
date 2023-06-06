import Clock from './Clock';

export default function ClockList({clocks, onRemove}) {
	return (
		<div className="clock-list">
			{clocks.map((clock) => (
				<Clock clock={clock} key={clock.id}
					   onRemove={onRemove}/>
			))}
		</div>
	)
}
