import React from 'react'
import facebook from '../../img/facebook.png'
// import twitter from '../../img/twitter.png'
import instagram from '../../img/instagram.png'

const LinksRedes = ({info}) => {
    


  return info.linkFacebook.length > 1 || info.linkInstagram.length > 1 || info.linkSpotify.length > 1 || info.linkYoutube.length > 1 ? (

    <div className="col-12 mb-5">

        <h2 className='titulo__ubicacion-precios'>Más información</h2>
        <hr className='hr-evento-detalle' />

                       
        <div className="d-flex">

            {
                (info.linkFacebook.length === 1 && info.linkFacebook === '-') || info.linkFacebook === ''
                ? null 
                : info.linkFacebook === undefined ? null 
                : <a href={info.linkFacebook} target='_blank' rel="noreferrer" className='me-3'><img src={facebook} alt="facebook" /></a>
            }
            
            {
                (info.linkInstagram.length === 1 && info.linkInstagram === '-') || info.linkInstagram === ''
                ? null 
                : info.linkInstagram === undefined ? null 
                : <a href={info.linkInstagram} target='_blank' rel="noreferrer" className='me-3'><img src={instagram} alt="instagram" /></a>
                
            }
            {/* {
                (info.linkTwitter.length === 1 && info.linkTwitter === '-') || info.linkTwitter === ''
                ? null 
                : info.linkTwitter === undefined ? null 
                : <a href={info.linkTwitter} target='_blank' rel="noreferrer" className='me-2'><img src={twitter} alt="twitter" /></a>
            } */}
              
            

        </div> 

        <div>
           
            {
                (info.linkSpotify.length === 1 && info.linkSpotify === '-') || info.linkSpotify === ''
                ? null 
                : info.linkSpotify === undefined ? null 
                : <iframe 
                title={info.name}
                className='iframe'
                style={{"borderRadius":"12px","height":"80px" }}
                src={info.linkSpotify}
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                >
                  </iframe>
                
            }
        </div>
        <div>

            {
                (info.linkYoutube.length === 1 && info.linkYoutube === '-') || info.linkYoutube === ''
                ? null 
                : info.linkYoutube === undefined ? null 
                : <iframe 
                title={info.name}
                className='iframe'
                height="425" 
                src={info.linkYoutube}
                frameBorder="0"
                allowFullScreen="allowfullscreen"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                >
                  </iframe>


                
            }
        </div>


                            


                        
    </div>
   
  ): null
}

export default LinksRedes