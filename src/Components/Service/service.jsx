import './service.css'
import imgLibras from '../assets/imgLibras.webp'
import imgAcessibilidade from '../assets/imgAcessibilidade.png'
import imgaAutismo from '../assets/imgAutismo.png'

export const Service = () =>{
    return(
        <>
        <section className="service" id="service">
            <div className="container-service">
                <h1>Serviços</h1>
                <div className="miniCards">
                    <h2 data-aos="fade-up">Interpretação  </h2>
                    <h2 data-aos="fade-up">Tradução </h2>
                    <h2 data-aos="fade-up">Audiovisual </h2>
                    <h2 data-aos="fade-up">Audiodescrição </h2>
                    <h2 data-aos="fade-up">Legendagem </h2>
                    <h2 data-aos="fade-up">Clipes </h2>
                    <h2 data-aos="fade-up">Cursos de Libras </h2>
                    <h2 data-aos="fade-up">Palestras </h2>
                    <h2 data-aos="fade-up">Oficinas </h2>
                    <h2 data-aos="fade-up">Revisão de textos </h2>
                    <h2 data-aos="fade-up">Organização e adaptação de eventos </h2>
                    <h2 data-aos="fade-up">Espetáculos </h2>
                    {/* <h2 data-aos="fade-up">Autismo </h2> */}
                    {/* <h2 data-aos="fade-up">Inclusão </h2> */}
                    <h2 data-aos="fade-up">Infantil </h2>
                    {/* <h2 data-aos="fade-up">Acessibilidade </h2> */}
                    <h2 data-aos="fade-up">Consultoria </h2>
                    <h2 data-aos="fade-up">Assessoria </h2>
                    <h2 data-aos="fade-up">ESG </h2>
                </div>
            </div>
            <div className="imgs-absolut">
                <img src={imgAcessibilidade} alt="" />
                <img src={imgLibras} alt="" />
                <img src={imgaAutismo} alt="" />
            </div>
        </section>
        </>
    )
}