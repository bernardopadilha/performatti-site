import Link from "next/link";

export default function CtaBannerGreen({ title, description, buttonTittle }) {
  return (
    <div className="box-cta-green">
      <div className="newsletter-center">
        <h2>{title}</h2>
        <p className="text-md neutral-600">{description}</p>
        <button className="btn btn-subscribe mt-25" type="submit">{buttonTittle}
          <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 10.9993L18.4791 7.47852V10.3064H0V11.6924H18.4791V14.5203L22 10.9993Z" fill="true" />
          </svg>
        </button>
      </div>
    </div>
  )
}