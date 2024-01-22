import './home.css'
import imgMaos from '../assets/imgMoas.png'

export const Home = () =>{


    
    return(
        <>
        <section className="home" id='home'>

            <div className="container-home">
                <div className="left">
                    <div className="main-title">
                        <h3>NC Consultoria e Assessoria</h3>
                        <img src={imgMaos} alt="" />
                    </div>
                    
                    <h1>Excelência que faz a diferença!</h1>
                    <p>é um prazer tê-lo(a) aqui</p>
                </div>
            </div>
        </section>
        </>
    )
}