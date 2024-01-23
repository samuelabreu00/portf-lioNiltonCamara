import './home.css'
import imgMaos from '../assets/imgMoas.png'
// import Typical from 'react-typical'
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
                    
                    <h1>Excelência que faz a diferença! </h1>
                    <p>
                    {/* <Typical
                    loop={Infinity} 
                    steps={
                        [
                            'é um prazer ter você aqui ',
                            5000,
                        ]
                    }
                  
                    /> */}
                    </p>
                </div>
            </div>
        </section>
        </>
    )
}