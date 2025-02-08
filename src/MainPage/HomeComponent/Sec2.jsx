import { CCol, CContainer, CRow } from "@coreui/react";
import about1 from '/src/assets/s1.jpg';
import about2 from '/src/assets/about-2.jpg';
import aboutlogo from '/src/assets/sub-before.png';
import { ButtonGroup } from "../../Button";
import icondot from '/src/assets/icon-dots.png';

export const Sec2 = () => {
    const mockData = [
        {
            img: aboutlogo,
            para: "In the age of science and technology business becomes the cornerstone of economy of a country. And 'Ultrachain Global' is in the forefront in 'Export and Import Business' in and beyond boundaries. Innovative minds and passion in hearts, we are creating an example before all the aspiring business minds of India. We deals with different products and always keeping in mind the consistency of quality of each and every products. We take utmost care in every steps of the deals and give our customers the assurance of the best. Best qualities of products, customer satisfaction and experience are the pivotal part for the flourishing success of our company. It is our solemn endeavour to create an ambience where business can trade the path of success and unfurl the dimensions of our business.",
            title: "ABOUT ULTRACHAIN GLOBAL",
            subtitle: "Global Trade Solutions Provider"
        }
    ]
    return (
        <section className="my-[40px]" id="aboutSection">
            <CContainer>
                <CRow>
                    <CCol lg={6}>
                        <div className="relative shadow-2xl mr-0 md:mr-[60px] about">
                            <img src={about1} alt="" className="relative w-full h-[400px] object-cover z-10"/>
                            <div>
                                <img src={about2} alt="" className="absolute about-two-img z-20 -bottom-[20px] -right-[50px] w-[55%] border-[10px] border-white"/>
                                <div className="flex z-30 about-one-img bg-[var(--bg-color)] absolute top-0 -left-[30px] outline-1 outline-black outline-offset-4 py-[10px] px-[10px]">
                                    <div className="shrink">
                                        <img src='/src/assets/delivery-service.png' alt="" className="w-[60px] mr-2 h-[50px] object-contain" />
                                    </div>
                                    <div className="grow">
                                        <h6 className="text-[32px] md:text-[42px] font-medium text-white" style={{fontFamily: "var(--oswald-font)", fontSize: "42px"}}>20 <span>+</span> </h6>
                                        <h5 className="text-[20px] text-white">Work Experience
                                        </h5>
                                    </div>
                                </div>
                                <img src={icondot} alt="" className="absolute about-three-img top-[20px] -right-[50px] z-10"/>
                            </div>
                        </div>
                    </CCol>
                    <CCol lg={6}>
                        {mockData.map((item) => {
                            const {img, para, subtitle, title} = item;
                         return <div key={item}>
                                <img src={img} alt="" className="mb-2 mt-3 md:mt-0"/>
                                <h4 style={{fontSize: "20px", fontFamily: "var(--oswald-font)"}} className="text-[20px] md:text-2xl capitalize mt-0 mb-[5px] font-medium">{title}
                                </h4>
                                <h3 className="text-2xl md:text-6xl" style={{fontSize:"32px"}}>{subtitle}
                                </h3>
                                <p className="text-justify">
                                    { para}
                                </p>
                                <ButtonGroup to="/about" name="Discover Me" className="text-white text-[18px]" style={{ color: "#fff" }} />
                            </div>
                        })}

                    </CCol>
                </CRow>
            </CContainer>
        </section>
    )
}