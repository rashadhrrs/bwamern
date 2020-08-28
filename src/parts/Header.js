import React from 'react'
import Fade from 'react-reveal/Fade';

import Button from 'elements/Button'
import BrandIcon from 'parts/IconText'

export default function Header(props) {

    const getNavLinkClass = path => {
        return props.location.pathname === path ? " active" : "";
    }

    return (
        <Fade>
        <header>
            <div className="container">
            <i className="fa fa-lg fa-search"></i>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <BrandIcon/>
                <div className="collapse navbar-collapse">
                    
                    <i className="fa fa-search"></i>
                    
                    <ul className="navbar-nav ml-auto">
                    <i className="fa fa-lg fa-search"></i>
                        <li className={`nav-item${getNavLinkClass("/")}`}>
                        <i className="fa fa-lg fa-search"></i>
                            <Button className="nav-link" type="link" href="/">
                                Homes
                            </Button>
                        </li>
                        <li className={`nav-item${getNavLinkClass("/browse-by")}`}>
                            <Button className="nav-link" type="link" href="/browse-by">
                                Browse By
                            </Button>
                        </li>
                        <li className={`nav-item${getNavLinkClass("/stories")}`}>
                            <Button className="nav-link" type="link" href="/stories">
                                Stories
                            </Button>
                        </li>
                        <li className={`nav-item${getNavLinkClass("/agents")}`}>
                            <Button className="nav-link" type="link" href="/agents">
                                Agents
                            </Button>
                        </li>
                    </ul>
                </div>
                </nav>
            </div>
        </header>
        </Fade>
    )
}
