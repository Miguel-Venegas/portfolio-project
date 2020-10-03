import React, {Component} from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import {Navbar, NavbarBrand} from 'reactstrap';
import Contact from './ContactComponent';
import Home from './HomeComponent';
import Projects from './ProjectsComponent';
import Resume from './ResumeComponent';
// import Display from './DisplayComponent';

class Main extends Component {

    render() {
        return(
            <nav>
                <Navbar  className="mainNav">
                    <NavbarBrand className='nav-link' href="/">Miguel's Portfolio</NavbarBrand>
                    <NavLink className='nav-link' activeClassName="active-link" exact to='/'>Home</NavLink>
                    <NavLink className='nav-link' activeClassName="active-link" exact to='/resume'>Resume</NavLink>
                    <NavLink className='nav-link' activeClassName="active-link" exact to='/projects'>Projects</NavLink>
                    <NavLink className='nav-link' activeClassName="active-link" exact to='/contact'>Contact</NavLink>
                </Navbar>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/resume" component={Resume}/>
                    <Route exact path="/projects" component={Projects}/>
                </Switch>
            </nav>
        );   
    } 
}

export default Main;