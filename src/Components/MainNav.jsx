import React from 'react';
import { HiChevronDown, HiHome, HiDesktopComputer, HiMail, HiFolderRemove} from 'react-icons/hi';
import { Link } from 'react-scroll';

const MainNav = () => {

    const styles = {
        navMenu: 'fixed right-0 bg-[#506995]',
        navMenuClosed: 'mx-6 my-8 text-white bg-[#506995]',
        navMenuBtn: 'mx-6 mt-8 text-white ',
        btnContainer: 'h-screen bg-[#506995] fixed flex flex-col justify-center inset-y-0 right-0 z-99',
        navBtn: 'mx-6 my-12 text-white hover:scale-110 hover:text-[#F97316]',
    }

    return (
    <div id='home'> 

        <nav className={styles.navMenu}>  

            <div className={styles.btnContainer}>
                <Link to='/'><HiHome size={40} className={styles.navBtn}/></Link>
                <a href='#projects'><HiFolderRemove size={40} className={styles.navBtn}/></a>
                <a href='#skills'><HiDesktopComputer size={40}className={styles.navBtn}/></a>
                <a href='#contact'><HiMail size={40} className={styles.navBtn}/></a>
            </div>

        </nav>

    </div>
  )
}

export default MainNav;
