import React from 'react'
import {MenuItems} from "./MenuItems"
import './Navbar.css'
import logo from './react.png'


class Navbar extends React.Component {
    state = { clicked: false}

    handleClick = () => {
        this.setState({clicked:!this.state.clicked})
    }

    render () {
        return(
            <nav className ="NavbarItems">
                <h1 className="Navbar-logo">   
                        <img className="Navbar-logo" src={logo} alt="navbar-logo"/>
                </h1>
                
                <ul className="MenuItems">
                    {MenuItems.map((item,index) =>{
                        return(
                            <li key ={index}>
                                <a className ={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    } )}
                    
                </ul>
                <div className =" menu-icon" onClick ={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></i>

                    </div>
               
            </nav>
        
        )
    }
}

export default Navbar