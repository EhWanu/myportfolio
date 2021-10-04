import './Sidebar.scss'


export default function Sidebar({menuOpen, setMenuOpen}) {
    return (
        <div className={'sidebar ' + (menuOpen && 'active')}>
            <ul>
                <li>
                    <a href="#hero">Home</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>            
        </div>
    )
}
