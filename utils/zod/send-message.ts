import { z } from "zod";

export const sendEmailFormSchema = z.object({
  name: z.string().nonempty("Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().nonempty("Telefone é obrigatório"),
  company: z.string().nonempty("Empresa é obrigatória"),
  fieldActivity: z.string().nonempty("Ramo de atuação é obrigatório"),
  collaboratorsNumber: z.preprocess(
    (val) => {
      if (typeof val === 'string') {
        const parsed = parseInt(val, 10);
        return isNaN(parsed) ? undefined : parsed;
      }
      return val;
    },
    z.number().int().min(1, "Número de funcionários deve ser pelo menos 1")
  ),
  message: z.string().nonempty("Mensagem é obrigatória"),
});

export type SendEmailFormData = z.infer<typeof sendEmailFormSchema>;