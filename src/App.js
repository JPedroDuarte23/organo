import Banner from './components/Banner';
import Form from './components/Form';
import { useState } from 'react';
import Time from './components/Time';

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const times = [
    { 
      'nome':'Programação',
      'corPrimaria': '#57c278',
      'corSecundaria': '#d9f7e9'
    },
    { 
      'nome':'Front-End',
      'corPrimaria': '#82cffa',
      'corSecundaria': '#e8f8ff'
    },
    { 
      'nome':'Data Science',
      'corPrimaria': '#a6d157',
      'corSecundaria': '#f0f8e2'
    },
    { 
      'nome':'Devops',
      'corPrimaria': '#e06b69',
      'corSecundaria': '#fde7e8'
    },
    { 
      'nome':'Ux e Design',
      'corPrimaria': '#db6ebf',
      'corSecundaria': '#fae9f5'
    },
    { 
      'nome':'Mobile',
      'corPrimaria': '#ffba05',
      'corSecundaria': '#fff5d9'
    },
    { 
      'nome':'Inovação e Gestão',
      'corPrimaria': '#ff8a29',
      'corSecundaria': '#ffeedf'
    }
]

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Form aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} times={times.map(time => time.nome)}/>

      {times.map(time => 
      <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores ={colaboradores.filter(colaborador => colaborador.time === time.nome)}/>)}

    </div>
  );
}

export default App;
