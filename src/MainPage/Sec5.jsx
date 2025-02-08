import { CCol, CContainer, CRow } from "@coreui/react";
import delivery from '../assets/delivery-service.png';
import bg from '../assets/pattern-3-dark.jpg';
import CountUp from 'react-countup';

export const Sec5 = () => {
  const mockData = [
    {
        img: delivery,
        number: 900,
        title: "Projects Completed"
    },
    {
        img: delivery,
        number: 1100,
        title: "Projects Completed"
    },
    {
        img: delivery,
        number: 1200,
        title: "Projects Completed"
    },
    {
        img: delivery,
        number: 900,
        title: "Projects Completed"
    },
  ]
    return (
        <section className="py-[50px]" style={{background: `url(${bg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
             <CContainer>
                  <CRow>
                    {mockData.map((item)=> {
                        const {img, number, title} = item;
                        return (
                            <CCol lg={3} key={item.id} className="w-[50%] md:w-[25%] res-col">
                            <div className="flex flex-col res-count justify-center align-middle text-center text-white">
                                <div className="block m-auto bg-[var( --blue)] w-[100px]  h-[100px] text-center rounded-full border-[3px] border-[#302f2f]" style={{background: "var(--blue)"}}>
                                    <img src={img} alt="" className="w-[50px] h-[50px] object-contain block mt-[20px] mx-auto"/>
                                </div>
                                <CountUp end={number} start={0} duration={2.75} className="text-[24px] md:text-[48px]">
                                <h2 className="pt-[15px] font-medium text-[28px] md:text-[48px]" style={{fontFamily: "var(--oswald-font)",fontSize: "38px"}}>{number}</h2>
                                </CountUp>
                                <h4>{title}
                                </h4>
                            </div>
                         </CCol>
                        )
                    })}
                 </CRow> 
             </CContainer>
        </section>
    )
}