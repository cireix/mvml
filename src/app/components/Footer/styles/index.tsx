import styled from 'styled-components'
import { vw } from '@/utils'

export const Root = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    ${vw([
        ['padding-top', 40, 20, 10],
        ['padding-bottom', 40, 20, 10],
        ['padding-left', 60, 20, 12],
        ['padding-right', 60, 20, 12]
    ])}
`

export const MVMLLogo = styled.img`
    ${vw([
        ['width', 200, 150, 100],
    ])}
`;