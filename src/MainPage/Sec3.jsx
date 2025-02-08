import { CContainer } from "@coreui/react";
import Slider from "react-slick";
import logo from '../assets/sub-before.png';
import plane from '../assets/icon-plane-4.webp';
import iconbox from '../assets/icon-boxes.webp';
import iconplane from '../assets/black-plane.png';
import cotton from '../assets/cotton.jpg';
import ddg from '../assets/ddg.jpg';
import soya from '../assets/soya.jpg';
import ck from '../assets/ck.jpg';
import basmati from '../assets/basmati.jpg';
import corn from '../assets/corn.jpg'; 
import { Link } from "react-router-dom";
export const Sec3 = () => {
    var settings = {
        dots: false,
        nav: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    //mockData 
    const mockData = [
        {
            img: cotton,
            img2:iconplane,
            name: "Cotton",
            desc: "Premium quality cotton for textile industry.",
            link : [
                {to: "/product", title: "Read More"}
            ]
        },
        {
            img: ddg,
            img2:iconplane,
            name: "DDGS",
            desc: "Distillers Dried Grains with Solubles for animal feed.",
            link : [
                {to: "/product", title: "Read More"}
            ]
        },
        {
            img: soya,
            img2:iconplane,
            name: "Soybean",
            desc: "High-protein soybean for a variety of uses.",
            link : [
                {to: "/product", title: "Read More"}
            ]
        },
        {
            img: ck,
            img2:iconplane,
            name: "Chicken Meal",
            desc: "Looking for a protein source for your furry friend's diet? Look no further than fresh chicken meal!",
            link : [
                {to: "/product", title: "Read More"}
            ]
        },
        {
            img: basmati,
            img2:iconplane,
            name: "Basmati Rice",
            desc: "High-quality basmati rice perfect for any dish.",
            link : [
                {to: "/product", title: "Read More"}
            ]
        },
        {
            img: corn,
            img2:iconplane,
            name: "Corn",
            desc: "Fresh and sweet corn for various culinary uses.",
            link : [
                {to: "/product", title: "Read More"}
            ]
        }
    ]
    return (
        <section className="relative" id="productSection">
            <div>
            <img src={plane} alt="" className="absolute plane-img -top-[50%] left-0"/>
            <img src={iconbox} alt="" className="absolute box-img -top-[15%] right-[7%] md:right-[3%]"/>
            </div>
            <CContainer>
                <div>
                    <img src={logo} alt="" />
                    <h4 className="font-medium pt-2" style={{fontSize: "20px", fontFamily: "var(--oswald-font)"}}>WHAT WE DO</h4>
                    <h3>Global Trade Solutions Hub</h3>
                </div>
                <div className="slider-container">
                    <Slider {...settings}>
                        {mockData.map((item)=>{
                            const {img, img2, name, desc} = item;
                            return (
                                <div key={item.id} className="mainbox w-full md:w-[95%] mt-[40px] relative">
                                <div className="relative pro-img-box">
                                    <img src={img} alt="" className="w-full img1" />
                                    <img src={img} alt="" className="w-full img2"/>
                                </div>
                                 <div className="bg-[var(--bg-color)] py-[15px] px-[15px] absolute top-[46%] right-0 z-10">
                                     <img src={img2} alt="" className="w-[50px] h-full object-contain"/>
                                 </div>
                                 <div className="py-[10px] px-[15px] h-[150px]">
                                     <h2 className="text-[20px] md:text-[28px] font-semibold capitalize" style={{fontFamily: "var(--oswald-font)", fontSize: "28px"}}>{name}
                                     </h2>
                                     <p className="w-[90%] md:w-[85%]">{desc}</p>
                                     {item.link.map((btn)=> (
                                    <button key={btn.id} className=" absolute bottom-[7%] right-[-11%] text-[18px] uppercase bg-black text-white py-[10px] px-[20px] decoration-0 transform rotate-90"><Link to="btn.to" className="decoration-0 text-white" style={{textDecoration: "none"}} >{btn.title}</Link></button>
                                     ))}
                                 </div>
                             </div>
                            )
                        })}
                    </Slider>
                </div>
            </CContainer>
        </section>
    )
}