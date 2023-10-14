import { ReactNode } from 'react';

interface ReachMeOutProps {
    socialMedia: {
        name: string;
        note: string;
        github: string;
        email: string;
        facebook: string;
        instagram: string;
        linkedin: string;
    };
}
declare function ReachMeOut({ socialMedia }: ReachMeOutProps): JSX.Element;

interface NavbarItemProps {
    children: ReactNode;
    isActive?: boolean;
    href?: string;
    wip?: boolean;
}
declare function NavbarItem({ children, href, wip, }: NavbarItemProps): JSX.Element;

interface NavbarProps {
    children?: ReactNode;
}
declare function Navbar({ children }: NavbarProps): JSX.Element;

export { Navbar, NavbarItem, NavbarItemProps, NavbarProps, ReachMeOut, ReachMeOutProps };
