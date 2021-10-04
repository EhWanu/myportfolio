import './Navbar.scss'
import { Person, Mail } from '@material-ui/icons'


export default function Navbar() {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="left">
                    <a href="#hero" className="logo">Welcome.</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>17057732865</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>cameronjshadgett@gmail.com</span>
                    </div>
                </div>
                <div className="right">right side</div>
            </div>   
        </div>
    )
}
