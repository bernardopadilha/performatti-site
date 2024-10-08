interface BlogCardNoticeProps {
  type: string;
  date: string;
  title: string;
  description: string;
  imageUrl: string;
}

export default function BlogCardNotice({ type, date, title, description, imageUrl }: BlogCardNoticeProps) {
  return (
    <>

      <div className="col-lg-12 border-solid rounded-lg max-w-2xl bg-white">
        <img src={imageUrl} alt="Performatti" />
        <div className="items-start gap-10 padding-card-blog">
          <div className="flex-center gap-3">
            <span className="span-bg text-dark">{type}</span>
            <span className="flex-center gap-1 text-dark">
              <div className="point-green"></div>
              {date}
            </span>
          </div>

          <h2 className="mb-20 mt-20 heading-3">{title}</h2>

          <p className="mb-30 description-blog" dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
      </div>

    </>
  )
}