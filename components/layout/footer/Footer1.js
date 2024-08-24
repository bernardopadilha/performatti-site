import Link from 'next/link'

export default function Footer1() {
    return (
        <>
            <footer className="footer footer-style-3 footer-style-5">
                <div className="container">
                    <div className="justify-between">
                        <div className="mb-30">
                            <Link href="/">
                                <img alt="Performatti" src="/performatti-logo.svg" />
                            </Link>
                            <div className="mt-20 mb-20">
                                <p className="text-md neutral-600 ">Pessoas que realizam.</p>
                                <p className="text-md neutral-600">Tecnologia que transforma.</p>
                            </div>
                        </div>
                        <div className="flex-start gap-40">
                            <div>
                                <h5 className="neutral-0 mb-10 text-18-semibold neutral-0">Navegue</h5>
                                <ul className="menu-footer">
                                    <li><Link href="/home">Home</Link></li>
                                    <li><Link href="/sobre">Sobre</Link></li>
                                    <li><Link href="/">Planos</Link></li>
                                    <li><Link href="/Blog">Blog</Link></li>
                                    <li><Link href="/Contato">Contato</Link></li>
                                </ul>
                            </div>

                            <div className="text-center text-md-start">
                                <div className="text-start d-inline-block">
                                    <p className="text-lg  neutral-0">Follow us</p>
                                    <div className="box-socials-footer">
                                        <Link className="icon-socials icon-facebook" href="#">
                                            <img alt="Nivia" src="/assets/imgs/template/icons/fb.svg" /></Link>
                                        <Link className="icon-socials icon-instagram" href="#">
                                            <img alt="Nivia" src="/assets/imgs/template/icons/in.svg" /></Link>

                                    </div>
                                    <p />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="footer-bottom mt-0">
                        <div className="row align-items-end">
                            <div className="col-lg-6 mb-20">
                                <h5 className="text-18-semibold neutral-0">Receba uma demonstração</h5>
                                <div className="form-newsletter form-newsletter-2">
                                    <form>
                                        <input className="form-control" type="text" placeholder="email" />
                                        <button className="btn btn-brand-4-medium">Enviar
                                            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22 11.0003L18.4791 7.47949V10.3074H0V11.6933H18.4791V14.5213L22 11.0003Z" fill="true" />
                                            </svg>
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6 text-lg-end text-center">
                                <div className="row align-items-end">
                                    <div className="mb-20">
                                        <p className="text-sm neutral-600">Copyright © 2024 Performatti. Todos os direitos reservados.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    )
}