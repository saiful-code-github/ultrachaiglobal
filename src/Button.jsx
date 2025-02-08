import { Link } from "react-router-dom"

export const ButtonGroup = ({className, name, style,to}) =>{
    return (
        <>
           <button className={`${className} text-[18px] capitalize bg-[var(--bg-color)] font-medium py-2 px-5 rounded-[25px]`} style={{...style, fontFamily: "var(--oswald-font)", borderRadius: "25px"}}><Link to={to} style={{...style, textDecoration: "none"}}> {name} </Link> </button>  
        </>
    )
}