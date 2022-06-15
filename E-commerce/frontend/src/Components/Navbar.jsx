import {Link} from "react-router-dom"
export const Navbar = ()=>{

    return (
        <div style={{border:"2px solid red",display:"flex", justifyContent:"space-around"}}>
            <Link to="/"><h2>HOME</h2></Link>
            <Link to="/user"><h2>USERS</h2></Link>
            
        </div>
    )
}