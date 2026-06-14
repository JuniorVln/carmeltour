import Groq from "groq-sdk";
import { packages, categoryLabels } from "@/data/packages";
import { faq } from "@/data/faq";

const catalogSummary = packages
  .map(
    (p) =>
      `- ${p.title} (${categoryLabels[p.category]}): ${p.subtitle}. Duração: ${p.duration}. Destinos: ${p.destinations.join(", ")}. Preço: ${p.price}.`
  )
  .join("\n");

const faqSummary = faq
  .map((f) => `P: ${f.question}\nR: ${f.answer}`)
  .join("\n\n");

const SYSTEM_PROMPT = `Você é o assistente virtual da Carmel Tour, empresa especializada em turismo bíblico e espiritual premium para igrejas, pastores e grupos cristãos.

Sua função é ajudar os visitantes do site com informações sobre roteiros, destinos, preços e condições das viagens. Seja sempre prestativo, caloroso e profissional.

## Sobre a Carmel Tour
- Mais de 20 anos de experiência em turismo bíblico
- Operação própria em Israel e Turquia
- Parceria com Holy Land Gate LTD (Israel)
- Guias bilíngues especializados em história bíblica
- Atende igrejas, pastores, grupos e casais

## Contato
- WhatsApp: +1 (954) 589-4651
- Email: contato@carmeltour.com
- Para reservas e propostas, sempre indicar o WhatsApp

## Nosso Catálogo de Roteiros
${catalogSummary}

## Perguntas Frequentes
${faqSummary}

## Instruções
- Responda SEMPRE em português do Brasil
- Para preços detalhados e reservas, sempre indique o WhatsApp
- Seja conciso e direto — respostas curtas são melhores
- Se não souber algo específico, direcione para o WhatsApp
- Não invente informações que não estão no catálogo
- Limite cada resposta a 200 palavras no máximo

## Formatação
- Use **negrito** para destacar nomes de roteiros e informações importantes
- Use listas com "- " para enumerar destinos, itens inclusos ou opções
- Separe parágrafos com uma linha em branco
- Não use títulos com # — apenas texto, negrito e listas`;

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return Response.json({ error: "Mensagens inválidas" }, { status: 400 });
    }

    const client = new Groq();
    const response = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      max_tokens: 400,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.slice(-10),
      ],
    });

    const content = response.choices[0]?.message?.content;
    if (!content) {
      return Response.json({ error: "Resposta inválida" }, { status: 500 });
    }

    return Response.json({ reply: content });
  } catch (error) {
    console.error("Chat API error:", error);
    return Response.json(
      { error: "Erro ao processar mensagem" },
      { status: 500 }
    );
  }
}
