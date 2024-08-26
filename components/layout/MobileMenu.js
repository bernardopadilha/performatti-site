'use client'
import Link from 'next/link'
import { useState } from "react"

export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${isMobileMenu ? "sidebar-visible" : ""}`}>
                <div className="mobile-header-wrapper-inner">
                    <div className={`burger-icon burger-icon-white ${isMobileMenu ? "burger-close" : ""}`} onClick={handleMobileMenu}>
                        <span className="burger-icon-top" />
                        <span className="burger-icon-mid" />
                        <span className="burger-icon-bottom" />
                    </div>
                    {/* <div className="mobile-header-top">
                        <div className="user-account">
                            <img src="/performatti-logo.svg" alt="Performatti" />
                        </div>
                    </div> */}
                    <div className="mobile-header-content-area column-between h-full">
                        <div className="mobile-menu-wrap mobile-header-border">
                            <nav>
                                <ul className="mobile-menu font-heading">
                                    <li>
                                        <Link className="active" onClick={handleToggle} href="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="/sobre">Sobre</Link>
                                    </li>
                                    <li>
                                        <Link href="/planos">Planos</Link>
                                    </li>
                                    <li>
                                        <Link href="/blog">Blogs</Link>
                                    </li>
                                    <li>
                                        <Link href="/contato">Contato</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="mobile-social-icon">
                            <h6 className="mb-25">Redes Sociais</h6>
                            <Link className="icon-socials icon-facebook" href="#">
                                <img alt="Performatti" src="/assets/imgs/template/icons/fb.svg" />
                            </Link>
                            <Link className="icon-socials icon-instagram mb-10" href="#">
                                <img alt="Performatti" src="/assets/imgs/template/icons/in.svg" />
                            </Link>

                            <div className="site-copyright">Copyright © 2024 Performatti. Todos os direitos reservados.</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
