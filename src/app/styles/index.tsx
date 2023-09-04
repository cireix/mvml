import styled from 'styled-components';
import { vw } from '@/utils';

import BackgroundImg from '@/assets/background.jpg';

const isMobile = () => {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
} 

export const Main = styled.main`
    width: 100%;
    background-image: url(${BackgroundImg.src});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    ${vw([
        ['min-height', '100vh', '100vh', isMobile() ? '90vh' : '100vh'],
        ['padding-left', 400, 84, 12],
        ['padding-right', 400, 84, 12],
    ])}
`;
