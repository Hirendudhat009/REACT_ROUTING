import { NavLink } from 'react-router-dom'
import classes from './MainHeader.module.css'


const MainHeader = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/welcome" activeClassName={classes.active}>Welcome</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" activeClassName={classes.active}> Product</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader;