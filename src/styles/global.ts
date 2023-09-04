"use client";

import { createGlobalStyle } from "styled-components";
import { vw } from "@/utils";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
    h1 {
        font-weight: 700;
        ${vw([
            ['font-size', 24, 18, 14],
        ])}
    }

    p {
        font-weight: 400;
        ${vw([
            ['font-size', 22, 14, 12],
        ])}
    }

    input, textarea {
        font-weight: 400;
        outline: none;
        border: none;
        ${vw([
            ['font-size', 20, 14, 12],
        ])}
    }

    button {
        outline: none;
        border: none;
        cursor: pointer;
        color: ${theme.colors.white};
        font-weight: 400;
        ${vw([
            ['font-size', 24, 18, 14],
        ])}
    }
`;