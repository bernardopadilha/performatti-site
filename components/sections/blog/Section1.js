'use client'

import Link from "next/link"
import { useState } from "react"
import BlogCardNotice from "../../elements/BlogCardNotice"
import CtaBannerGreen from "@/components/cta/cta-banner-green"
import { blogNotices } from "@/util/blog-json"

export default function Section1() {
  const [typeBlogNotice, setTypeBlogNotice] = useState('Todos')

  const filteredBlogs = blogNotices.filter(blog =>
    typeBlogNotice !== 'Todos' ? typeBlogNotice === blog.category : blog
  );
  return (
    <section className="section-box">
      <div className="banner-hero hero-5">
        <div className="banner-blog-inner-top">
          <div className="container">
            <div className="box-banner-center">
              <Link className="btn btn-brand-5-light" href="#">
                Fique por dentro
              </Link>
              <h1 className="display-2 mb-30 mt-25 neutral-0">Blog Performatti</h1>
              <p className="text-lg neutral-500 mb-55">Explore nosso blog e recursos para obter insights valiosos, opiniões de especialistas e informações atualizadas sobre as últimas tendências do setor.</p>
            </div>

            <div className="box-banner-center-flex">
              <button
                onClick={() => setTypeBlogNotice('Todos')}
                className={`${typeBlogNotice === "Todos" && 'bg-active'} btn-banner-center`}>
                Todos
              </button>
              <button
                onClick={() => setTypeBlogNotice("IA")}
                className={`${typeBlogNotice === "IA" && 'bg-active'} btn-banner-center`}>
                IA's
              </button>
              <button
                onClick={() => setTypeBlogNotice('Tecnologia')}
                className={`${typeBlogNotice === "Tecnologia" && 'bg-active'} btn-banner-center`}>
                Tecnologia
              </button>
              <button
                onClick={() => setTypeBlogNotice('Performance')}
                className={`${typeBlogNotice === "Performance" && 'bg-active'} btn-banner-center`}>
                Performance
              </button>
            </div>
          </div>

        </div>
      </div>

      <div className="container">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <div className="items-center mt-80 top-relative-160">
              <BlogCardNotice
                key={blog.id}
                date={blog.date}
                type={blog.category}
                title={blog.title}
                imageUrl={blog.imgUrl}
                description={blog.description}
              />
            </div>
          ))
        ) : (
          <div className="container box-banner-center">
            <div className="container-no-notice text-center mt-40 mb-40">
              <img src="/undraw_no_data_re_kwbl.svg" alt="Performatti" className="undraw-image" />
              <h2 className="display-4-semibold">No momento, não temos notícias relacionadas a este assunto...</h2>
            </div>
          </div>
        )}
      </div>

      <div className="container mt-20 relative-top-100">
        <CtaBannerGreen key="Page Blog" title="Quer reduzir prazos e custos?" description="A Performatti é a melhor plataforma de monitoramento e performance para gerar eficiência e previsibilidade do seu time!" buttonTittle="Consulte os planos" />
      </div>
    </section>
  )
}