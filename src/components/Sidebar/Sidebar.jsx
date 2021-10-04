import './Sidebar.scss'


export default function Sidebar() {
    return (
        <div className='sidebar' id='sidebar'>
            <ul>
                <li>
                    <a href="#hero">Home</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#servicex">Services</a>
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
