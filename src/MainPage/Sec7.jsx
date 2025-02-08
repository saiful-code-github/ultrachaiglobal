import { CContainer } from "@coreui/react";
import Slider from "react-slick";
import logo from '../assets/sub-before.png';
import country1 from '../assets/Bangladesh.png';
import country2 from '../assets/BENIN.png';
import country3 from '../assets/qatar.webp';
import country4 from '../assets/SRILANKA.png';
import country5 from '../assets/uae.png';
import boximg from '../assets/float-img-1.png';

export const Sec7 = () => {
    var settings = {
        dots: false,
        nav: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
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
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const mockData = [
        {img: country1},
        {img: country2},
        {img: country3},
        {img: country4},
        {img: country5},
        {img: country1},
        {img: country2},
        {img: country3},
    ]
    return (
        <section className="country relative mt-[100px]">
            <img src={boximg} alt="" className="absolute -top-[34%] md:-top-[17%] z-0 left-0 w-[10%] md:w-[22%] box-img"/>
            <CContainer>
                 <div className="mb-10 country-head flex justify-center text-center flex-col relative z-10">
                    <img src={logo} alt="" className="w-[5%] mx-auto"/>
                    <h3 className="font-medium pt-2" style={{fontSize: "20px", fontFamily: "var(--oswald-font)"}}>WHAT WE DO</h3>
                    <h2 className="relative z-0">Countries We are currently Serving</h2>
                 </div>
                 <div className="slider-container">
                    <Slider {...settings}>
                        {mockData.map((item)=>(
                            <div key={item.id} className="bg-white country-box p-10 outline-0 mt-10" style={{boxShadow: "0 5px 15px rgba(0,0,0,.3)"}}>
                                <img src={item.img} alt="" className="w-full"/>                        
                            </div>
                        ))}
                    </Slider>
                </div>
            </CContainer>
        </section>
    )
}