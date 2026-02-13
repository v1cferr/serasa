

# Alteracoes na Landing Page

## 1. Hero Carousel - Imagens de fundo
Adicionar imagens ilustrativas de fundo em cada slide do carrossel. Como nao temos imagens reais, usaremos SVG patterns/ilustracoes inline combinadas com os gradientes existentes para criar fundos visuais mais ricos (icones grandes semi-transparentes relacionados ao tema de cada slide). O conteudo textual permanece inalterado.

## 2. Remover Piramide de Maslow da Secao 2
Remover o bloco "Piramide de Maslow Financeira" do `FinancialResults.tsx` (linhas 109-130), mantendo os cards de resumo, grafico de pizza e grafico de barras 50/30/20.

## 3. Secao 4 - Reestruturar como FAQ em 3 colunas
Substituir completamente o `EducationSections.tsx` por uma unica secao com:

- Titulo `<h2>` "Educacao Financeira"
- Layout de 3 colunas (33.333% cada)
- Cada coluna usa o componente `Accordion` (Radix UI, ja instalado) no estilo FAQ

**Coluna 1 - Investimentos:**
1. Educacao
2. Liquidez diaria
3. Poupanca
4. Patrimonio
5. Acoes
6. Empreendimento

**Coluna 2 - Conceitos:**
1. Inflacao
2. CDB e CDI
3. Taxas e juros
4. Emprestimos
5. Amortizacao

**Coluna 3 - Protecao:**
1. Reserva de Emergencia
2. Piramide de Maslow

Cada item do FAQ tera titulo clicavel e conteudo explicativo que expande ao clicar.

## Detalhes Tecnicos

### HeroCarousel.tsx
- Adicionar elementos SVG decorativos (circulos, linhas, icones) como background em cada slide, posicionados com `absolute` e `opacity` baixa para nao interferir no texto

### FinancialResults.tsx
- Remover linhas 46-52 (array `maslowLevels`)
- Remover linhas 109-130 (JSX da piramide)

### EducationSections.tsx
- Reescrever completamente usando o componente `Accordion` de `@/components/ui/accordion`
- Uma unica `<section>` com `<h2>Educacao Financeira</h2>`
- Grid de 3 colunas responsivo (`grid-cols-1 md:grid-cols-3`)
- Cada coluna contem um `Accordion` com os itens FAQ correspondentes
- Mover o conteudo da Piramide de Maslow (anteriormente na secao 2) para o FAQ da coluna 3

### Index.tsx
- Atualizar links de navegacao na navbar se necessario (remover ancoras para secoes que nao existem mais como "como-funciona" e "reserva")

