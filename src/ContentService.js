import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_API_KEY;


if (!apiKey) {
    throw new Error("API Key is missing. Ensure VITE_API_KEY is set in your .env file.");
}

export async function getContent(payload) {
    const { message, mode } = payload;
    let prompt = message;

    if (!message || !mode) {
        throw new Error("Payload must include both 'message' and 'mode'.");
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); 

    if(mode === "mindmap"){
        prompt = `${message}\n
            Crie um mapa mental no formato Markdown. 
            - Não inclua nenhuma introdução ou explicação na resposta.
            - Não escreva "\`\`\` markdown" no início e no fim da resposta "\`\`\`".
            - Apenas forneça o conteúdo central do mapa mental em formato Markdown.
            - Use uma estrutura hierárquica com tópicos e subtópicos claros.`;
    } else if (mode === "content"){
        prompt = `${message}\nNão use formatação Markdown.
                  - esteja alinhado a BNCC(base nacional comum currícular)`;
    }
    // try {
    //         const result = await model.generateContent(prompt);
    //         return result.response.text();
    //     } catch (error) {
    //         console.error("Error in generating: ", error);
    //         throw new Error(`Failed to generate ${mode}.`);
    //     }
    return(`## Material Didático: Multiplicação e Divisão (Alinhado à BNCC)

Este material didático aborda os conceitos de multiplicação e divisão, alinhado às competências da Base Nacional Comum Curricular (BNCC) para os anos iniciais do Ensino Fundamental. Ele propõe atividades práticas e lúdicas para facilitar a compreensão e fixação dos conteúdos.

**Público-alvo:** Alunos do Ensino Fundamental - Anos Iniciais (adapte a complexidade para a série específica).

**Objetivos de aprendizagem:**

* Compreender o significado da multiplicação como adição de parcelas iguais.
* Construir e utilizar estratégias de cálculo para multiplicar.
* Resolver problemas que envolvam multiplicação.
* Compreender o significado da divisão como a ação de repartir igualmente ou de determinar quantas vezes uma quantidade cabe em outra.
* Construir e utilizar estratégias de cálculo para dividir.
* Resolver problemas que envolvam divisão.
* Estabelecer relações entre multiplicação e divisão.

**Habilidades da BNCC (adapte conforme a série):**

* (EF01MA07) Resolver problemas de multiplicação (com a ideia de adição de parcelas iguais) utilizando diferentes estratégias de cálculo.
* (EF02MA06) Resolver e elaborar problemas de multiplicação com os significados de adição de parcelas iguais, organização retangular e proporcionalidade, utilizando estratégias pessoais ou convencionais.
* (EF03MA02) Resolver problemas de multiplicação envolvendo diferentes significados das operações, utilizando estratégias pessoais ou convencionais.
* (EF01MA08) Resolver problemas de divisão (com a ideia de repartição e de medida), utilizando diferentes estratégias de cálculo.
* (EF02MA07) Resolver e elaborar problemas de divisão cujo divisor seja um número natural menor do que 10, utilizando estratégias pessoais ou convencionais.
* (EF03MA03) Resolver problemas de divisão envolvendo diferentes significados das operações, utilizando estratégias pessoais ou convencionais.


**1. Multiplicação:**

* **Introdução:** Inicie com exemplos concretos do cotidiano. Quantas pernas têm 3 cachorros? Quantas maçãs há em 2 dúzias (2 x 12)? Utilize materiais manipuláveis como palitos de picolé, botões, ou desenhos para representar os grupos.
* **Conceito:** Explique a multiplicação como adição de parcelas iguais. Por exemplo, 3 x 4 = 4 + 4 + 4 = 12.
* **Propriedades da multiplicação:** Explore as propriedades comutativa (a x b = b x a), associativa ((a x b) x c = a x (b x c)) e distributiva (a x (b + c) = (a x b) + (a x c)) através de exemplos e atividades práticas.
* **Tabuada:** Ensine a tabuada utilizando jogos, músicas, memorização visual, etc. Evite a memorização mecânica, enfatizando a compreensão do conceito.
* **Problemas:** Apresente problemas contextualizados que envolvam diferentes situações: combinar quantidades (3 caixas com 5 lápis cada), arranjos retangulares (um jardim com 4 fileiras e 5 plantas em cada fileira), etc.

**Atividades:**

* **Jogo da memória:** Criar pares de cartas com multiplicações e resultados.
* **Dominó da multiplicação:** Criar peças de dominó com multiplicações em uma extremidade e resultados na outra.
* **Trilha da multiplicação:** Criar um tabuleiro com multiplicações e o aluno avança de acordo com o resultado correto.
* **Desenhos:** Pedir aos alunos para desenharem objetos organizados em grupos, representando multiplicações.

**2. Divisão:**

* **Introdução:** Introduza a divisão com exemplos concretos. Reparta 12 balas igualmente entre 3 crianças. Quantas balas cada criança receberá?
* **Conceitos:** Apresente os dois conceitos principais da divisão:
* **Repartição:** Dividir uma quantidade em partes iguais.
* **Medida (ou contenção):** Determinar quantas vezes uma quantidade cabe em outra.
* **Símbolo da divisão:** Apresente o símbolo (÷) e a representação em forma de fração.
* **Relação com a multiplicação:** Mostre como a multiplicação e a divisão são operações inversas. Por exemplo, se 3 x 4 = 12, então 12 ÷ 3 = 4 e 12 ÷ 4 = 3.
* **Problemas:** Apresente problemas contextualizados envolvendo diferentes situações: repartição equitativa, organização em grupos, etc.

**Atividades:**

* **Material concreto:** Utilize objetos para representar a divisão, como balas, botões, etc.
* **Desenhos:** Pedir aos alunos para desenharem e dividirem objetos em grupos iguais.
* **Problemas contextualizados:** Criar problemas que envolvam situações reais do cotidiano.
* **Jogo da divisão:** Criar um jogo de tabuleiro onde os alunos precisam resolver problemas de divisão para avançar.

**Avaliação:**

A avaliação deve ser contínua e abrangente, observando a participação dos alunos nas atividades, a resolução de problemas e a compreensão dos conceitos. Utilize diferentes instrumentos de avaliação, como observação, trabalhos em grupo, provas e registros escritos.

**Recursos:**

* Materiais manipuláveis (palitos, botões, blocos lógicos, etc.)
* Cartões com operações
* Jogos
* Livros didáticos
* Software educativos


Este material é um guia. Adapte-o às necessidades e características de seus alunos e à sua realidade de sala de aula. Lembre-se de que a prática e a contextualização são fundamentais para o aprendizado significativo da multiplicação e da divisão.`)
} 
