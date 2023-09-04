"use client";

import { ABCLogo, Root } from './styles';

import ABCLogoImg from '@/assets/ABC_logo.png';
import Link from 'next/link';

const Header = () => {
    return(
        <Root>
            <Link href="https://abc.com" target="__blank" rel="noreferrer">
                <ABCLogo src={ABCLogoImg.src} alt="ABC Logo" />
            </Link>
        </Root>
    )
}

export default Header;
