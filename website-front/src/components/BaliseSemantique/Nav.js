import React from "react";
import { Link } from 'react-router-dom';
import logoStudio from '../../images/logo_studio.jpg'; // with import
//<img src={logoStudio} />
import '../../css/Nav.css';

export default function Nav() {

    return (
        <nav>
            <div className="navLogos">
                <button className="navLogo1">LOGO1</button>
                <button className="navLogo2">LOGO2</button>
            </div>

            <ul>
                <li>
                    <Link to="/">LE JEU</Link>
                </li>
                <li>
                    <Link to="/test">ROAD MAP</Link>
                </li>
                <li>
                    <Link to="/test">NOTES DE PATCH</Link>
                </li>
  		<li>
                    <Link to="/test">ETAT DES SERVICES</Link>
                </li>
                <li>
                    <Link to="/test">TELECHARGEMENT</Link>
                </li>
                <li>
                    <Link to="/test">RANK</Link>
                </li>
                <li>
                    <Link to="/test">WIKI</Link>
                </li>
                <li>
                    <Link to="/test">DISCORD</Link>
                </li>
                <li>
                    <Link to="/test">SUPPORT</Link>
                </li>
            </ul>

            <div className="containerConnectInscription">
               <button className="buttonConnect">CONNEXION</button>
               <button className="buttonPlay">JOUER</button>
            </div>
        </nav>
    );

}