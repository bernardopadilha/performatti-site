'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function AddClassBody() {
    const pathname = usePathname()

    useEffect(() => {
        const body = document.querySelector('body')
        if (body) {
            if (pathname === "/index-3") {
                body.classList.add('homepage3-bg')
            } else {
                body.classList.remove('homepage3-bg')
            }
        }
    }, [pathname]) // Adiciona `pathname` como dependência para que o efeito seja executado quando `pathname` mudar

    return null // Não há renderização para este componente
}
