import Link from "next/link";

export function CardPlan({ title, iconUrl, topics }) {
  return (
    <div className="box-border-rounded min-h-md">
      <div className="card-casestudy">
        <div className="card-title-flex mb-30">
          <h6>{title}</h6>
          <div className="header-icon">
            <img src={iconUrl} alt="Performatti" className="icon-card" />
          </div>
        </div>
        <div className="topics-container">
          {topics.map(topic => (
            <div className="flex-center gap-2">
              <img src="/check-circle-icon.svg" alt="Performatti" />
              <p>{topic}</p>
            </div>
          ))}
        </div>

        <div className="separator mt-40 mb-20" />

        <div>
          <Link className="btn btn-card flex-center" href="#">Adquirir agora
            <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
              <path d="M22 10.9993L18.4791 7.47852V10.3064H0V11.6924H18.4791V14.5203L22 10.9993Z" fill="true" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}