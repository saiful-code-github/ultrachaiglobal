import React, { useEffect, useState } from 'react';
import {
    CCollapse,
    CContainer,
    CNavbar,
    CNavbarNav,
    CNavbarToggler,
    CNavItem,
  } from '@coreui/react';
  import logo from '../assets/white-logo.png';
  import logo2 from '../assets/logo-2.png';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
    const [visible, setVisible] = useState(false);
    const [nav, setNav] = useState(false);
    const navigate = useNavigate();

    const scrollNav = () =>{
      if(window.scrollY > 250) {
        setNav(true)
      }else {
        setNav(false)
      }
    }
    useEffect(() =>{
         window.addEventListener('scroll',scrollNav);
         return () => window.removeEventListener('scroll', scrollNav)
    },[]);
    // click to another section
    const handleScrollToSection = (e, sectionId) =>{
       e.preventDefault();
       setVisible(false);

       if(window.location.pathname !== "/"){
        navigate('/');
        setTimeout(()=> {
          const section = document.getElementById(sectionId);
          if(section){
            section.scrollIntoView({behavior: "smooth", block: "start"})
          }
        }, 100);
       }else {
        const section = document.getElementById(sectionId);
        if(section) {
          section.scrollIntoView({behavior: "smooth", block: "start"})
        }
       }
    };
  return (
    <header className='absolute top-0 left-0 m-auto z-50 right-0'>
        <CNavbar expand="lg" className={`${nav ? "sticky" : ""}`}>
      <CContainer>
        <NavLink to="/" onClick={(e)=> handleScrollToSection(e, "homeSection")}>
            <img src={`${nav ? logo2 : logo}`} alt="" className='w-[180px] h-full hidden md:block'/>
            <img src={`${nav ? logo2 : logo2}`} alt="" className='w-[180px] h-full block md:hidden'/>
        </NavLink>
        <CNavbarToggler onClick={() => setVisible(!visible)} className='outline-0'/>
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav className="ms-auto">
            <CNavItem>
              <NavLink to="/" onClick={(e)=> handleScrollToSection(e, "homeSection")} className={({ isActive }) =>
                  isActive
                    ? "active"
                    : 'inactive'
                }>
                Home
              </NavLink>
            </CNavItem>
            <CNavItem>
            <NavLink to="/aboutSection" onClick={(e) => handleScrollToSection(e, "aboutSection")}  className={({ isActive }) =>
                  isActive
                    ? "active"
                    : 'inactive'
                }>About</NavLink>
            </CNavItem>
            <CNavItem>
              <NavLink to="/servicesSection" onClick={(e)=> handleScrollToSection(e, "servicesSection")}  className={({ isActive }) =>
                  isActive
                    ? "active"
                    : 'inactive'
                }>Services</NavLink>
            </CNavItem>
            <CNavItem>
              <NavLink to="/productSection" onClick={(e)=> handleScrollToSection(e, "productSection")} className={({ isActive }) =>
                  isActive
                    ? "active"
                    : 'inactive'
                }>Product</NavLink>
            </CNavItem>
            <CNavItem>
              <NavLink to="/contactSection" onClick={(e)=> handleScrollToSection(e, "contactSection")} className={({ isActive }) =>
                  isActive
                    ? "active"
                    : 'inactive'
                }>Contact</NavLink>
            </CNavItem>
          </CNavbarNav>
        </CCollapse>
      </CContainer>
    </CNavbar>
    </header>
  )
}

export default Header;