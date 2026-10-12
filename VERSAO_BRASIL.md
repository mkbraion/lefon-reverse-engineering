# Lefon Engenharia Reversa — Versão Brasileira

Esta edição apresenta o projeto publicamente como **Lefon Engenharia Reversa**.

## O que foi adaptado

- README principal em português brasileiro.
- Identidade pública Lefon.
- Links públicos direcionados ao repositório `mkbraion/lefon-reverse-engineering`.
- Remoção das chamadas públicas para Discord/X do projeto-base.
- Cabeçalho e rodapé do site em português.
- Guia completo brasileiro em `docs/pt-BR/GUIA_COMPLETO.md`.
- Avisos de terceiros organizados em `THIRD_PARTY_NOTICES.md`.

## Compatibilidade técnica

Identificadores internos como `rea`, `rea-agents`, classes `Rea*`, variáveis e nomes de arquivos não foram renomeados em massa nesta etapa porque fazem parte da API/ABI, scripts, testes, publicação npm e integração MCP. Alterá-los sem uma migração controlada poderia quebrar a aplicação.

Eles podem ser migrados posteriormente para `lefon` por etapas, com testes automatizados.
