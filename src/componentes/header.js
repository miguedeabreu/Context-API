import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
    return ( 
        <ContenedorHeader>
            <Titulo>Mi blog personal!</Titulo>
            <Menu>
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/acerca-de">Acerda de</NavLink>
            </Menu>
      </ContenedorHeader>
    );
}

const ContenedorHeader = styled.header`
    text-align: center;
    margin-bottom: 40px;
`;

const Titulo = styled.h1`
    margin-bottom: 10px;
    font-size: 26px;
    text-transform: uppercase;
`;

const Menu = styled.nav`
    a {
        text-decoration: none;
        margin: 0 10px;
        color: #165168;
    }

    a:hover {
        color: #191680;
    }
    
    a.active {
        border-bottom: 2px solid #165168;
    }
`;
 
export default Header;