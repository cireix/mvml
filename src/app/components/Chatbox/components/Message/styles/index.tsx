import { vw } from '@/utils';
import styled from 'styled-components';

import JarvisSVG from '@/assets/jarvis.svg';
import UserSVG from '@/assets/user.svg';

export const Bubble = styled.p`
    ${vw([
        ['padding-left', 12, 12, 12],
        ['padding-right', 12, 12, 12],
        ['padding-top', 9, 9, 9],
        ['padding-bottom', 9, 9, 9],
        ['border-radius', 20, 20, 12]
    ])}
`

export const Root = styled.div<{ isjarvis: boolean }>`
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: ${props => props.isjarvis ? 'row' : 'row-reverse'};
    ${Bubble} {
        background: ${props => props.isjarvis ? props.theme.colors.grey : props.theme.colors.green};
    }
    ${vw([
        ['margin-top', 20, 20, 12],
        ['gap', 10, 10 ,5],
        ['padding-right', 20, 20, 10],
    ])}
`;

export const Jarvis = styled(JarvisSVG)`
    flex-shrink: 0;
    ${vw([
        ['height', 40, 40, 30],
        ['width', 40, 40, 30],
    ])}
`

export const User = styled(UserSVG)`
    flex-shrink: 0;
    ${vw([
        ['height', 40, 40, 30],
        ['width', 40, 40, 30],
    ])}
`

