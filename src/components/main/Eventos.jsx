import React, { useContext, useEffect, useState } from 'react';
import { VariablesContext } from '../../context/VariablesProvider';
import MessageError from '../error/MessageError';
import ListaEventos from './ListaEventos/ListaEventos';
import Loader from './Loader/Loader';

const Eventos = props => {
	const [eventos, setEventos] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	const { variables, llenarEventos} = useContext(VariablesContext);

	const url = process.env.REACT_APP_API_OBRAS;
	const token = process.env.REACT_APP_TOKEN_OBRAS;

	useEffect(() => {
		setLoading(true);

		const getData = async () => {
			try {
				const res = await fetch(url, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
				});

				// eslint-disable-next-line no-throw-literal
				if (!res.ok)
					throw {
						err: true,
						status: res.status || '00',
						statusText:
							res.statusText || 'Error al intentar acceder al servidor',
					};

				const data = await res.json();
				console.log(data)

				/*
                no funciona el manejo de error
               
                if (!res.ok) throw {
                    err: true,
                    status: res.status || "00", 
                    statusText: res.statusText || "Ocurrió un error"
                }
                */

				setEventos(data);
				llenarEventos(data)
			} catch (err) {
				console.log('error', err);
				if (err) {
					setError(err);
				}
			}

			setLoading(false);
		};

		getData();
	}, [token, url]);

	

	return loading ? (
		<Loader />
	) : (
		<main id='main'>
			<section id='team' className='dark-color'>
				<div className='container wow fadeInUp'>
					<div className='row'>
						<div className='col-md-12'>
							<h3 className='section-title dark-color-title'>
								{variables.tituloEventos}
							</h3>
							<div className='section-title-divider'></div>
						</div>
					</div>

					<div className='row'>
						{eventos.length > 0 ? (
							eventos.map(item => (
								<article
								className='col-12 col-sm-6 col-lg-4 col-xl-3 text-center mt-2 mb-2 size-container'
								key={item.id}
								>
									
									<ListaEventos
										id={item.id}
										title={item.title}
										image={item.image}
										date={item.date}
										time={item.time}
										buy={item.link_to_buy}
									/>
								</article>
							))
						) : (
							<MessageError error={error} />
						)}
					</div>
				</div>
			</section>
		</main>
	);
};

export default Eventos;
