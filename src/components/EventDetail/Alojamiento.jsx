import React from 'react';

const Alojamiento = ({ info }) => {
	const arrayDiasIn = [];
	// const arrayDiasOut = []

	// console.log((info.date.split(' ')[0]))
	const dia_primero = Number(info.date.split(' ')[0].split('-')[0]);
	const dia_segundo = Number(info.date.split(' ')[0].split('-')[1]);
	const dia_tercero_checkin = Number(info.date.split(' ')[0].split('-')[2]);
	// const dia_tercero_checkout = Number((info.date.split(' ')[0]).split('-')[2])

	arrayDiasIn.push(dia_primero, dia_segundo, dia_tercero_checkin);
	// arrayDiasOut.push(dia_primero, dia_segundo, dia_tercero_checkout)

	const fechaEvento = arrayDiasIn.join('-');

	const fecha = new Date(fechaEvento);

	const fechaDeMañana = () => {
		const DIA_EN_MILISEGUNDOS = 86400000; // 24 * 60 * 60 * 1000
		const mañana = fecha.getTime() + DIA_EN_MILISEGUNDOS;
		return mañana;
	};
	const fechaDeAyer = () => {
		const DIA_EN_MILISEGUNDOS = 86400000; // 24 * 60 * 60 * 1000
		const ayer = fecha.getTime() - DIA_EN_MILISEGUNDOS;
		return ayer;
	};

	const fechaMañana = new Date(fechaDeMañana());
	const fechaAyer = new Date(fechaDeAyer());
	// console.log(fechaMañana)
	// console.log(fechaAyer)

	// console.log('mañana:' + fechaMañana.toLocaleDateString())
	// console.log('ayer:' + fechaAyer.toLocaleDateString())

	return (
		<iframe
			title={info.venue}
			src={`https://www.stay22.com/embed/gm?aid=tuentradaar&lat=${info.latitude}&lng=${info.longitude}&venue=Estadio Obras&checkin=${fechaAyer}&checkout=${fechaMañana}&maincolor=e10165&markerimage=https://www.tuentrada.com${info.imageThumbnail}&disableservices=restaurant`}
			id='stay22-widget'
			width='100%'
			height='600'
			frameBorder='0'
		></iframe>
	);
};

export default Alojamiento;
