
'use client'
import { ReactNode, useEffect, useState } from "react"
import AddClassBody from '../elements/AddClassBody'
import BackToTop from '../elements/BackToTop'
import MobileMenu from './MobileMenu'
import Footer1 from './footer/Footer1'
import { usePathname } from "next/navigation"
import Header from "./header/Header"

interface LayoutProps {
    headerStyle?: number;
    footerStyle?: number;
    breadcrumbTitle?: string;
    children: ReactNode;
    topBar?: boolean;
}

export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children, topBar }: LayoutProps) {
    const pathname = usePathname()
    
    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setScroll(scrollTop > 100 ? scrollTop : 0)
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, []);
    
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu)
        !isMobileMenu ? document.body.classList.add("mobile-menu-active") : document.body.classList.remove("mobile-menu-active")
    }
    return (
        <>
            <AddClassBody />
            <div className="body-overlay-1" onClick={handleMobileMenu} />

            {headerStyle == 1 ? <Header scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} pathname={pathname} /> : null}
            <MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} pathname={pathname} />

            <main className="main">
                {children}
            </main>

            {!footerStyle && < Footer1 />}
            {footerStyle == 1 ? < Footer1 /> : null}

            <BackToTop />
        </>
    )
}
