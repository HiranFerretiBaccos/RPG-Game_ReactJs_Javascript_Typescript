import * as C from './styles';
import { CharacterSides } from '../../types/CharacterSides';

type Props = {
    x: number;
    y: number;
    side: CharacterSides;
}

export const Character = ({ x, y, side }: Props) => {                  //3 Props na 1ª Etapa e já Tipadas acima.
    const size = 30;
    const sides = {
        down: 0,
        left: -30,
        right: -60,
        up: -90
    }

    return (
        <>
            <C.Container
                size={size}                                             //3ª Etapa das 3 props SLT
                left={x * size}                                         //2ª Etapa das 2 props XY
                top={y * size}
                sidePos={sides[side] ?? 0}                              //3ª Etapa dessa prop sidePos. Se ñ achar, fica na posição Padrão.
            >

            </C.Container>
        </>
    )
}