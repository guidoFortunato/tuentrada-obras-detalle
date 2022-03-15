import React from 'react';
import facebook from '../../img/facebook.png';
import twitter from '../../img/twitter.png';
import instagram from '../../img/instagram.png';

const LinksRedes = ({ info }) => {
	return info.facebook.length > 1 ||
		info.twitter.length > 1 ||
		info.instagram.length > 1 ||
		info.spotify.length > 1 ||
		info.youtube.length > 1 ? (
		<div className='col-12 mb-5'>
			<h2 className='titulo__ubicacion-precios'>Más información</h2>
			<hr className='hr-evento-detalle' />

			<div className='d-flex mb-4 align-items-center'>
				{(info.facebook.length === 1 && info.facebook === '-') ||
				info.facebook === '' ? null : info.facebook === undefined ? null : (
					<a
						href={info.facebook}
						target='_blank'
						rel='noreferrer'
						className='me-3'
					>
						<img src={facebook} alt='facebook' />
					</a>
				)}

				{(info.instagram.length === 1 && info.instagram === '-') ||
				info.instagram === '' ? null : info.instagram === undefined ? null : (
					<a
						href={info.instagram}
						target='_blank'
						rel='noreferrer'
						className='me-3'
					>
						<img src={instagram} alt='instagram' />
					</a>
				)}
				{(info.twitter.length === 1 && info.twitter === '-') ||
				info.twitter === '' ? null : info.twitter === undefined ? null : (
					<a
						href={info.twitter}
						target='_blank'
						rel='noreferrer'
						className='me-2'
					>
						<img src={twitter} alt='twitter' />
					</a>
				)}
			</div>

			<div className='mb-4'>
				{(info.spotify.length === 1 && info.spotify === '-') ||
				info.spotify === '' ? null : info.spotify === undefined ? null : (
					<iframe
						title={info.name}
						className='iframe'
						style={{ borderRadius: '12px', height: '80px' }}
						src={info.spotify}
						frameBorder='0'
						allowFullScreen=''
						allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
					></iframe>
				)}
			</div>
			<div>
				{(info.youtube.length === 1 && info.youtube === '-') ||
				info.youtube === '' ? null : info.youtube === undefined ? null : (
					<iframe
						title={info.name}
						className='iframe'
						height='425'
						src={info.youtube}
						frameBorder='0'
						allowFullScreen='allowfullscreen'
						allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
					></iframe>
				)}
			</div>
		</div>
	) : null;
};

export default LinksRedes;
