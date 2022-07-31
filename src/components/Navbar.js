import { useEffect, useState } from 'react';


const Navbar = () => {

    const handleHamBurger = () => {
        const hamburger = document.querySelector('.hamburger')
        const navMenu = document.querySelector('.nav-menu')

        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');

        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }))
    }

    return (
        <header>
            <nav className="navbar" >
                <a href="" className="nav-branding">React Planner</a>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <a href="#" className="nav-link">Task List</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Completed Task</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Archived Tasks</a>
                    </li>
                </ul>
                <div className="hamburger" onClick={handleHamBurger}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </header>
    );
}
export default Navbar;