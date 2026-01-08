import Banner from './componentes/Banner/Banner'; 
import Formulario from './componentes/Formulario';
import { useState } from 'react';
import Time from './componentes/TIme';

function App() {

  const times = [
    {
      nome: "Programação",
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9',
    },
    {
      nome: "Front-End",
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff',
    },
    {
      nome: "Data Science",
      corPrimaria: '#a6d157',
      corSecundaria: '#f0f8e2',
    },
    {
      nome: "DevOps",
      corPrimaria: '#e06869',
      corSecundaria: '#fde7e8',
    },
    {
      nome: "UX e Design",
      corPrimaria: '#db6ebf',
      corSecundaria: '#fae9f5',
    },
    {
      nome: "Mobile",
      corPrimaria: '#ffba05',
      corSecundaria: '#fff5d9',
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: '#ff8a29',
      corSecundaria: '#ffeedf',
    },
  ]

  const[colaboradores, setColaboradores] = useState([]);

  const NovoColoaboradorAdicionado = (colaborador) => {
    colaboradores.push(colaborador);
    setColaboradores([...colaboradores, colaborador]);

  }
  return (
    <div className="App">
      <Banner />
      <Formulario ColaboradorCadastrado={colaborador => NovoColoaboradorAdicionado(colaborador)} />
      
      {times.map(time => <Time nome={time.nome} key={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} />)}

    </div>
  );
}

export default App;
