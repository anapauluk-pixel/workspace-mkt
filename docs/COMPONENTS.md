# Workspace MKT
## Biblioteca de Componentes

Status: Definido

---

# Objetivo

Centralizar todos os componentes reutilizáveis da aplicação.

Todos os módulos devem utilizar estes componentes.

Não criar componentes duplicados.

---

# Estrutura dos Componentes

Layout

Navegação

Formulários

Feedback

Cards

Modais

Drawers

Indicadores

Visualizações

---

# Layout

## Sidebar

Responsável pela navegação principal.

Estados:

- Aberta
- Recolhida

Sidebar Aberta:

280px

Sidebar Recolhida:

72px

Comportamento:

- Recolhível
- Mantém item ativo
- Exibe tooltip quando recolhida

---

## Header

Modelo:

ClickUp

Altura:

72px

Itens:

- Botão recolher sidebar
- Breadcrumb
- Pesquisa global
- Filtros
- Ações da página
- Menu do usuário

---

# Navegação

## Breadcrumb

Exemplo:

Workspace MKT > Dashboard

Workspace MKT > Demandas

Workspace MKT > Equipe

---

## Tabs

Utilizado para:

Demandas

Visualizações:

- Kanban
- Lista
- Calendário
- Gantt

---

# Formulários

## Input

Tipos:

- Texto
- Número
- Data
- Hora
- Pesquisa

Estados:

- Normal
- Foco
- Erro
- Desabilitado

---

## Select

Tipos:

- Simples
- Pesquisa
- Multi Seleção

---

## Textarea

Utilizada para:

- Descrição
- Comentários
- Observações
- Motivos de recusa

---

## Checkbox

Utilizado para:

- Filtros
- Configurações
- Seleções múltiplas

---

## Radio

Utilizado quando apenas uma opção pode ser escolhida.

---

# Botões

## Primário

Ação principal da tela.

Exemplos:

Nova Demanda

Salvar

Concluir

---

## Secundário

Ação complementar.

Exemplos:

Cancelar

Voltar

Fechar

---

## Perigo

Ações destrutivas.

Exemplos:

Excluir

Remover

Cancelar definitivamente

---

## Ghost

Botão sem preenchimento.

Usado em ações secundárias.

---

# Badges

## Prioridade

Baixa

Média

Alta

Crítica

---

## Status

Novo

Atendimento

Planejamento

Criação

Pendente

Aprovação

Disparo

Concluído

---

## Prazo

No prazo

Atenção

Atrasado

---

# Cards

## Card de Demanda

Informações:

- Número
- Título
- Responsável
- Prioridade
- Prazo
- Progresso

Utilizado em:

Kanban

---

## Card de Subtarefa

Informações:

- Título
- Responsável
- Status
- Prazo

---

## Card Indicador

Utilizado no Dashboard.

Exemplos:

- Demandas abertas
- Demandas concluídas
- Atrasadas
- Aprovações

---

# Avatar

Representação dos usuários.

Utilizado em:

- Demandas
- Equipe
- Aprovações
- Comentários

---

# Modais

## Modal de Aprovação

Aprovar

Recusar

Motivo

Observações

---

## Modal de Configuração

Configurações rápidas.

---

## Modal de Confirmação

Confirmação de ação crítica.

---

# Drawers

## Drawer de Demanda

Abre lateralmente.

Contém:

- Dados da demanda
- Subtarefas
- Materiais
- Histórico
- Tempo
- Aprovações

---

## Drawer de Subtarefa

Dados específicos da atividade.

---

# Indicadores

## KPI

Número único.

Exemplos:

Demandas abertas

Demandas atrasadas

Aprovações pendentes

---

## Gráfico

Tipos:

- Barras
- Linha
- Pizza
- Área

---

# Visualizações

## Kanban

Visualização principal de demandas.

---

## Lista

Visualização tabular.

---

## Calendário

Visualização temporal.

---

## Gantt

Visualização de planejamento.

---

# Componentes Futuros

Comentários

Menções

Upload avançado

Timeline

Notifications

Assistente de IA

Automações
