# Workspace MKT
## Design System

Status: Em definição

---

# Conceito da aplicação

O Workspace MKT é uma aplicação única (SPA) composta por:

- Sidebar
- Header
- Área de Conteúdo

A navegação principal ocorre sem troca de página.

O conteúdo central é alterado conforme o item selecionado.

---

# Arquitetura de Navegação

## Navegação Principal

Dashboard

Demandas

Aprovações

Equipe

Relatórios

Configurações

---

# Demandas

Demandas é um módulo.

As diferentes visões não são módulos independentes.

As seguintes opções representam apenas formas diferentes de visualizar os mesmos dados:

- Kanban
- Lista
- Calendário
- Gantt

Todos utilizam a mesma fonte de dados.

A troca de visualização não altera o contexto da demanda.

---

# Página Inicial

A página inicial depende do perfil.

Exemplos:

Colaborador
→ Dashboard ou Demandas

Gestor
→ Dashboard

Administrador
→ Dashboard

A tela padrão é configurável por perfil.

---

# Layout Mestre

Estrutura:

Sidebar
Header
Área de Conteúdo

---

# Sidebar

Tipo:
Recolhível

Estado Aberto:
280px

Estado Recolhido:
72px

---

# Sidebar Aberta

Dashboard

Demandas

Aprovações

Equipe

Relatórios

Configurações

---

# Sidebar Recolhida

Apenas ícones.

Não exibir grupos.

Não exibir textos.

---

# Header

Modelo:
ClickUp

Altura:
72px

Componentes:

- Botão recolher sidebar
- Breadcrumb
- Pesquisa
- Filtros
- Ações da página
- Usuário

---

# Breadcrumb

Exemplos:

Workspace MKT > Dashboard

Workspace MKT > Demandas

Workspace MKT > Aprovações

Workspace MKT > Equipe

Workspace MKT > Configurações

---

# Pesquisa

Pesquisa global.

Permite localizar:

- Chamados
- Demandas
- Subtarefas
- Usuários
- Materiais

---

# Sistema de Cores

Tema Principal

Sidebar:
Verde Institucional

Header:
Branco

Conteúdo:
Cinza Claro

Cards:
Branco

---

# Paleta

Primária:
Verde Institucional

Secundária:
Verde Escuro

Neutros:
Cinzas

Alertas:
Amarelo

Crítico:
Vermelho

Sucesso:
Verde

---

# Tipografia

Fonte:
Atual (temporária)

Possível evolução:
Poppins

Pesos:

300
400
500
600
700

---

# Ícones

Biblioteca:

Lucide

Estilo:

Outline

---

# Sistema de Espaçamento

4px

8px

12px

16px

24px

32px

48px

---

# Bordas

6px

8px

12px

---

# Componentes

## Botão

Primário

Secundário

Perigo

Link

Ghost

---

## Campo de Texto

Texto

Pesquisa

Textarea

---

## Select

Padrão

Pesquisa

Multi Seleção

---

## Badge

Prioridade

Status

Categoria

Prazo

---

## Avatar

Usuários

Equipe

Responsáveis

---

## Card

Card Base

Card de Demanda

Card de Subtarefa

Card Indicador

---

## Modal

Modal Padrão

Modal de Aprovação

Modal de Configuração

---

## Drawer

Drawer de Demanda

Drawer de Subtarefa

Drawer de Aprovação

---

# Responsividade

Desktop

Sidebar aberta

---

Tablet

Sidebar recolhida

---

Mobile

Sidebar Overlay

---

# Permissões

A interface adapta-se ao perfil.

Um usuário vê apenas:

- Menus permitidos
- Visualizações permitidas
- Ações permitidas

---

# Visualizações Permitidas

Cada perfil pode possuir acesso individual às visualizações:

Kanban

Lista

Calendário

Gantt

---

# Tela Principal por Perfil

Configurável.

Exemplos:

Dashboard

Demandas

Calendário

Kanban

Lista

Gantt

---

# Diretriz de UX

Objetivo:

Parecer uma ferramenta corporativa moderna.

Referências:

- ClickUp
- Monday
- Jira Work Management
- Linear

Evitar:

- Aparência de sistema legado
- Excesso de cores
- Menus excessivamente profundos
- Visual poluído


Observação:
 
A pasta pages é temporariamente utilizada para armazenar
visualizações do protótipo.
 
Na arquitetura SPA definitiva, estas páginas representam
views da aplicação e não páginas independentes.
