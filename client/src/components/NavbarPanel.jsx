import {useState} from 'react';
import {  GiHamburgerMenu} from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";


const styles = {
    link: "hover:bg-white hover:text-slate-900 px-2 py-1 rounded-md transition-colors duration-700 m-2"
        
    }
export default function NavbarPanel() {
    const [isMenuOpen, setisMenuOpen] = useState(false);
    const toggleMenu = () => {
        setisMenuOpen(!isMenuOpen);

    }
    
  return (
    <div className='bg-[url(assets/images/img1.jpg)] bg-cover bg-center h-screen text-white'>
        <header className='bg-[#FFFFFF30]'>
            <nav className='flex items-center justify-between px-12 h-16'>
                <a href='https://hnurm.com/' className='text-2xl font-bold border-2 px-2 py-1 '>HNURM</a>
                {/* Navbar For Large screen*/}
                <div className=''> 
                    <ul className='md:flex space-x-6 hidden'>
                        <li className={styles.link}>Home</li>
                        <li className={styles.link}>Tailwind</li>
                        <li className={styles.link}>Videos</li>
                        <li className={styles.link}>Blogs</li>
                        <li className={styles.link}>Courses</li>
                    </ul>
                </div>
                <div className='cursor-pointer md:hidden'>
                    {
                        isMenuOpen ? (<RiCloseLargeFill size={20} onClick={toggleMenu}/>) : 
                         (<GiHamburgerMenu size={20} onClick={toggleMenu}/>)

                    }
                </div>
            </nav>
                   {isMenuOpen && ( <ul className='flex space-y-6 flex-col mt-4 text-center md:hidden'>
                       <li><a href="#" className={`${styles.link} block`}>HOme</a></li>
                      <li> <a href="#" className={`${styles.link} block`}>Tailwind</a></li>
                      <li> <a href="#" className={`${styles.link} block`}><li>Videos</li></a></li>
                      <li> <a href="#" className={`${styles.link} block`}><li>Blocks</li></a></li>
                      <li> <a href="#" className={`${styles.link} block`}><li>Courses</li></a></li>
                    </ul>)}
        </header>

    </div>
  )
}
