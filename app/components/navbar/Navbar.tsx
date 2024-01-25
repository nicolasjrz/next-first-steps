import Link from "next/link"
import { ActiveLink } from "../active-link/ActiveLink"



const navItem = [
    {path:"/about",title:"about"},{path:"/pricing",title:"pricing"},{path:"/contact",title:"contact"}
]


export const Navbar = () => {
  return (
    <nav className="flex bg-blue-500 bg-opacity-30 p-2 m-2 rounded">
        <Link href={"/"}>
        <span>home</span>
        </Link>

    <div className=" flex flex-1"></div>
    {navItem.map((item,index) =>(
        <ActiveLink  key={index} {...item}/>
    ))}


    </nav>
  )
}
