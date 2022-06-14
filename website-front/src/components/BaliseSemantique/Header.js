import React from "react";
import Nav from './Nav';
import '../../css/Header.css';

export default function Header() {

    return (
        <header style={{ position: 'sticky', top: 0, left: 0, zIndex: 999 }}>
            <Nav />

        </header>
    );

}