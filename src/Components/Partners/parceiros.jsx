
import './parceiros.css'
import imgEcoTabate from '../assets/EcoTaubaté.png'
import imgMarquise from '../assets/Grupo Marquise.png'
import imgArtePraia from '../assets/Festival ArtePraia.jpg'
import imgEcoFor from '../assets/EcoFor.png'
import imgAmarCultural from '../assets/Amar Cultural Aratuba.jpg'
import imgHouseCultura from '../assets/House Cultura.png'
import imgMarquiseAmbiental from '../assets/Marquise Ambiental.png'
import imgPintando7 from '../assets/imgPintando7.jpg'

export const Partners = () =>{
    return(
        <>
        <section className="partners" id='partners'>
            <div className="container-partners">
            <h1>Parceiros</h1>
                <div className="container-imgs">
                <img src={imgMarquise} alt="" />
                    <img src={imgMarquiseAmbiental} alt="" />
                    <img src={imgEcoTabate} alt="" />
                    <img src={imgEcoFor} alt="" />
                    <img src={imgHouseCultura} alt="" />
                    <img src={imgArtePraia} alt="" />
                    <img src={imgAmarCultural} alt="" />  
                    <img src={imgPintando7} alt="" /> 
                </div>
        </div>
        </section>
    
        </>
    )
}