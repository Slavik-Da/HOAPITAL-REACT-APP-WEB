import { access } from 'fs';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {ReactComponent as DashboardIcon} from '../../assets/img/NavigationIcons/Dashboard.svg';
import {ReactComponent as StaffIcon} from '../../assets/img/NavigationIcons/Stuff.svg';
import {ReactComponent as AllertsIcon} from '../../assets/img/NavigationIcons/Allerts.svg';
import {ReactComponent as SequenceIcon} from '../../assets/img/NavigationIcons/Sequence.svg';

interface NavBarProps{
    role?: string,
    isAuth?: boolean
}

export const NavBar = ({role, isAuth}: NavBarProps) => {
    const activeLinkClass = 'navigation__link-a_active';
    const classOfLink     = 'navigation__link-a';
    const classOfIcon     = 'navigation__icon';

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

    

    return (
        <nav className="navigation">
            <div className="navigation__logo">
                Logo
            </div>
            <ul className="navigation__list-of-links">
                <li className="navigation__link">
                    <NavLink className={classOfLink} to={'/dashboard'} activeClassName={activeLinkClass}>
                        <DashboardIcon className={classOfIcon} stroke={dashboardColor} />
                        Dashboard
                    </NavLink>
                </li>
                <li className="navigation__link">
                    <NavLink className={classOfLink} to={'/stuff'} activeClassName={activeLinkClass}>
                        <StaffIcon className={classOfIcon} fill={staffColor} />
                        Stuff
                    </NavLink>
                </li>
                <li className="navigation__link">
                    <NavLink className={classOfLink} to={'/allerts'} activeClassName={activeLinkClass}>
                        <AllertsIcon className={classOfIcon} stroke={allertsColor} fill={allertsColor} /> 
                        Allerts
                    </NavLink>
                </li>
                <li className="navigation__link">
                    <NavLink className={classOfLink} to={'/sequence'} activeClassName={activeLinkClass}>
                        <SequenceIcon className={classOfIcon} fill={sequenceColor} />
                        Sequence
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
