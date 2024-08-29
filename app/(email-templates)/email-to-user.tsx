import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface VercelInviteUserEmailProps {
  userFirstName?: string;
}

export const EmailToUser = ({
  userFirstName,
}: VercelInviteUserEmailProps) => {
  const previewText = `Olá ${userFirstName} seja bem-vindo a Performatti`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#504b4b] bg-[#191919] rounded max-w-[465px]">
            <Section className="py-[32px] px-5">
              <img
                src="https://i.imgur.com/eQfHXL7.png"
                width="120"
                height="27"
                alt="Performatti"
                className="my-0 mx-auto"
              />
              <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            </Section>
            <Section className="my-[40px] mx-auto p-[20px]">
              <Heading className="text-white text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                Seja bem vindo à <span className="text-[#C0F205] font-bold">Performatti</span>
              </Heading>
              <Text className="text-white text-[18px] leading-[24px]">
                Olá <span className="text-[#C0F205] font-semibold">{userFirstName}</span>,
              </Text>
              <Text className="text-white text-[16px] leading-[24px]">
                Obrigado por entrar em contato com a <span className="text-[#C0F205] font-semibold">Performatti</span>! Recebemos sua mensagem e nossa equipe está analisando cuidadosamente suas informações. <span className="text-[#C0F205] font-semibold">Em breve, você receberá um retorno</span> com todas as respostas e detalhes que precisa.

                Enquanto isso, gostaríamos de destacar o nosso compromisso em oferecer soluções personalizadas que realmente fazem a diferença. <span className="text-[#C0F205] font-semibold">Estamos aqui para transformar suas ideias em realidade!</span> {" "}

                Se tiver alguma dúvida adicional, sinta-se à vontade para responder a este email ou nos chamar pelo telefone [Número de Contato da Empresa].

                Fique de olho em sua caixa de entrada, pois entraremos em contato em breve.

                Até logo!
              </Text>
              <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            </Section>
          </Container>
          <Section className="w-full flex justify-center mt-5">
            <Text className="text-[#191919] text-[16px] leading-[24px]">
              Copyright © 2024 Performatti. Todos os direitos reservados. | <span className="text-[#C0F205] font-semibold">www.performatti.com</span>
            </Text>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailToUser;
