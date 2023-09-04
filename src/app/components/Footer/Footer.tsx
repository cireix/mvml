"use client";

import { MVMLLogo, Root } from './styles';

import MVMLLogoImg from '@/assets/MVML_logo.png';
import Link from 'next/link';

const Footer = () => {
    return(
        <Root>
            <Link href="https://mv.ml" target="__blank" rel="noreferrer">
                <MVMLLogo src={MVMLLogoImg.src} alt="MVML Logo" />
            </Link>
        </Root>
    )
}

export default Footer;
