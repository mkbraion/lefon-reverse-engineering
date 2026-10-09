# Migração técnica para Lefon

Esta edição realiza a segunda fase da adaptação brasileira e substitui identificadores internos do projeto pela identidade **Lefon**.

## Principais alterações

- pacote npm: `lefon-reverse-engineering`
- CLI principal: `lefon`
- entrada da CLI: `scripts/lefon.mjs`
- namespace MCP: `io.github.mkbraion/lefon`
- variáveis de ambiente com prefixo `LEFON_`
- classes e bridges com prefixo `Lefon`
- arquivos internos anteriormente vinculados ao nome técnico legado foram renomeados para Lefon

## Compatibilidade

Esta versão prioriza a nova identidade. Scripts externos que dependiam de nomes internos da base original precisam ser atualizados para os equivalentes `lefon`, `Lefon*` ou `LEFON_*`.

## Licenciamento

A refatoração de nomes não remove as obrigações da licença do código de origem. Consulte `LICENSE` e `THIRD_PARTY_NOTICES.md`.
