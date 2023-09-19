import { useState } from "react";

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>

const App = () => {
  const anecdotes = [
    'Se fazer algo dói, faça isso com mais frequência.',
    'Contratar mão de obra para um projeto de software que já está atrasado, faz com que se atrase mais ainda!',
    'Os primeiros 90% do código correspondem aos primeiros 10% do tempo de desenvolvimento... Os outros 10% do código correspondem aos outros 90% do tempo de desenvolvimento.',
    'Qualquer tolo escreve código que um computador consegue entender. Bons programadores escrevem código que humanos conseguem entender.',
    'Otimização prematura é a raiz de todo o mal.',
    'Antes de mais nada, depurar é duas vezes mais difícil do que escrever o código. Portanto, se você escrever o código da forma mais inteligente possível, você, por definição, não é inteligente o suficiente para depurá-lo.',
    'Programar sem o uso extremamente intenso do console.log é o mesmo que um médico se recusar a usar raio-x ou testes sanguíneos ao diagnosticar pacientes.',
    'A única maneira de ir rápido é ir bem.'
  ]

  const [selected, setSeleted] = useState(0)
  const [votes, setVotes] = useState(0)

  let points = anecdotes.map(anecdote => {
    return {
      name: anecdote,
      vote: 0
    }
  })

  const [point, setPoint] = useState(points)

  const handleVotes = () => {
    let copyPoints = [...point]
    console.log('Clicou no voto', point)
    copyPoints[selected].vote += 1
    if (copyPoints[selected].vote > point[votes].vote) {
      setVotes(selected)
      setPoint(copyPoints)
    }
  }

  const number = Math.floor(Math.random() * anecdotes.length)
  const handleAnecdotes = () => {
    console.log('Number handle anecdotes ', number)
    setSeleted(number)
  }

  return (
    <>
      <h1>Anecdote of day</h1>
      <h3>{point[selected].name}</h3>
      <p>has {point[selected].vote} votes</p>
      <Button text='Next anecdote' onClick={handleAnecdotes} />
      <Button text='Vote' onClick={handleVotes} />
      <h1>Anecdotes with the mose vote</h1>
      <p>{point[votes].name}</p>
      <p> has vote {point[votes].vote}</p>

    </>
  );
}

export default App;
