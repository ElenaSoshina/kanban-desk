import React from 'react';
import css from './Header.module.css'
import UserMenu from "../UserMenu/UserMenu";


const Header = () => {
    return (
            <header className={css.header}>
                <div className={css.title}>Awesome Kanban Board</div>
                <UserMenu />
            </header>
    )
}

export default Header