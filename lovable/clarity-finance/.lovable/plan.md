

# Landing Page "Endividamento" - Estilo Serasa Experian

## Visão Geral
Uma landing page educativa e interativa sobre endividamento, inspirada na Serasa Experian, com ferramentas práticas de análise financeira, chatbot de orientação e guia de educação financeira.

---

## Estrutura Geral
- **Largura máxima**: 1366px
- **Altura por dobra**: máximo 768px
- **Design responsivo** com paleta de cores inspirada na Serasa (tons de rosa/magenta, branco e cinza escuro)

---

## Navbar (100px de altura)
- Logo "Serasa Experian" no canto esquerdo
- Links âncora para cada seção da página (navegação interna)
- Botões de **Login** e **Registrar** no canto direito
- Layout flex com padding de 3%

---

## 1ª Seção — Hero com Carrossel
- Carrossel automático (troca a cada 4 segundos) com **pause on hover**
- Cada slide resume uma seção da landing page com imagem de fundo, título impactante e breve descrição
- Indicadores de navegação (dots) e setas laterais
- Frases de impacto sobre endividamento no Brasil

---

## 2ª Seção — Cadastro de Dados Financeiros
Formulário interativo em **5 etapas sequenciais** (wizard step-by-step):

1. **Dívida ativa** — valor em R$
2. **Renda fixa** — com opção de adicionar múltiplas rendas (salário, ganhos fixos)
3. **Renda variável** — com opção de adicionar (trabalho informal, renda extra)
4. **Gastos fixos** — com opção de adicionar (aluguel, educação, financiamentos, saúde, IPVA, IPTU)
5. **Gastos variáveis** — com opção de adicionar (água, luz, alimentação, higiene, lazer)

**Cada etapa terá:**
- Lado esquerdo: campo de input monetário (R$) + botão "Pular" (valor = R$0,00)
- Lado direito: imagem ilustrativa + texto explicativo sobre o dado

**Após preenchimento:**
- **Pirâmide de Maslow** interativa em gráfico visual (usando Recharts)
- Gráficos de pizza/barra mostrando distribuição de gastos
- Indicador de quanto sobra para investimentos ou pagamento de dívidas
- Comparação com a regra 50/30/20

---

## 3ª Seção — Chatbot Financeiro
- Interface de chat integrada na página
- Analisa os dados cadastrados na seção 2
- Aplica a regra **50% gastos fixos / 30% variáveis / 20% investimento**
- Oferece dicas personalizadas para reorganização financeira
- Sugere estratégias para quitar a dívida cadastrada
- Respostas pré-programadas com lógica baseada nos dados do usuário (sem necessidade de IA externa)

---

## 4ª Seção — Educação Financeira: Fundamentos
Guia prático com cards interativos (efeito hover reveal com transição de opacidade):
- **Poupança e Reserva de Emergência**
- **Liquidez Diária**
- **Inflação e seu impacto**
- **Educação financeira básica**

Cards com efeito **shadow + hover** e conteúdo **hidden** que aparece ao passar o mouse (transição 2s)

---

## 5ª Seção — Investimentos e Crescimento
Continuação do guia com temas interligados:
- **CDB e CDI** — o que são e como funcionam
- **Taxas e Juros** — compostos vs simples
- **Ações e Patrimônio**
- **Empreendimento**

Layout em grid com cards interativos, mesmos efeitos visuais (shadow, hover, hidden reveal)

---

## 6ª Seção — Crédito e Planejamento
Temas finais do guia:
- **Empréstimos** — quando vale a pena
- **Amortização** — como funciona
- **Financiamento** — cuidados e dicas
- **Planejamento financeiro sustentável**

Cards com botões estilizados (border-radius 5px, margin 5px, cursor pointer, efeitos shadow/hover/active)

---

## Elementos Visuais e Interações
- Efeitos de **shadow** e **hover** em todos os cards e botões
- Classe `.hidden` com transição de opacidade 2s no hover
- Classe `.row` para alinhamento flex em linha
- Botões com border-radius 5px, margin 5px e cursor pointer
- Gráficos interativos com Recharts (pizza, barra, pirâmide)
- Paleta de cores Serasa: magenta (#E1197E), cinza escuro, branco

---

## Observações Técnicas
- Dados financeiros armazenados em estado local (sem backend necessário inicialmente)
- Chatbot com lógica local baseada nos dados inseridos
- Todas as imagens usando placeholders ilustrativos
- Navegação via âncoras internas (sem rotas adicionais)

