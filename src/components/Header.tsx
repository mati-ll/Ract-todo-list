import { Link, useLocation } from 'react-router-dom';
import { PathConstants } from '../routes/pathConstants';

const navLinks = [
    { title: 'ReactRoutesTest', path: PathConstants.ABOUT },
    { title: 'ErrorTest', path: PathConstants.ERROR },
];

export default function Header() {
    const location = useLocation();
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-light-subtle" data-bs-theme="dark" >
                <div className="container-fluid">
                    <Link className="navbar-brand" to={PathConstants.HOME}>First Steps React</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {navLinks.map((link) => (
                                <li className="nav-item" key={link.path}>
                                    <Link className={`nav-link ${location.pathname === '/' + link.path ? "active" : ""}`} to={link.path}>{link.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>


                </div>
            </nav>
        </header >

    );

}