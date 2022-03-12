import styled from 'styled-components';

//4 Props abaixo na 1ª e 2ª Etapa.
export const Container = styled.div<{ size: number, left: number, top: number, sidePos: number }>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    left: ${props => props.left}px;
    top: ${props => props.top}px;
    position: absolute;
    background-image: url('assets/char.png');
    background-position: 0px ${props => props.sidePos}px;
`