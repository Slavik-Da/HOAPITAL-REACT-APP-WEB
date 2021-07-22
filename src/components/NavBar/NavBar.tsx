import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {ReactComponent as DashboardIcon} from './img/Dashboard.svg';
import {ReactComponent as StaffIcon} from './img/Stuff.svg';
import {ReactComponent as AllertsIcon} from './img/Allerts.svg';
import {ReactComponent as SequenceIcon} from './img/Sequence.svg';
import {ReactComponent as ArrowIcon} from './img/Arrow.svg';
import { generateKey } from '../../utilits';
import {AppPages} from '../../routes/index';

const width = window.screen.width;

export const NavBar = () => {
    const activeLinkClass      = 'navigation__link-a_active';
    const classOfLink          = 'navigation__link-a';
    const classOfIcon          = 'navigation__icon';
    const whenNavBarOpenedBody = 'opened-navbar'

    const whiteColor = '#fff';
    const accentColor = '#6AC7BE';

    const {pathname} = useLocation();


    const returnColor = (expression: boolean) => expression ? whiteColor : accentColor;
    
    //trues colors

    const dashboardColor = returnColor(pathname === AppPages['/dashboard'].route);
    const staffColor     = returnColor(pathname === AppPages['/stuff'].route);
    const allertsColor   = returnColor(pathname === AppPages['/allerts'].route);
    const sequenceColor  = returnColor(pathname === AppPages['/sequence'].route);

    const [navigationVisable, setVisible] = useState(false);

    const navigationClasses = [
        'navigation',
        !navigationVisable ? 'navigation_tablet-hidden' : '',
        'navigation_mobile-bar',
        navigationVisable ? 'navigation_mobile-opened' : '',
    ];

    const toggleBtnTabletClasses = [
        'navigation__tablet-toggle-btn',
        navigationVisable ? 'navigation__tablet-toggle-btn_active': '',
    ];

    const toggleMenuVisible = () => {
        setVisible(prev => !prev);
        const body = document.querySelector('body');


        if(body){
            body.classList.toggle(whenNavBarOpenedBody)
        }
    };

    const menuLinks = [
        {
            name: 'Dashboard',
            route: AppPages['/dashboard'].route,
            Icon: DashboardIcon,
            propsOfIcon: {
                stroke: dashboardColor
            }
        },
        {
            name: 'Stuff',
            route: AppPages['/stuff'].route,
            Icon: StaffIcon,
            propsOfIcon: {
                fill: staffColor
            }
        },
        {
            name: 'Allerts',
            route: AppPages['/allerts'].route,
            Icon: AllertsIcon,
            propsOfIcon: {
                stroke: allertsColor,
                fill: allertsColor
            }
        },
        {
            name: 'Sequence',
            route: AppPages['/sequence'].route,
            Icon: SequenceIcon,
            propsOfIcon: {
                fill: sequenceColor
            }
        },
    ];


    const renderLinks = () => {
        const isMobileMenu = width <= 576 ? toggleMenuVisible : () => {};

        return menuLinks.map(({name, route, Icon, propsOfIcon}) => {
            return (
                <li className="navigation__link" key={generateKey(route)} onClick={isMobileMenu}>
                    <NavLink className={classOfLink} to={route} activeClassName={activeLinkClass}>
                        <Icon className={classOfIcon} {...propsOfIcon} />
                        {name}
                    </NavLink>
                </li>
            )
        });
    };


    return (
        <nav  className={navigationClasses.join(' ')}>
            <div className="navigation__logo">
                Logo
            </div>
            <div className={toggleBtnTabletClasses.join(' ')} onClick={toggleMenuVisible} >
                <ArrowIcon  className={'navigation__tablet-toggle-btn-icon'} />
            </div>
            <div className="btn navigation__toggle-btn-mobile" onClick={toggleMenuVisible}>

            </div>
            <ul  className="navigation__list-of-links">
                {renderLinks()}
            </ul>
        </nav>
    )
}
