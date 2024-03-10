import './about.css'
import imgNilton from '../../assets/imgNilton.png'
import imgLogo from '../../assets/imgLogo.jpeg'

export const About = () =>{
    return(
        <>
        <section className="about" id="about">
            <div className="container-about">
                    <h1 data-aos="fade-up">Quem somos?</h1>
                    <div className="text">
                        <p data-aos="fade-up">Somos uma agência que atua há anos no mercado de Fortaleza promovendo Inclusão e Acessibilidade às Pessoas com Deficiência, principalmente através da Libras no contexto Educacional, Artístico e Audiovisual.  </p>
                    </div>
            </div>
                <div className="ceo">
                    <div className="container-ceo">
                        <h1 data-aos="fade-down">CEO</h1>
                        <main>
                        <div className="img">
                            <img src={imgNilton} alt="" data-aos="fade-up"/>
                        </div>
                        <div className="text">
                            <p data-aos="fade-up">Nilton Câmara é <span>Professor, Palestrante, Intérprete Tradutor de Libras e Ator-Intérprete</span> de diversos espetáculos infantis. Atua, também, na <span>Formação de Professores, Consultoria na área da Acessibilidade, Tradução Audiovisual e Inclusão Social</span>. 

    Contribui há muitos anos, juntamente com a <span>Comunidade Surda</span>, com o progresso da <span>Educação Bilíngue</span> tanto no ensino quanto na tradução e interpretação da Libras, bem como, na promoção de um mundo mais inclusivo e acessível. É <span>Escritor, Mestre em Linguística Aplicada e Licenciado em Letras Libras</span>. </p>
                        </div>
                        </main>
                    </div> 
                </div>
                <img src={imgLogo} alt="" className='imgAbsolut'/>
        </section>
        </>
    )
}