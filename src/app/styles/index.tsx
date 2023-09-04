import styled from 'styled-components';
import { vw } from '@/utils';

import BackgroundImg from '@/assets/background.jpg';

export const Main = styled.main`
    width: 100%;
    min-height: 100vh;
    background-image: url(${BackgroundImg.src});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    ${vw([
        ['padding-left', 580, 84, 12],
        ['padding-right', 580, 84, 12],
    ])}
`;
