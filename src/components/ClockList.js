import Clock from './Clock';

export default function ClockList({clocks}) {
	return (
		<div className="clock-list">
			{clocks.map((clock) => (
				<Clock title={clock.title} timezone={clock.timezone} key={clock.id}/>
			))}
		</div>
	)
}
