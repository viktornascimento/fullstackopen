import { useState } from 'react'

const Exibir = ({ contador }) => <div>{contador}</div>

const Botao = ({ onClick, texto }) => <button onClick={onClick}> {texto} </button>

const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )
}
const Part = (props) => {
  console.log(props)
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

const Content = (props) => {
  console.log("Props do Content", props.parts[0])
  return (
    <>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
    </>
  )
}

const Total = (props) => {
  const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  console.log(props)
  return (
    <p>Number of exercises {total} </p>
  )
}

const App = () => {

  const [contador, setContador] = useState(0)
  console.log('renderizando com o valor do contador em ', contador)

  const aumentarContador = () => setContador(contador + 1)
  console.log('aumentando, valor anterior', contador)

  const diminuirContador = () => setContador(contador - 1)
  console.log('diminuindo, valor anterior', contador)

  const zerarContador = () => setContador(0)
  console.log('zerando, valor anterior', contador)

  const course = {
    name: 'Desenvolvimento de Aplicação Half Stack',
    parts: [
      {
        name: 'Fundamentos da biblioteca React',
        exercises: 10
      },
      {
        name: 'Usando props para passar dados',
        exercises: 7
      },
      {
        name: 'Estado de um componente',
        exercises: 14
      }]
  }
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Exibir contador={contador} />

      <Botao
        onClick={aumentarContador}
        texto='mais+'
      />
      <Botao
        onClick={diminuirContador}
        texto='menos-'
      />
      <Botao
        onClick={zerarContador}
        texto='zerar'
      />
    </>
  )
}

export default App