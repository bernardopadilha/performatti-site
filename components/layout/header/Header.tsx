import Link from 'next/link';
import { MouseEventHandler } from 'react';

interface HeaderProps {
    scroll: number;
    isMobileMenu: boolean;
    handleMobileMenu: MouseEventHandler<HTMLDivElement>;
    pathname: string;
}

export default function Header({ scroll, handleMobileMenu, pathname }: HeaderProps) {        
    return (
        <>
            <header className={`header sticky-bar ${scroll && "stick" }`}>
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo">
                                <Link className="d-flex" href="/">
                                    <img className='logo' alt="Performatti" src={`/performatti-logo.svg`} />
                                </Link>
                            </div>
                        </div>

                        <div className='right-header'>
                            <div className="header-nav">
                                <nav className="nav-main-menu d-none d-xl-block">
                                    <ul className="main-menu">
                                        <li className="has-children"><Link className={`${pathname === '/' ? 'active-link' : ''} active`} href="/">Home</Link></li>
                                        <li className="has-children"><Link className={`${pathname === '/sobre' ? 'active-link' : ''}`} href="/sobre">Sobre</Link></li>
                                        <li className="has-children"><Link className={`${pathname === '/planos' ? 'active-link' : ''}`} href="/planos">Planos</Link></li>
                                        <li className="has-children"><Link className={`${pathname === '/blog' ? 'active-link' : ''}`} href="/blog">Blog</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="header-right">
                                <Link className="btn btn-brand-4-medium" href="/contato">Contato
                                    <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 11.0003L18.4791 7.47949V10.3074H0V11.6933H18.4791V14.5213L22 11.0003Z" fill="true">
                                        </path>
                                    </svg>
                                </Link>
                                <Link className="btn btn-brand-4-medium ml-15" href="https://app.performatti.com">
                                    Acessar app
                                </Link>
                                <div className="burger-icon burger-icon-white" onClick={handleMobileMenu}>
                                    <span className="burger-icon-top" />
                                    <span className="burger-icon-mid" />
                                    <span className="burger-icon-bottom" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
