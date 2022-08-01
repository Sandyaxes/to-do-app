import { Link } from "react-router-dom";

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
                <Link to="/" className="nav-branding">React Planner</Link>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Task List</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/CompletedTasks" className="nav-link">Completed Task</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/ArchivedTasks" className="nav-link">Archived Tasks</Link>
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