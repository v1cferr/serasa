

# Alterações na Landing Page "Endividamento"

## 1. Carrossel Hero (Seção 1)
- Remover o `mx-4` e `rounded-lg` do container do carrossel
- Alterar para `max-w-full` (100% da largura horizontal)
- O carrossel ocupará toda a largura da tela

## 2. Wizard Financeiro (Seção 2)
- Adicionar botão "Voltar" ao lado dos botões "Próximo" e "Pular" (visível a partir do passo 2)
- Ao clicar em "Voltar", restaurar os dados do passo anterior no formulário
- Substituir os emojis do lado direito por ilustrações SVG inline como plano de fundo (gradientes temáticos com ícones grandes), mantendo o texto descritivo sobre elas

## 3. Seções de Educação (Seções 4, 5 e 6)
Reorganizar completamente o `EducationSections.tsx`:

**Seção 4 — "Educação Financeira"** (tema: Investimentos)
- 6 cards na ordem: Educação, Liquidez diária, Poupança, Patrimônio, Ações, Empreendimento
- Grid de 3 colunas (2 linhas)

**Seção 5 — "Como funciona?"** (temas explicativos)
- 6 cards: Inflação, CDB e CDI, Taxas e juros, Empréstimos, Amortização, Financiamento

**Seção 6 — "Reserva de Emergência"**
- Layout diferenciado: área principal explicando a importância + cards com dicas práticas de como criar/aumentar a reserva

## Detalhes Técnicos

### HeroCarousel.tsx
- Linha do container: remover `rounded-lg mx-4`, adicionar `max-w-full`

### FinancialWizard.tsx
- Novo botão "Voltar" com ícone `ArrowLeft`
- Armazenar histórico de dados por step para restauração ao voltar
- Lado direito: trocar o `div` com emoji por um container com background SVG/gradiente ilustrativo + texto sobreposto

### EducationSections.tsx
- Reescrever os arrays de cards com os novos temas e ordem
- Seção 6 terá estrutura própria (não reutiliza o componente `Section` genérico): bloco hero + grid de dicas práticas

