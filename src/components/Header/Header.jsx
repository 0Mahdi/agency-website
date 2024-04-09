import React, {useRef, useEffect} from 'react'

import './header.css'

const nav__links =[
    {
        path:'#home',
        display: 'Home'
    },
    {
        path:'#about',
        display: 'About'
    },
    {
        path:'#service',
        display: 'Service'
    },
    {
        path:'#projects',
        display: 'Projects'
    },
    {
        path:'#blog',
        display: 'Blog'
    },
]

const Header = ({theme, toggleTheme}) => {

    const headerRef = useRef(null)

    const headerFunc = () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            headerRef.current.classList.add('header__shrink')
        } else{
            headerRef.current.classList.remove('header__shrink')
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', headerFunc)

        return ()=> window.removeEventListener('scroll', headerFunc)
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
    
        const targetAttr = e.target.getAttribute("href");
    
        if (targetAttr && targetAttr.startsWith("#")) {
            const targetId = targetAttr.substring(1); // remove '#' from the ID
            const targetElement = document.getElementById(targetId);
    
            if (targetElement) {
                const location = targetElement.offsetTop;
    
                window.scrollTo({
                    left: 0,
                    top: location - 80,
                    behavior: 'smooth'
                });
            } else {
                console.error(`Element with ID '${targetId}' not found.`);
            }
        } else {
            console.error("Invalid target attribute or missing '#' in href.");
        }
    };
    

  return (
    <header className='header' ref={headerRef}>
        <div className='container'>
            <div className="nav__wrapper">
                <div className="logo">
                    <h2>ByteCraft</h2>
                </div>

                {/* =========== Navigation ============*/}
                <div className='navigation'>
                    <ul className='menu'>
                        {nav__links.map((item,index)=>(
                            <li className='menu__item' key={index}>
                                <a href={item.path} onClick={handleClick} className='menu__link'>
                                    {item.display}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* ========== Light Mode */}
                <div className='light__mode'>
                    <span onClick={toggleTheme}>
                        {theme === 'light-theme' ? (
                            <span>
                                <i className='ri-moon-line'></i>Dark
                            </span> 
                        ) : (
                            <span>
                                <i className='ri-sun-line'></i>Light
                            </span>
                        )}
                    </span>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header; 