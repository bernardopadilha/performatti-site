import VideoPopup from "@/components/elements/VideoPopup";

export default function Section4() {
  return (
    <section className="section-box ">
      <div className="container items-center">
        <div className="box-image-rect">
          <img src="/video-image.png" alt="Performatti" />
          <VideoPopup />
        </div>
      </div>
    </section>
  )
}