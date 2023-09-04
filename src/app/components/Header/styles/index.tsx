import styled from 'styled-components'
import { vw } from '@/utils'

export const Root = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    ${vw([
        ['padding-top', 40, 20, 10],
        ['padding-bottom', 40, 20, 10],
        ['padding-left', 60, 20, 12],
        ['padding-right', 60, 20, 12]
    ])}
`

export const ABCLogo = styled.img`
    ${vw([
        ['width', 100, 100, 50],
    ])}
`;