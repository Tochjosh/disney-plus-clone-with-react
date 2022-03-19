import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <div>
        <Nav>
        <Logo src='images/logo.svg' alt='disney logo'/>
        <Navmenu>
            <a href='#'>
                <img src='images/home-icon.svg'/>
                <span>HOME</span>
            </a>
            <a href='#'>
                <img src='images/search-icon.svg'/>
                <span>SEARCH</span>
            </a>
            <a href='#'>
                <img src='images/watchlist-icon.svg'/>
                <span>WATCHLIST</span>
            </a>
            <a href='#'>
                <img src='images/original-icon.svg'/>
                <span>ORIGINALS</span>
            </a>
            <a href='#'>
                <img src='images/movie-icon.svg'/>
                <span>MOVIES</span>
            </a>
            <a href='#'>
                <img src='images/series-icon.svg'/>
                <span>SERIES</span>
            </a>
        </Navmenu>
        <UserImg src='josh.jpeg'/>
        </Nav>
    </div>
  )
}

export default Header

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`

const Logo = styled.img`
     width: 80px;
`
const Navmenu = styled.div`
padding: 0 20px;
display: flex; 
flex: 1;
 
a {
    padding: 10px;
    display: flex;
    align-items: center;
    color: white;
    text-decoration: none;
    cursor: pointer;

    img {
        height: 20px;
    }

    span {
        font-size: 13px;
        letter-spacing: 1.42px;
        position: relative;

        &:after {
            content: "";
            height: 2px;
            background: white;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -6px;
            opacity: 0;
            transform-origin: left-center; 
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scaleX(0);
        }

    }

    &:hover {
        span:after {
            transform: scaleX(1);
            opacity: 1;
        }
    }
    
} 
`

    const UserImg = styled.img`
        width: 60px;
        height: 60px;
        border-radius: 50%; 
        cursor: pointer;
        &:hover {
            transform: scale(1.05);
            
        }

    `