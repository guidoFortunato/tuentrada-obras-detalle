/* eslint-disable no-throw-literal */
import React, { useEffect, useState } from 'react';
import { withRouter, Redirect } from 'react-router';
import { Link, useParams, useHistory } from 'react-router-dom';
import { VariablesContext } from '../../context/VariablesProvider';
import Loader from '../main/Loader/Loader';
import Tabla from './Tabla';
import Alojamiento from './Alojamiento';
import DOMPurify from 'dompurify';
import LinksRedes from './LinksRedes';
import { getEventos } from '../../helpers/getEventos';

	//  Mes
	const monthNames = [
		'ENE',
		'FEB',
		'MAR',
		'ABR',
		'MAY',
		'JUN',
		'JUL',
		'AGO',
		'SEP',
		'OCT',
		'NOV',
		'DIC',
	];

const DetalleEvento = props => {
	const [eventos, setEventos] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const { variables, idEvent, listaEventos } = React.useContext(VariablesContext);
	const { id } = useParams();
	const history = useHistory();

	const getFormattedTime = (h, m) => {
		const hours = h === 0 ? 12 : h > 12 ? h - 12 : null;
		const minutes = m;
		const ampm = h < 12 ? 'AM' : 'PM';
		const formattedTime = `${hours}:${minutes}${ampm}`;
		return formattedTime;
	};

	useEffect(() => {
		const getData = async () => {
			const url = `https://api.tuentrada.com/api/event?event=${id}`;
			const token = process.env.REACT_APP_TOKEN_OBRAS;

			try {
				const res = await fetch(url, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
				});

				const data = await res.json();

				// eslint-disable-next-line no-throw-literal
				if (!res.ok) {
					throw {
						err: true,
						status: res.status || '00',
						statusText:
							res.statusText || 'Error al intentar acceder al servidor',
					};
				}

				setEventos(data);

				
			} catch (err) {
				console.log('error', err);
				setError(err);
				history.push('/error');
			} finally {
				setLoading(false);
			}
		};

		getData();
	}, [idEvent]);

	const daysNames = [
		'LUNES',
		'MARTES',
		'MIERCOLES',
		'JUEVES',
		'VIERNES',
		'SABADO',
		'DOMINGO',
	];

	// const getEvento = getEventos(listaEventos, id)

	// if (!getEvento) {
	// 	return <Redirect to='/'/> 
	// }

	
	return loading ? (
		<Loader />
	) : (
		<>
			<nav className='navbar navbar-expand-lg navbar-dark navbar-active sticky-top mb-5'>
				<div className='container nav-direction'>
					<div className='logo'>
						<Link to='/'>
							<img
								className='cursor separacion-logo'
								src={variables.logo}
								style={{ width: '174px', height: '56px' }}
								alt={variables.altLogo}
							/>
						</Link>
					</div>

					<div className='logo'>
						<Link className='btn btn-dark separacion' to='/'>
							{variables.volver}
						</Link>
					</div>
				</div>
			</nav>

			<div className='container'>
				<h1 className='h1 fw-bold titulo-evento-detalle'>{eventos.name}</h1>
				<hr />
				<div className='row mb-5'>
					<div className='col-12 col-lg-6 mb-5 mb-lg-0'>
						<img
							src={`https://www.tuentrada.com${eventos.imageEvent}`}
							alt='imagen evento'
							className='img-evento'
						/>
					</div>

					<div className='col-12 col-lg-6 espacio'>
						{eventos.date && eventos.date.split('-')[0] !== '2040' && (
							<div className='card-detalle px-1 py-2 mb-5'>
								<div>
									<span className='fw-bold card-detalle__tamaño-letra'>
										{daysNames[new Date(eventos.date.split(' ')[0]).getDay()]}
									</span>
								</div>

								<div>
									<span className='fw-bold card-detalle__tamaño-numero'>
										{eventos.date.split('-')[2].split(' ')[0]}
									</span>
								</div>

								<div>
									<span className='fw-bold card-detalle__tamaño-letra'>
										{monthNames[Number(eventos.date.split('-')[1] - 1)]}{' '}
										{eventos.date.split('-')[0]}
									</span>
								</div>

								<hr className='hr-card-detalle' />

								<div>
									<span className='fw-bold card-detalle__tamaño-letra'>
										{getFormattedTime(
											eventos.hour.split(':')[0],
											eventos.hour.split(':')[1]
										)}
									</span>
								</div>
							</div>
						)}

						<div>
							<h3>Información general</h3>
						</div>

						{eventos.venue && (
							<div className='fecha-hora size-datos mb-2'>
								<i className='bi bi-geo-alt-fill color-icono me-2'></i>
								<span className='fecha-hora__color-texto'>Lugar: </span>
								<span className='ms-1'>{eventos.venue}</span>
							</div>
						)}

						{eventos.city && (
							<div className='fecha-hora size-datos mb-2'>
								<i className='bi bi-geo-alt-fill color-icono me-2'></i>
								<span className='fecha-hora__color-texto'>Ciudad: </span>
								<span className='ms-1'>{eventos.city}</span>
							</div>
						)}

						{eventos.date && eventos.date.split('-')[0] !== '2040' && (
							<div className='fecha-hora size-datos mb-2'>
								<i className='bi bi-calendar-check color-icono me-2'></i>
								<span className='fecha-hora__color-texto'>Fecha:</span>
								<span className='ms-1'>
									{eventos.date.split(' ')[0].split('-')[2]}-
									{eventos.date.split(' ')[0].split('-')[1]}-
									{eventos.date.split(' ')[0].split('-')[0]}
								</span>
							</div>
						)}

						{eventos.hour && (
							<div className='fecha-hora size-datos mb-2'>
								<i className='bi bi-clock-history color-icono me-2'></i>
								<span className='fecha-hora__color-texto'>Hora:</span>
								<span className='ms-1'>
									{getFormattedTime(
										eventos.hour.split(':')[0],
										eventos.hour.split(':')[1]
									)}
								</span>
							</div>
						)}

						{eventos.subcategory ? (
							<div className='fecha-hora size-datos mb-2'>
								<i className='bi bi-grid color-icono me-2'></i>
								<span className='fecha-hora__color-texto'>Categoría:</span>
								<span className='ms-1'>{eventos.subcategory}</span>
							</div>
						) : null}

						{eventos.address && (
							<div className='fecha-hora size-datos mb-2'>
								<i className='bi bi-geo-alt-fill color-icono me-2'></i>
								<span className='fecha-hora__color-texto'>Dirección:</span>
								<span className='ms-1'>{eventos.address}</span>
							</div>
						)}

						{eventos.doorOpening ? (
							<div className='fecha-hora size-datos mb-2'>
								<i className='bi bi-door-open color-icono me-2'></i>
								<span className='fecha-hora__color-texto'>
									Apertura puertas:
								</span>
								<span className='ms-1'>{eventos.doorOpening}</span>
							</div>
						) : null}

						{eventos.minimumAge ? (
							<div className='fecha-hora size-datos mb-4'>
								<i className='bi bi-exclamation-circle color-icono me-2'></i>
								<span className='fecha-hora__color-texto'>
									Edad mínima de ingreso:
								</span>
								<span className='ms-1'>{eventos.minimumAge}</span>
							</div>
						) : null}
					</div>
				</div>

				<div className='col-12'>
					<p
						dangerouslySetInnerHTML={{
							__html: DOMPurify.sanitize(eventos.description),
						}}
					></p>
				</div>

				<div className='col-12 mb-5'>
					<h2 className='titulo__ubicacion-precios'>Ubicación y precios</h2>
					<hr className='hr-evento-detalle' />

					{eventos && <Tabla info={eventos.prices} />}
				</div>
				<div className='container-button mb-5'>
					<a
						className='btn color-comprar ancho-button mb-2 text-white animacion-boton'
						target='_blank'
						rel='noreferrer'
						href={eventos.stx}
					>
						<span className='fw-bold'>Comprar</span>
					</a>

					<button
						className='btn color-volver ancho-button animacion-boton'
						onClick={() => props.history.push('/')}
					>
						<span className='fw-bold'>{variables.volver}</span>
					</button>
				</div>

				{eventos && <LinksRedes info={eventos} />}

				<div className='col-12 mb-5'>
					<h2 className='titulo__ubicacion-precios'>
						Completá tu experiencia reservando el hospedaje
					</h2>
					<hr className='hr-evento-detalle' />

					<ul>
						<li>
							Tenemos la mejor variedad de ofertas para que elijas tu mejor
							opción.
						</li>
						<li>
							Visualizá el show en el mapa, buscá las opciones cercanas y podrás
							comenzar con la reserva de tu alojamiento, fácil y rápido.
						</li>
					</ul>
				</div>
				<div className='col-12 mb-5'>
					<h2 className='titulo__ubicacion-precios'>Elegí tu alojamiento</h2>
					<hr className='hr-evento-detalle' />

					{eventos && <Alojamiento info={eventos} />}
				</div>
			</div>
			{/*  */}

			<footer id='footer'>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<p className='credits'>
								{variables.venueName}
								<a
									href={variables.linkTuentrada}
									target='_blank'
									rel='noreferrer'
									className='ms-1'
								>
									{variables.tuentradaName}
								</a>
							</p>
							<div className='text-center pb-1'>
								<a
									href={variables.linkVenueFb}
									target='_blank'
									rel='noreferrer'
									className='me-2'
								>
									<i className='bi bi-facebook m'></i>
								</a>
								{/* <a href={variables.linkVenueTw} target='_blank' rel="noreferrer" className='me-2'><i className="bi bi-twitter"></i></a> */}
								<a
									href={variables.linkVenueIg}
									target='_blank'
									rel='noreferrer'
									className='me-2'
								>
									<i className='bi bi-instagram'></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default withRouter(DetalleEvento);
