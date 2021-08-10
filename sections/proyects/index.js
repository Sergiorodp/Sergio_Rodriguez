import ProyectCard from "components/proyect_card"

export default function Proyects(){
    return(
        <>
        <section  id="Proyects">

            <div className = 'proyects-container'>
                <h3>Proyects</h3>
                
                    <ProyectCard
                        src = '/assets/happy_sergio.png'
                    />
                    <ProyectCard
                        src = '/assets/happy_sergio.png'
                    />
                    <ProyectCard
                        src = '/assets/happy_sergio.png'
                    />
               
            </div>

        </section>

        <style jsx>{`
            
            section{
                min-height: 100vh;
                background:black;
            }

            .proyects-container{
                min-height:100%;
                min-width:100%;
            }
            
            
            `}</style>
        </>
    )
}