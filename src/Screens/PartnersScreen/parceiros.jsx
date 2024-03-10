
import './parceiros.css'
import imgEcoTabate from '../../assets/EcoTaubaté.png'
import imgMarquise from '../../assets/Grupo Marquise.png'
import imgArtePraia from '../../assets/Festival ArtePraia.jpg'
import imgEcoFor from '../../assets/EcoFor.png'
import imgHouseCultura from '../../assets/House Cultura.png'
import imgMarquiseAmbiental from '../../assets/Marquise Ambiental.png'
import imgPintando7 from '../../assets/imgPintando7.jpg'

export const Partners = () =>{
    return(
        <>
        <section className="partners" id='partners'>
            <div className="container-partners">
            <h1 data-aos="fade-up">Parceiros</h1>
                <div className="container-imgs">
                    <img src={imgMarquise} alt="" data-aos="fade-up" />
                    <img src={imgMarquiseAmbiental} alt="" data-aos="fade-up"/>
                    <img src={imgEcoTabate} alt=""data-aos="fade-up"/>
                    <img src={imgEcoFor} alt="" data-aos="fade-up"/>
                    <img src={imgHouseCultura} alt=""data-aos="fade-up" />
                    <img src={imgArtePraia} alt="" data-aos="fade-up"/> 
                    <img src={imgPintando7} alt="" data-aos="fade-up" /> 
                </div>
        </div>
        </section>
    
        </>
    )
}
