import { useState } from 'react';
import Button from '../Button';
import ComboBox from '../ComboBox';
import Input from '../Input';
import './Form.css'

const Form = (props) => {


    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('')

    const aoSalvar = (e) => {
        e.preventDefault()
        console.log(nome)
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time    
        })
        setNome("")
        setCargo("")
        setImagem("")
        setTime("")
    }


    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados paracriar o card do colaborador</h2>
                <Input required={false} label="Nome" placeholder="Digite o seu nome..." valor={nome} aoAlterado={valor => setNome(valor)} />
                <Input required={false} label="Cargo" placeholder="Digite o seu cargo..." valor={cargo} aoAlterado={valor => setCargo(valor)} />
                <Input required={false} label="Endereço da imagem" placeholder="Digite o endereço da imagem..." valor={imagem} aoAlterado={valor => setImagem(valor)} />
                <ComboBox valor={time} aoAlterado={valor => setTime(valor)} required={false} label="Times" itens={props.times}/>
                <Button>
                    Criar card
                </Button>
            </form>
        </section >
    );
}

export default Form