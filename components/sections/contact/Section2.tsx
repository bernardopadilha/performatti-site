'use client';

import React from 'react';
import InputMask from 'react-input-mask';
import CtaBannerGreen from '@/components/cta/cta-banner-green';
import { SendEmailFormData, sendEmailFormSchema } from '@/utils/zod/send-message';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';


export default function Section2() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SendEmailFormData>({
    resolver: zodResolver(sendEmailFormSchema),
  });

  async function handleSendEmail(data: SendEmailFormData) {
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar o e-mail.');
      }

      const result = await response.json();

      reset()
    } catch (error) {
      console.error('Erro ao enviar o e-mail:', error);
    }
  }

  return (
    <section className="section-box">
      <div className="container flex-center-contact gap-40 mt-60">
        <div className="contact-container col-lg-7 mb-30-contact relative-top-170">
          <h2 className="mb-20">Fale com um especialista</h2>
          <div className="block-form-contact mt-25">
            <form id="contactForm" onSubmit={handleSubmit(handleSendEmail)}>
              <div className="form-group">
                <label htmlFor="name">Seu nome</label>
                <input
                  type="text"
                  disabled={isSubmitting}
                  placeholder="Nome"
                  {...register('name')}
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                />
                {errors.name && <p className="text-danger">{errors.name.message}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Seu e-mail corporativo</label>
                <input
                  type="text"
                  disabled={isSubmitting}
                  placeholder="email@empresa.com.br"
                  {...register('email')}
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                />
                {errors.email && <p className="text-danger">{errors.email.message}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="phone">DDD + Número de telefone</label>
                <InputMask
                  mask="(99) 9 9999-9999"
                  disabled={isSubmitting}
                  placeholder="(DDD) + 9 1234-5678"
                  {...register('phone', {
                    required: "O número de telefone é obrigatório",
                    pattern: {
                      value: /^\(\d{2}\) \d \d{4}-\d{4}$/,
                      message: "Formato inválido. Exemplo: (12) 9 1234-5678"
                    }
                  })}
                  className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                />
                {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="company">Empresa</label>
                <input
                  type="text"
                  disabled={isSubmitting}
                  placeholder="Nome da empresa"
                  {...register('company')}
                  className={`form-control ${errors.company ? 'is-invalid' : ''}`}
                />
                {errors.company && <p className="text-danger">{errors.company.message}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="fieldActivity">Ramo de atuação</label>
                <input
                  type="text"
                  disabled={isSubmitting}
                  placeholder="Ramo"
                  {...register('fieldActivity')}
                  className={`form-control ${errors.fieldActivity ? 'is-invalid' : ''}`}
                />
                {errors.fieldActivity && <p className="text-danger">{errors.fieldActivity.message}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="collaboratorsNumber">Número de funcionários</label>
                <input
                  type="number"
                  disabled={isSubmitting}
                  placeholder="0"
                  {...register('collaboratorsNumber')}
                  className={`form-control ${errors.collaboratorsNumber ? 'is-invalid' : ''}`}
                />
                {errors.collaboratorsNumber && <p className="text-danger">{errors.collaboratorsNumber.message}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea
                  disabled={isSubmitting}
                  rows={7}
                  placeholder="Mensagem"
                  {...register('message')}
                  className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                />
                {errors.message && <p className="text-danger">{errors.message.message}</p>}
              </div>
              <div className="form-group">
                <button
                  disabled={isSubmitting}
                  className="btn btn-black btn-rounded"
                  type="submit"
                >
                  {isSubmitting ? (
                    <div className="spinner"></div>
                  ) : (
                    <>
                      Enviar
                      <svg width={22} height={8} viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 3.99934L18.4791 0.478516V3.30642H0V4.69236H18.4791V7.52031L22 3.99934Z" fill="true" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="row gap-50 container mb-mobile-50">
          <div className="box-border-rounded">
            <div className="card-casestudy">
              <div className="card-title">
                <h6><span className="number">1</span>Preencha o formulário</h6>
              </div>
              <div className="card-desc">
                <p>Essa etapa é essencial para entendermos melhor o que você busca e como podemos ajudar a transformar seu negócio.</p>
              </div>
            </div>
          </div>
          <div className="box-border-rounded">
            <div className="card-casestudy">
              <div className="card-title">
                <h6><span className="number">2</span>Aguarde o retorno de um especialista</h6>
              </div>
              <div className="card-desc">
                <p>Após enviar o formulário, um de nossos especialistas entrará em contato com você. Eles vão analisar suas informações e oferecer uma consultoria personalizada para identificar o melhor plano e as soluções mais adequadas para sua empresa.</p>
              </div>
            </div>
          </div>
          <div className="box-border-rounded">
            <div className="card-casestudy">
              <div className="card-title">
                <h6><span className="number">3</span>Adquira seu plano</h6>
              </div>
              <div className="card-desc">
                <p>Com todas as informações em mãos, você estará pronto para escolher o plano que melhor se ajusta às suas necessidades. Nosso especialista guiará você na contratação e integração das soluções Performatti, garantindo que você comece a aproveitar ao máximo nossa plataforma rapidamente.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-green-card relative-top-100">
        <CtaBannerGreen
          key="Page Contact"
          title="Ainda está com dúvidas?"
          description="Nossa equipe está pronta para responder suas perguntas e garantir que você faça a escolha certa para maximizar a eficiência e o sucesso do seu negócio"
          buttonTittle="Assistir a demonstração"
        />
      </div>
    </section>
  );
}
