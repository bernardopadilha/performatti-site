'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import "../../node_modules/react-modal-video/css/modal-video.css"

export default function VideoPopup() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <a onClick={() => setOpen(true)} className="btn btn-play popup-youtube text-lg">
                <div className="video-play-button"><span /></div>
            </a >
            <ModalVideo channel='youtube' isOpen={isOpen} videoId="SZEflIVnhH8" onClose={() => setOpen(false)} />
        </>
    )
}