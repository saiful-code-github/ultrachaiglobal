import { CCol, CRow } from "@coreui/react";
import icon1 from '../assets/targeting.png';
import icon2 from '../assets/vision.png';

export const Sec4 = () => {
    const mockData = [
        {
            img:icon1,
            heading: "Committed to on-time delivery."
        },
        {
            img:icon2,
            heading: "Committed to on-time delivery."
        },
        {
            img:icon2,
            heading: "Committed to on-time delivery."
        },
        {
            img:icon1,
            heading: "Committed to on-time delivery."
        },
    ]
    return (
        <section className="mt-[70px] bg-[var(--black)]" id="servicesSection">
             <div className="flex md:flex flex-col md:flex-row mdjustify-between">
                <div className="w-full md:w-[50%]">
                <video muted autoPlay loop className="w-full h-[100%] object-cover">
              <source src="/src/assets/video.mp4" type="video/mp4" />
              </video>
                </div>
              <div className="bg-black px-[15px] md:px-[40px] py-[15px] md:py-[40px] text-white w-full md:w-[50%]">
                <img src="/src/assets/sub-before.png" alt="" />
                 <h3 style={{fontSize: "20px", fontFamily: "var(--oswald-font)"}} className="text-[20px] md:text-2xl capitalize mt-0 mb-[5px] font-medium pt-2">Why Choose Us
                 </h3>
                 <h2>Your Global Trade Partner of Choice
                 </h2>
                 <p className="pb-3"> Develop energy storage systems such as batteries and other technologies that can store excess renewable energy for use later. <br/><br/> We strongly support best practice sharing across our operations around the world and industrial sectors.</p>
                  <CRow>
                    {mockData.map((item)=> {
                        const {img, heading} = item;
                        return (
                            <CCol lg={6} sm={6} key={item.id} className="mb-4 res-col w-[50%] md:w-[50%]">
                            <div className="flex">
                               <div className="shrink">
                                   <img src={img} alt="" className="w-[55px] h-[55px] mr-6 object-contain"/>
                               </div>
                               <div className="grow">
                                    <h4 className="text-[20px] md:text-[24px]" style={{fontSize: "20px", fontFamily: "var(--oswald-font)"}}>{heading}
                                    </h4>
                               </div>
                            </div>
                        </CCol>
                        )
                    })}
                  </CRow>
              </div>
             </div>
        </section>
    )
}