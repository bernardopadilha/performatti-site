'use client'
import Link from 'next/link'

interface MobileMenuProps {
    isMobileMenu: boolean;
    handleMobileMenu: () => void;
    pathname: string;
  }

export default function MobileMenu({ isMobileMenu, handleMobileMenu, pathname }: MobileMenuProps) {
    return (
        <>
            <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${isMobileMenu ? "sidebar-visible" : ""}`}>
                <div className="mobile-header-wrapper-inner">
                    <div className={`burger-icon burger-icon-white ${isMobileMenu ? "burger-close" : ""}`} onClick={handleMobileMenu}>
                        <span className="burger-icon-top" />
                        <span className="burger-icon-mid" />
                        <span className="burger-icon-bottom" />
                    </div>
                    <div className="mobile-header-content-area column-between h-full">
                        <div className="mobile-menu-wrap mobile-header-border">
                            <nav>
                                <ul className="mobile-menu font-heading">
                                    <li>
                                        <Link className={`${pathname === '/' ? 'mobile-header-active' : ''}`} href="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link className={`${pathname === '/sobre' ? 'mobile-header-active' : ''}`} href="/sobre">Sobre</Link>
                                    </li>
                                    <li>
                                        <Link className={`${pathname === '/planos' ? 'mobile-header-active' : ''}`} href="/planos">Planos</Link>
                                    </li>
                                    <li>
                                        <Link className={`${pathname === '/blog' ? 'mobile-header-active' : ''}`} href="/blog">Blog</Link>
                                    </li>
                                    <li>
                                        <Link className={`${pathname === '/contato' ? 'mobile-header-active' : ''}`} href="/contato">Contato</Link>
                                    </li>
                                    <li>
                                        <Link href="https://app.performatti.com">Acessar o app</Link>
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
