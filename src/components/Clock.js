import { useEffect } from 'react';
import { nanoid } from 'nanoid';

export default function Clock({clock, onRemove}) {
	const idElement = nanoid()
	const date = new Date()
	date.setHours(
		date.getHours() + date.getTimezoneOffset() / 60 + Number(clock.timezone)
	)
	const arrowHourRotate = [
		{transform: `rotate(${(date.getHours() + date.getMinutes() / 60) * 30}deg)`},
		{transform: `rotate(${(date.getHours() + date.getMinutes() / 60) * 30 + 360}deg)`},
	]
	const arrowHourTiming = {
		duration: 12 * 60 * 60 * 1000,
		iterations: Infinity,
	}
	const arrowMinuteRotate = [
		{transform: `rotate(${(date.getMinutes() + date.getSeconds() / 60) * 6}deg)`},
		{transform: `rotate(${(date.getMinutes() + date.getSeconds() / 60) * 6 + 360}deg)`},
	]
	const arrowMinuteTiming = {
		duration: 60 * 60 * 1000,
		iterations: Infinity,
	}
	const arrowSecondRotate = [
		{transform: `rotate(${date.getSeconds() * 6}deg)`},
		{transform: `rotate(${date.getSeconds() * 6 + 360}deg)`},
	]
	const arrowSecondTiming = {
		duration: 60 * 1000,
		iterations: Infinity,
	}

	useEffect(() => {
		const container = document.getElementById(idElement)
		const second = container.querySelector('.second')
		second.animate(arrowSecondRotate, arrowSecondTiming)
	})
	useEffect(() => {
		const container = document.getElementById(idElement)
		const minute = container.querySelector('.minute')
		minute.animate(arrowMinuteRotate, arrowMinuteTiming)
	})
	useEffect(() => {
		const container = document.getElementById(idElement)
		const hour = container.querySelector('.hour')
		hour.animate(arrowHourRotate, arrowHourTiming)
	})
	return (
		<div className="clock-item" id={idElement}>
			<span className="title">{clock.title}</span>
			<span className="material-symbols-outlined"
				  onClick={() => onRemove(clock.id)}>
				close
			</span>
			<div className="clock">
				<div className="circle">
					<span className="point"></span>
					<span className="hour"></span>
					<span className="minute"></span>
					<span className="second"></span>
				</div>
			</div>
		</div>
	)
}
