import {
  Body,
  Container,
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

interface PerformattiProps {
  name: string
  phone: string
  company: string
  message: string
  userFirstName: string
  fieldActivity: string
  corporativeEmail: string
  collaboratorsNumber: number
}

export const EmailToPerformatti = ({
  name,
  phone,
  company,
  message,
  userFirstName,
  fieldActivity,
  corporativeEmail,
  collaboratorsNumber,
}: PerformattiProps) => {
  const previewText = `Nova mensagem de ${name}, ${corporativeEmail}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded max-w-[465px]">
            <Section className="flex items-center justify-start py-[32px] px-5 bg-[#191919]">
              <Img
                src="https://i.imgur.com/eQfHXL7.png"
                width="120"
                height="27"
                alt="Vercel"
                className="my-0 mx-auto"
              />
            </Section>
            <Section className="pb-[40px] bg-[#191919]">
              <Hr className="border border-solid border-[#eaeaea] w-full" />

              <Section className="px-[20px]">
                <Heading className="text-white text-[32px] font-normal text-center p-0 my-[30px] mx-0">
                  Olá <span className="text-[#C0F205] font-bold">Performatti</span>
                </Heading>
                <Heading className="text-white text-[20px] font-normal text-center p-0 my-[30px] mx-0">
                  {userFirstName} fez contato conosco.
                </Heading>

                <Text className="text-[16px] text-white">
                  <b>Nome: </b>
                  {name}
                </Text>
                <Text className="mt-[-5px] text-white">
                  <b>E-mail Corporativo: </b>
                  {corporativeEmail}
                </Text>
                <Text className="mt-[-5px] text-white">
                  <b>Número de telefone: </b>
                  {phone}
                </Text>
                <Text className="mt-[-5px] text-white">
                  <b>Empresa: </b>
                  {company}
                </Text>

                <Text className="mt-[-5px] text-white">
                  <b>Ramo de atuação: </b>
                  {fieldActivity}
                </Text>

                <Text className="mt-[-5px] text-white">
                  <b>Número de funcionários: </b>
                  {collaboratorsNumber}
                </Text>

                <Text className="mt-[-5px] text-white">
                  <b>Dia do envio: </b>
                  28/08/2024
                </Text>

                <Text className="mt-[-5px] text-white">
                  {message}
                </Text>
              </Section>
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

export default EmailToPerformatti;