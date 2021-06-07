import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {ReactComponent as DashboardIcon} from '../../assets/img/NavigationIcons/Dashboard.svg';
import {ReactComponent as StaffIcon} from '../../assets/img/NavigationIcons/Stuff.svg';
import {ReactComponent as AllertsIcon} from '../../assets/img/NavigationIcons/Allerts.svg';
import {ReactComponent as SequenceIcon} from '../../assets/img/NavigationIcons/Sequence.svg';
import {ReactComponent as ArrowIcon} from '../../assets/img/NavigationIcons/Arrow.svg';

interface NavBarProps{
    role?: string,
    isAuth?: boolean
}

const width = window.screen.width;

export const NavBar = ({role, isAuth}: NavBarProps) => {
    const activeLinkClass      = 'navigation__link-a_active';
    const classOfLink          = 'navigation__link-a';
    const classOfIcon          = 'navigation__icon';
    const whenNavBarOpenedBody = 'opened-navbar'

    const whiteColor = '#fff';
    const accentColor = '#6AC7BE';

    const {pathname} = useLocation();

    const routes = {
        Dashboard: '/dashboard',
        Staff: '/stuff',
        Allerts: '/allerts',
        Sequence: '/sequence'
    };

    const returnColor = (expression: boolean) => expression ? whiteColor : accentColor;
    
    //trues colors

    const dashboardColor = returnColor(pathname === routes.Dashboard);
    const staffColor     = returnColor(pathname === routes.Staff);
    const allertsColor   = returnColor(pathname === routes.Allerts);
    const sequenceColor  = returnColor(pathname === routes.Sequence);

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
        'btn'
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
            route: routes.Dashboard,
            Icon: DashboardIcon,
            propsOfIcon: {
                stroke: dashboardColor
            }
        },
        {
            name: 'Stuff',
            route: routes.Staff,
            Icon: StaffIcon,
            propsOfIcon: {
                fill: staffColor
            }
        },
        {
            name: 'Allerts',
            route: routes.Allerts,
            Icon: AllertsIcon,
            propsOfIcon: {
                stroke: allertsColor,
                fill: allertsColor
            }
        },
        {
            name: 'Sequence',
            route: routes.Sequence,
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
                <li className="navigation__link" onClick={isMobileMenu}>
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
                <ArrowIcon className={'navigation__tablet-toggle-btn-icon'} />
            </div>
            <div className="btn navigation__toggle-btn-mobile" onClick={toggleMenuVisible}>

            </div>
            <ul  className="navigation__list-of-links">
                {renderLinks()}
            </ul>
        </nav>
    )
}
