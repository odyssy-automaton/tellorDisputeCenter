import React, { useContext } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';

import { CurrentUserContext } from '../../contexts/Store';
import { Web3SignIn } from './Web3SignIn';
import { truncateAddr } from '../../utils/helpers';
import tellorLogoDark from '../../assets/Tellor__Logo--Dark.png';
import tellorLogoLight from '../../assets/Tellor__Logo--Light.png';

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const StyledBrandLink = styled.div`
  a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    img {
      height: 60px;
      width: auto;
      display: inline-block;
    }
    span {
      // color: #5cfcb6;
      color: #444444;
      font-size: 21px;
      font-weight: 300;
      margin-bottom: -11px;
    }
    @media (max-width: 800px) {
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      span {
        display: none;
      }
    }
  }
`;

const StyledHeaderNav = styled.div`
  display: inline-block;
  margin-left: auto;
  > button {
    padding: 0px 15px !important;
  }
  > * {
    margin-left: 25px;
    font-size: 1.5em;
    // color: #5cfcb6;
    color: #444444;
    &:hover {
      color: #000;
    }
    &:last-child {
      // border: 2px solid #5cfcb6;
      // color: #5cfcb6;
      border: 2px solid #444444;
      color: #444444;
      border-radius: 50px;
      padding: 10px 15px;
      vertical-align: middle;
      &:hover {
        border: 2px solid #000;
        color: #000;
      }
    }

    @media (max-width: 800px) {
      font-size: 1em;
      margin-left: 15px;
    }
  }
`;

const HeaderNav = () => {
  const { Header } = Layout;
  const [currentUser, setCurrentUser] = useContext(CurrentUserContext);

  return (
    <Header>
      <StyledHeader>
        <StyledBrandLink>
          <Link to="/">
            <img alt="tellor-logo" src={tellorLogoLight} />
            <span>dispute center</span>
          </Link>
        </StyledBrandLink>
        <StyledHeaderNav>
          <Link to="/disputes">Disputes</Link>
          <Link to="/mining">Mining</Link>
          {!currentUser ? (
            <Web3SignIn setCurrentUser={setCurrentUser} />
          ) : (
            <span>{truncateAddr(currentUser.username)}</span>
          )}
        </StyledHeaderNav>
      </StyledHeader>
    </Header>
  );
};

export default HeaderNav;
