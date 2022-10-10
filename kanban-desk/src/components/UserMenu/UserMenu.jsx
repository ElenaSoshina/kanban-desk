import React from 'react';
import css from './UserMenu.module.css';
import userAvatar from './user-avatar.svg';
import arrow from './arrow.svg';
import { useState } from 'react'
import classnames from 'classnames'

const DropdownUserMenu = () => {
    return (
        <div>
            <div className={css.square}></div>
            <nav className={css.dropdownUserMenu}>
                <a href="#">Profile</a>
                <a href="#">Log Out</a>
            </nav>
        </div>
    )
}

const UserMenu = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <div className={css.userMenu}>
            <div className={css.userControl} onClick={() => setToggle(!toggle)}>
                <img className={css.userAvatar} src={userAvatar} alt="Avatar"/>
                <img  className={classnames(css.arrow, {[css.arrowUp] : toggle})} src={arrow} alt="arrow"/>
            </div>
            {toggle && <DropdownUserMenu />}
        </div>
    )
}

export default UserMenu