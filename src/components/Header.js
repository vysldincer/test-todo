import React from "react";

const Header = (props) => {
    return (
        <header className='header'>
            <span>{props.title}</span>
        </header>
    )
}

export default Header;