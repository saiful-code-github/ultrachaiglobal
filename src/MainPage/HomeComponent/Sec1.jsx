import React from 'react';
import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react';
import banner1 from '/src/assets/banner.jpg';
import banner2 from '/src/assets/fruit_veg_banner.jpg';
import bannerlogo from '/src/assets/sub-before.png';
import { ButtonGroup } from './../../Button';
const Sec1 = () => {
    const mockData = [
        {
            img: banner1,
            bannerlogo: bannerlogo,
            name: 'Ultrachain Global',
            heading: "Spicing Up Logistics Excellence",
            para: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
            link : [
                {to: "/", name:"View Details"}
            ]
        },
        {
            img: banner2,
            bannerlogo: bannerlogo,
            name: 'Ultrachain Global',
            heading: "Spicing Up Logistics Excellence",
            para: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
            link : [
                {to: "/", name:"View Details"}
            ]
        },
        {
            img: banner1,
            bannerlogo: bannerlogo,
            name: 'Ultrachain Global',
            heading: "Spicing Up Logistics Excellence",
            para: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
            link : [
                { name:"View Details"}
            ]
        },
    ]
    return (
        <section className='relative' id='homeSection'>
            <CCarousel controls indicators>
                {mockData.map((item)=>{
                    const {img, bannerlogo, name, heading, para} = item;
                    return (
                        <CCarouselItem key={item}>
                        <CImage className="d-block w-100 h-[590px] object-cover" src={img} alt={name}/>
                        <CCarouselCaption className="d-md-block">
                            <img src={bannerlogo} alt={name} className='mx-auto animate__animated animate__bounceInDown '/>
                             <h6 className=' animate__animated animate__bounceInLeft animate__delay-1s text-[18px] w-full md:w-[26%] mx-auto mt-3 block font-bold uppercase bg-[rgb(28 29 29 / 60%)] py-[12px] px-[34px]' style={{background: "rgb(28 29 29 / 60%)", color: "var(--bg-color)"}}>{name}</h6>
                             <h1 className=' animate__animated animate__bounceInRight animate__delay-2s text-2xl md:text-6xl'style={{fontSize: "52px"}}>{heading}</h1>
                               <p className=' animate__animated animate__fadeInUpBig animate__delay-3s text-[16px] py-[0px] md:py-[10px] md:text-[20px]'>{para}</p>
                            {item.link.map((btn)=> (
                                <div key={btn} className='animate__animated animate__fadeInUpBig animate__delay-4s'>
                                    <ButtonGroup className="rounded-2xl" style={{color: "#fff"}} to="/about" name={btn.name}/>
                                </div>
                              
                            ))}
                        </CCarouselCaption>
                    </CCarouselItem>
                    )
                })}
            </CCarousel>
        </section>
    )
}

export default Sec1;