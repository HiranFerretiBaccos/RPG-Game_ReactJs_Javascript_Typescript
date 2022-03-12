import { useEffect } from 'react';
import * as C from './App.styles';
import { Character } from './components/Character';
import { useCharacter } from './hooks/useCharacter';

const App = () => {
  const char = useCharacter();

  useEffect(() => {                                           //Quando carregar a pág, roda essa Função.
    window.addEventListener('keydown', handleKeyDown)         //Javascript Puro (keydown) 
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {                     //Javascript Puro (KeyboardEvent)
    switch (e.code) {                                         //Javascript Puro (e.code)

      case 'KeyA':
      case 'ArrowLeft':
        char.moveLeft();
        break;

      case 'KeyW':
      case 'ArrowUp':
        char.moveUp();
        break;

      case 'KeyD':
      case 'ArrowRight':
        char.moveRight();
        break;

      case 'KeyS':
      case 'ArrowDown':
        char.moveDown();
        break;
    }
  }

  return (
    <>
      <C.Container>
        <C.Map>
          <Character x={char.x} y={char.y} side={char.side} />                 {/*Posição Vertical e Horizontal*/}
        </C.Map>
      </C.Container>
    </>
  )
}

export default App