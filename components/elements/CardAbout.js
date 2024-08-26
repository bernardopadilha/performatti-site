export function CardAbout({ title, description, imageUrl }) {
  return (
    <div className="box-border-rounded-col max-w-card">
      <div className="padding-card mb-20">
        <div className="title-card">
          <h6>{title}</h6>
        </div>
        <div className="description-card">
          <p>{description}</p>
        </div>
      </div>
      
      <div>
        <img src={imageUrl} alt="Performatti" />
      </div>
    </div>
  )
}