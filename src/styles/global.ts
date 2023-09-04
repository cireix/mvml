"use client";

import { createGlobalStyle } from "styled-components";
import { vw } from "@/utils";

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
            ['font-size', 18, 18, 14],
        ])}
    }

    input {
        font-weight: 400;
        ${vw([
            ['font-size', 18, 18, 14],
        ])}
    }
`;