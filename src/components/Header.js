import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  background-color: #000;
  color: #fff;
  padding: 20px;
`;

const SiteName = styled.h2`
  margin: 0;
`;

const NavLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <SiteName>Shorten Link Service</SiteName>
            <div>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
            </div>
        </HeaderContainer>
    );
};

export default Header;
