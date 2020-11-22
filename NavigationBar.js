import React, { useState } from 'react';
import { Link }from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'
import '../myComponents/myPages/Navigationbar.css';

function NavigationBar() {
    const [click, setClick]  = useState(false);
    const handleClick = () => setClick(!click)

    const closeMobMenu = () => setClick(false)

    return (
        <>
            <nav className="navigationbar">

                <div className="navigationbar-container container">

                    <Link to='/' className="navigationbar-logo" onClick={closeMobMenu}>
                      
                        MUHMEN PARVAZE
                    </Link>   

                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars  /> }
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu' }>

                        <li className="nav-item">
                            <Link to='/' className="nav-links"  onClick={closeMobMenu}>
                                Hjem
                            </Link>
                        </li>


                        <li className="nav-item">
                            <Link 
                                to='/profil' 
                                className="nav-links"
                                onClick={closeMobMenu}
                                >
                                Profil
                            </Link>
                        </li>


                        <li className="nav-item">
                            <Link 
                                to='/uddannelse' 
                                className="nav-links"
                                onClick={closeMobMenu}>
                               Uddannelse
                            </Link>
                        </li>


                        <li className="nav-item">
                            <Link 
                                to='/erfaring' 
                                className="nav-links"
                                onClick={closeMobMenu}>
                               Erfaring
                            </Link>
                        </li>


                        <li className="nav-item">
                            <Link 
                                to='/kompetancer' 
                                className="nav-links"
                                onClick={closeMobMenu}>
                               Kompetancer
                            </Link>
                        </li>


                    </ul>

                </div>

            </nav>
            <hr></hr>
        </>
    )
}

export default NavigationBar
