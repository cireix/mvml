import styled from 'styled-components'
import { vw } from '@/utils'

export const Root = styled.div`
    background: white;
    ${vw([
        ['width', 600, 600, '100%'],
    ])}
`