import Colaborador from '../Colaborador';
import './Time.css'

const Time = (props) => {

    const css = {backgroundColor: props.corSecundaria}

    console.log(props.colaboradores)
    return (
        props.colaboradores.length > 0  && 
            <section className='time' style={css}>
                <h3 style={{ borderColor: props.corPrimaria}}>{props.nome}</h3>
                <div className='colaboradores'>
                    {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} nome={colaborador.nome} imagem={colaborador.imagem} cargo={colaborador.cargo} corDeFundo={props.corPrimaria}/> )}
                </div>
            </section>
        
    )

}

export default Time;