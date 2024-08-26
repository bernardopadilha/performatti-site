import Link from "next/link";

export default function CtaBannerDark({ title, description, buttonTittle }) {
  return (
      <>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-40">
              <h2 className="display-5 text-white mb-20">{title}</h2>
              <p className="text-lg text-white">{description}</p>
              <div className="box-buttons-feature-4"><Link className="btn radius-none" href="#">{buttonTittle}
                <svg width={22} height={8} viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 3.99934L18.4791 0.478516V3.30642H0V4.69236H18.4791V7.52031L22 3.99934Z" fill="true" />
                </svg></Link>
              </div>
            </div>
            <div className="col-lg-7 text-center mt-mobile-50 mb-40">
              <img src="/performatti-dashboard-dark.png" alt="Performatti" />
            </div>
          </div>
        </div>
      </>
  )
}