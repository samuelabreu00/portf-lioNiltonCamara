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
                    <h2>Interpretação  </h2>
                    <h2>Tradução </h2>
                    <h2>Audiovisual </h2>
                    <h2>Audiodescrição </h2>
                    <h2>Legendagem </h2>
                    <h2>Clipes </h2>
                    <h2>Cursos de Libras </h2>
                    <h2>Palestras </h2>
                    <h2>Oficinas </h2>
                    <h2>Revisão de textos </h2>
                    <h2>Organização e adaptação de eventos </h2>
                    <h2>Espetáculos </h2>
                    {/* <h2>Autismo </h2> */}
                    {/* <h2>Inclusão </h2> */}
                    <h2>Infantil </h2>
                    {/* <h2>Acessibilidade </h2> */}
                    <h2>Consultoria </h2>
                    <h2>Assessoria </h2>
                    <h2>ESG </h2>
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