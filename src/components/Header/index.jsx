import './index.css'
import { useState } from 'react'
import {
    Menu,
    MenuList,
    MenuButton,
    MenuItem,
    MenuItems,
    MenuPopover,
    MenuLink,
} from "@reach/menu-button";
import "@reach/menu-button/styles.css";


function Header() {
    return (
        <nav className="nav-bar">
            <div className="logo">
                <a href="/">
                    <img
                        alt=""
                        className="logo"
                        height={32}
                        width={56}
                        src="https://storage.123fakturere.no/public/icons/diamond.png"
                    />
                </a>
            </div>
            <div className='hamburger'>
                <Menu>
                    <MenuButton>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="36" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>

                    </MenuButton>
                    <MenuList style={{width:300}}>
                        <MenuLink className='menu-link' as="a" href="https://123fakturere.no/index.html">
                            Home
                        </MenuLink>
                        <MenuLink className='menu-link' as="a" href="https://123fakturere.no/bestilloglastned.html">
                            Orders
                        </MenuLink>
                        <MenuLink className='menu-link' as="a" href="https://123fakturere.no/kunder.html">
                            Our Customers
                        </MenuLink>
                        <MenuLink className='menu-link' as="a" href="https://123fakturere.no/omoss.html">
                            About Us
                        </MenuLink>
                        <MenuLink className='menu-link' as="a" href="https://123fakturere.no/kontaktoss.html">
                            Contact Us
                        </MenuLink>
                    </MenuList>
                </Menu>
            </div>
            <div className='nav-other'>
                <div className="nav-item">
                    <a href="https://123fakturere.no/index.html">
                        <p>Home</p>
                    </a>
                </div>
                <div className="nav-item">
                    <a href="https://123fakturere.no/bestilloglastned.html">
                        <p>Order</p>
                    </a>
                </div>
                <div className="nav-item">
                    <a href="https://123fakturere.no/kunder.html">
                        <p>Our Customers</p>
                    </a>
                </div>
                <div className="nav-item">
                    <a href="https://123fakturere.no/omoss.html">
                        <p>About Us</p>
                    </a>
                </div>
                <div className="nav-item">
                    <a href="https://123fakturere.no/kontaktoss.html">
                        <p>Contact Us</p>
                    </a>
                </div>
                <div className="nav-item nav-item-lang" >
                    <a href="https://123fakturere.no/index.html">
                        <p>English</p>
                    </a>
                    <img
                        src="https://storage.123fakturere.no/public/flags/GB.png"
                        height={18}
                        width={26}
                    />
                </div>

            </div>
            <div className="nav-item flag-mobile" >
                <a href="https://123fakturere.no/index.html">
                    <p>English</p>
                </a>
                <img
                    src="https://storage.123fakturere.no/public/flags/GB.png"
                    height={18}
                    width={26}
                />
            </div>
        </nav>
    );
}

export default Header;