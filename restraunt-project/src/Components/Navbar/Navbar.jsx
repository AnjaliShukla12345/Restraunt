import Profile from '../../images/woman.png'
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="py-4">
        <div className="container flex justify-between items-center">
            {/* logo section */}
        <div>
            <h1 className="text-4xl font-bold">Food <span className="text-red-600">Eat</span></h1>
        </div>
{/* Menu section */}

<div className='flex justify-center items-center gap-10'>
    <ul className="gap-8 hidden sm:flex">
        <li className="hover:border-b-2 border-primary uppercase font-semibold">Home</li>
        <li className="hover:border-b-2 border-primary uppercase font-semibold">Menu</li>
        <li className="hover:border-b-2 border-primary uppercase font-semibold">About</li>
    </ul>
</div>

{/* login section */}

<div className='flex gap-4 items-center'>
    <img src={Profile} alt="" className='w-12 rounded-full'/>
    <IoIosArrowDown/>
</div>

        </div>
      
    </div>
  )
}

export default Navbar
