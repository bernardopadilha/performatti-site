import Link from "next/link";

interface CardPlanProps {
  title: string
  iconUrl: string
  topics: string[]
}

export function CardPlan({ title, iconUrl, topics }: CardPlanProps) {
  return (
    <div className="box-border-rounded column-between-center min-h-md">
      <div className="card-casestudy">
        <div>
          <div className="card-title-flex mb-30">
            <h6 className="card-title-plan">{title}</h6>
            <div className="header-icon">
              <img src={iconUrl} alt="Performatti" className="icon-card" />
            </div>
          </div>
          <div className="topics-container">
            {topics.map(topic => (
              <div className="flex-center text-left gap-2">
                <img src="/check-circle-icon.svg" alt="Performatti" />
                <p>{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="separator mb-20 column-between-center" />
        <Link className="btn btn-card" href="#">Adquirir agora
          <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
            <path d="M22 10.9993L18.4791 7.47852V10.3064H0V11.6924H18.4791V14.5203L22 10.9993Z" fill="true" />
          </svg>
        </Link>
      </div>
    </div>
  )
}