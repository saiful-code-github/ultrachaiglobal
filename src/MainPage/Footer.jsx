import { CCol, CContainer, CRow } from '@coreui/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import footerlogo from '../assets/white-logo.png';
import plane from '../assets/icon-plane-3.png';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisble] = useState(false);
  const mockData = [
    {
      img:<i className='bi bi-phone' style={{fontSize: "24px"}}></i> ,
      heading: "Phone:",
      link: [
        {to: "tel:+91-97344 65935", text: "+91-97344 65935"},
        {to: "tel:+91-97344 65935", text: "+91-97344 65935"},
      ]
    },
    {
      img:<i className='bi bi-envelope' style={{fontSize: "24px"}}></i> ,
      heading: "Email:",
      link: [
        {to: "mailto:info@ultrachainglobal.com", text: "info@ultrachainglobal.com"},
        {to: "tel:info@ultrachainglobal.com", text: "info@ultrachainglobal.com"},
      ]
    },
    {
      img:<i className='bi bi-geo-alt-fill' style={{fontSize: "24px"}}></i> ,
      heading: "Address:",
      link: [
        {to: "", text: "332/2, P.K.Guha Road, Kumarpara, Bikrampur Pally, Kolkata, 700028, West Bengal"},
      ]
    },
  ]
  const footerInfo = [
     {
      heading: 'Quick Links',
      links: [
        {to: "", text: "About"},
        {to: "", text: "Services"},
        {to: "", text: "Product"},
        {to: "", text: "Our Product"},
        {to: "", text: "Contact"}
     ]
     },
      {
        heading: <h2 style={{marginTop: "35px"}}></h2>,
      links: [
        {to: "", text: "Product"},
        {to: "", text: "Our Product"},
        {to: "", text: "Contact"}
     ]
     },
     
  ]
  const socialLink = [
    {
      icons: <i className='bi bi-facebook'></i>,
      to: '/about'
    },
    {
      icons: <i className='bi bi-twitter'></i>,
       to: '/about'
    },
    {
      icons: <i className='bi bi-instagram'></i>,
     to: '/about'
    },
    {
      icons: <i className='bi bi-linkedin'></i>,
      to: '/about'
    }
  ]

  //handle clicked
  const handleClick = () =>{
    window.scrollTo({
      top:0,
      behavior: "smooth",
    })
  }

  const screenToTop = () =>{
      const heightToShow = 250;
      const scrollTopBottom = document.body.scrollTop || document.documentElement.scrollTop;
      setIsVisble(scrollTopBottom > heightToShow)   
  }
  useEffect(()=>{
    window.addEventListener('scroll', screenToTop);
    return () => window.removeEventListener('scroll', screenToTop);
  },[]);
  return (
    <footer className='mt-10 relative' id="contactSection">
      <img src={plane} alt="" className='absolute top-[48%] -right-[16%] w-[32%] box-img'/>
        <CContainer>
             <CRow className='mb-[50px] px-4 md:px-24 py-3 md:py-8' style={{backgroundColor: "var(--bg-color)",color: "#fff"}}>
              {mockData.map((item)=> {
                const {img, heading} = item;
                return (
                  <CCol lg={4} key={item.id}>
                  <div className='flex'>
                     <div className='shrink mr-3 -mt-2'>
                         {img}
                     </div>
                     <div className='grow'>
                         <h2 className='text-[20px] font-medium' style={{fontSize: "20px",fontFamily: "var(--oswald-font)"}}>{heading}</h2>
                         {item.link.map((btn)=>(
                            <span className='block' key={btn.id}><Link to={btn.to} className='text-white' style={{textDecoration: "none"}}>{btn.text}</Link></span>
                         ))}
                     </div>
                  </div>
              </CCol>
                )
              })}
             </CRow>
             {/* main footer content */}
             <CRow>
                <CCol lg={4}>
                    <div>
                       <img src={footerlogo} alt="" className='w-[55%]'/>
                       <p className='block mt-3 text-white leading-6'>We strongly support best practice sharing across our operations around the world and across various transporation sectors</p>
                    </div>
                </CCol>
                {footerInfo.map((item)=> (
                  <CCol lg={2} key={item.id} className='res-col'>
                  <div>
                      <h2 className='text-white mb-3' style={{fontSize: "20px", fontFamily: "var(--oswald-font)"}}> {item.heading}
                      </h2>
                      <ul className='m-0 p-0'>
                        {item.links.map((link)=>(
                            <li className='pb-2' key={link.id}>
                            <Link to={link.to} className='text-white' style={{fontFamily:"var(--oswald-font)", textDecoration: "none"}}>{link.text}</Link>
                            </li>
                        ))}
                      </ul>
                  </div>
              </CCol>
                ))}
                <CCol lg={4}>
                    <h2 className='text-white mb-3' style={{fontSize: "20px", fontFamily: "var(--oswald-font)"}}>Newsletter
                    </h2>
                    <p className='text-white'>Signup for our latest news & articles.
                    </p>
                    <div>
                        <input type="email" placeholder='Enter Your Email' value={email} onChange={(e)=> setEmail(e.target.value)} className="outline-0 text-white border-b-2 border-white" style={{borderBottomColor: "#fff"}}/>
                        <i className="bi bi-send-fill text-[20px] text-orange-600 -ml-[15px]" ></i>
                    </div>
                    <ul className='flex justify-start m-0 p-0'>
                      {socialLink.map((item)=> (
                          <li key={item.id} style={{paddingRight: "10px"}}>
                          <Link to={item.to} className='text-white'>
                            {item.icons}
                          </Link>
                          </li>
                      ))}
                    </ul>
                </CCol>
             </CRow>
             <hr  className='text-white'/>
             <p className='text-white text-center' style={{fontSize: "16px"}}> ©2024 Ultrachain Global All rights reserved. Designed By <Link to='/' style={{color: "var(--bg-color)", textDecoration: "none"}}>Sk Saiful Islam</Link></p>
        </CContainer>
        {/* visible */}
        {isVisible && (
        <div onClick={handleClick} className='shadow-2xl z-50 cursor-pointer py-[8px] px-[15px] rounded-[5px] text-center fixed bottom-[35px] right-[35px]' style={{background: "var(--bg-color)"}}>
        <i className="bi bi-arrow-up text-white" style={{fontSize: "24px"}}></i>
        </div>
        )}
    </footer>
  )
}

export default Footer;