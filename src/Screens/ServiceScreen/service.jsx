import './service.css'
import imgLibras from '../../assets/imgLibras.webp'
import imgAcessibilidade from '../../assets/imgAcessibilidade.png'
import imgaAutismo from '../../assets/imgAutismo.png'
import { ItensService } from '../../Components/ItensService/itensService'

export const Service = () =>{
    return(
        <>
        <section className="service" id="service">
            <div className="container-service">
                <h1 data-aos="fade-up">Serviços</h1>
                <div className="miniCards">
                    <ItensService
                    text="Interpretação"
                    />
                    <ItensService
                    text="Tradução"
                    /> 
                    <ItensService
                    text="Audiovisual "
                    />
                    <ItensService
                    text="Audiodescrição "
                    />
                    <ItensService
                    text="Legendagem "
                    />
                    <ItensService
                    text="Clipes"
                    /> 
                    <ItensService
                    text="Cursos de Libras "
                    />
                    <ItensService
                    text="Palestras "
                    />
                    <ItensService
                    text="Formação de Professores "
                    />
                    <ItensService
                    text="Língua Portuguesa"
                    /> 
                    <ItensService
                    text="Oficinas "
                    />
                    <ItensService
                    text="Revisão de textos "
                    />
                    <ItensService
                    text="Organização e adaptação de eventos "
                    />
                    <ItensService
                    text="Espetáculos"
                    /> 
                    <ItensService
                    text="Infantil "
                    />
                    <ItensService
                    text="Consultoria"
                    /> 
                    <ItensService
                    text="Assessoria"
                    /> 
                    <ItensService
                    text="ESG "
                    />
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
