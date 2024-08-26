
'use client'
import { useEffect, useState } from "react"
import AddClassBody from '../elements/AddClassBody'
import BackToTop from '../elements/BackToTop'
import MobileMenu from './MobileMenu'
import Footer1 from './footer/Footer1'
import Header1 from "./header/Header1"
import { usePathname } from "next/navigation"

export default function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children, topBar, headerCls, logoWhite }) {
    const pathname = usePathname()
    
    const [scroll, setScroll] = useState(0)
    // Moblile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu)
        !isMobileMenu ? document.body.classList.add("mobile-menu-active") : document.body.classList.remove("mobile-menu-active")
    }

    useEffect(() => {
        const WOW = require('wowjs')
        window.wow = new WOW.WOW({
            live: false
        })
        window.wow.init()

        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    }, [])
    return (
        <>
            <AddClassBody />
            <div className="body-overlay-1" onClick={handleMobileMenu} />

            {!headerStyle && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} topBar={topBar} pathname={pathname} />}
            {headerStyle == 1 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} topBar={topBar} pathname={pathname} /> : null}
            <MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />

            <main className="main">
                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

                {children}
            </main>

            {!footerStyle && < Footer1 />}
            {footerStyle == 1 ? < Footer1 /> : null}

            <BackToTop />
        </>
    )
}
