import styled from 'styled-components'
import SimpleBar from 'simplebar-react'
import { vw, vwDesktop, vwMobile, vwTablet } from '@/utils'

export const Root = styled.div`
    background: white;
    width: 100%;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ${vw([
        ['height',
            `calc(100vh - ${vwDesktop(150 * 2)})`,
            `calc(100vh - ${vwTablet(150 * 2)})`,
            `calc(100vh - ${vwMobile(140 * 2)})`
        ],
        ['padding-top', 30, 30, 20],
        ['padding-bottom', 30, 30, 20],
        ['padding-left', 40, 40, 12],
        ['padding-right', 40, 40, 12],
        ['border-radius', 60, 60, 20],
    ])}
`

export const Header = styled.header`
    width: 100%;
`;

export const Line = styled.hr`
    background-color: ${props => props.theme.colors.purple};
    ${vw([
        ['margin-top', 10, 10, 10],
        ['height', 5, 5, 5]
    ])}
`

export const ChatHistory = styled(SimpleBar)`
    flex-grow: 1;
    overflow-y: auto;
    max-height: 100%;
    ${vw([
        ['margin-bottom', 20, 20, 20],
        ['margin-top', 20, 20, 20],
    ])}
`;

export const InputForm = styled.form`
    width: 100%;
    display: flex;
`

export const Input = styled.textarea`
    flex-grow: 1;
    border: 1px solid ${({theme}) => theme.colors.purple};
    ${vw([
        ['padding-left', 12, 12, 12],
        ['padding-right', 12, 12, 12],
        ['padding-top', 12, 12, 12],
        ['padding-bottom', 12, 12, 12],
        ['border-top-left-radius', 20, 20, 20],
        ['border-bottom-left-radius', 20, 20, 20],
        ['border-size', 2, 2, 2],
    ])}
`
export const Submit = styled.button`
    background-color: ${({theme}) => theme.colors.purple};
    transition: background-color 0.2s ease-in-out;
    ${vw([
        ['border-top-right-radius', 20, 20, 20],
        ['border-bottom-right-radius', 20, 20, 20],
        ['padding-left', 24, 24, 12],
        ['padding-right', 24, 24, 12],
    ])}
    &:disabled {
        background-color: ${({theme}) => theme.colors.grey};
    }
`