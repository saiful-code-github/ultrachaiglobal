import { CCol, CContainer, CRow } from "@coreui/react";
import iconplane from '../assets/icon-plane-4.webp';
import logo from '../assets/sub-before.png';
import healthyFood from '../assets/healthy-food (1).png';
import oilseed from '../assets/oilseed.png';
import rice from '../assets/rice.png';
import spice from '../assets/spices.png';
import { Link } from "react-router-dom";

export const Sec6 = () =>{
    const mockData = [
        {
            img: healthyFood,
            name: "Spice",
            para: "Specializing in global spice trade, sourcing quality products worldwide.",
            link: [
                {to: "/product", title: "Read more"}
            ]
        },
        {
            img: oilseed,
            name: "Spice",
            para: "Specializing in global spice trade, sourcing quality products worldwide.",
            link: [
                {to: "/product", title: "Read more"}
            ]
        },
        {
            img: rice,
            name: "Spice",
            para: "Specializing in global spice trade, sourcing quality products worldwide.",
            link: [
                {to: "/product", title: "Read more"}
            ]
        },
        {
            img: oilseed,
            name: "Spice",
            para: "Specializing in global spice trade, sourcing quality products worldwide.",
            link: [
                {to: "/product", title: "Read more"}
            ]
        },
        {
            img: rice,
            name: "Spice",
            para: "Specializing in global spice trade, sourcing quality products worldwide.",
            link: [
                {to: "/product", title: "Read more"}
            ]
        },
        {
            img: spice,
            name: "Spice",
            para: "Specializing in global spice trade, sourcing quality products worldwide.",
            link: [
                {to: "/product", title: "Read more"}
            ]
        },
    ]
    return (
        <section className="relative mt-[50px] mb-[30px]">
            <img src={iconplane} alt="" className="absolute top-[2%] right-[4%] plane-img w-[10%] h-[500px]"/>
             <CContainer>
                   <div className="mb-[20px] text-center md:text-start">
                       <img src={logo} alt="" className="md:block md:mx-0 mx-auto "/>
                       <h3 className="font-medium pt-2" style={{fontSize: "20px", fontFamily: "var(--oswald-font)"}}>WHAT WE OFFER
                       </h3>
                       <h2>Our Products
                       </h2>
                   </div>
                   <CRow>
                    {mockData.map((item)=> {
                        const {img, name, para} = item;
                        return (
                            <CCol lg={4} key={item.id} className="mb-[20px]">
                            <div className="flex justify-items-start align-top py-[20px] px-[25px]" 
                            style={{boxShadow: "0 5px 15px rgba(0, 0, 0, .3)"}}>
                                <div className="shrink mr-3">
                                    <img src={img} alt="" className="w-[100px] h-[100px] object-contain"/>
                                </div>
                                <div className="grow">
                                    <h2 className="text-[20px] font-medium capitalize mb-[20px]" style={{fontFamily: "var(--oswald-font)", fontSize: "24px"}}>{name}</h2>
                                    <p>{para}</p>
                                    {item.link.map((btn)=>(
                                     <button key={btn.id} className="outline-0 border-0"><Link to={btn.to} style={{textDecoration: "none", color: "var(--bg-color)",fontSize: "18px",fontWeight: "700"}}>{btn.title}</Link></button>
                                    ))}
                                </div>
                            </div>
                         </CCol>
                        )
                    })}
                   </CRow>
             </CContainer>
        </section>
    )
}