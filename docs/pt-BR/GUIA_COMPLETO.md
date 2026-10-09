# Guia Completo — Lefon Engenharia Reversa 🇧🇷

Este guia apresenta, em português brasileiro, a arquitetura e o uso da **Lefon Engenharia Reversa**, versão brasileira baseada em uma infraestrutura open source de engenharia reversa assistida por agentes de IA.

> **Compatibilidade:** nesta versão, alguns nomes técnicos internos continuam como `lefon`, `lefon-reverse-engineering`, `Rea*` e `LEFON_*`. Eles foram mantidos para evitar quebrar integrações, testes, scripts, MCP e provedores existentes. Para o usuário final, a identidade pública é **Lefon Engenharia Reversa**.

## 1. O que é a Lefon

A Lefon conecta agentes de IA a ferramentas de análise de software. O agente pode solicitar inspeções, receber evidências técnicas e continuar a investigação de forma iterativa.

Fluxo simplificado:

```text
Agente de IA
   ↓
MCP / CLI Lefon
   ↓
Roteador de análise
   ├─ Ghidra / Hopper / IDA
   ├─ JADX / APKTool / ADB
   ├─ Browser / CDP
   ├─ JavaScript / Electron
   ├─ .NET / código gerenciado
   ├─ pwntools / pwndbg
   ├─ mitmproxy / HAR
   └─ firmware / EVM / utilitários
   ↓
Evidências, funções, referências, metadados e resultados
   ↓
Agente explica, compara ou implementa
```

## 2. Requisitos básicos

- Windows, Linux ou macOS, de acordo com o provedor usado.
- Node.js compatível com o `package.json`.
- npm.
- Ferramentas extras somente quando necessárias: Ghidra, Hopper, IDA, JADX, ADB, navegador Chromium/Chrome e outras.

## 3. Instalação rápida

Enquanto o pacote brasileiro próprio ainda não estiver publicado no npm, a compatibilidade usa o identificador técnico original:

```bash
npx lefon-reverse-engineering setup
```

Depois da instalação global:

```bash
npm install --global lefon-reverse-engineering
lefon --help
```

A versão Lefon adiciona também a intenção de uso do nome `lefon`, mas o identificador `lefon` permanece como compatibilidade interna nesta edição.

## 4. MCP e agentes de IA

O servidor MCP expõe ferramentas de análise para clientes compatíveis. O fluxo de configuração registra o servidor e instala instruções/skills para os agentes suportados.

Exemplo de pedido ao agente:

```text
Analise este APK, identifique o fluxo de autenticação, mostre as evidências e explique quais classes e endpoints participam do processo.
```

O objetivo é que as conclusões sejam acompanhadas de evidências e limitações, e não apenas de suposições.

## 5. Android e APK

Principais componentes:

- **JADX:** decompilação e navegação de código Android/Java/Kotlin.
- **APKTool:** recursos, manifestos e estrutura de APK.
- **ADB:** inspeção de dispositivos e execução de comandos.
- Bridges em `bridge/android/` e providers em `src/android/`.

Use a documentação técnica em [`../android-analysis.md`](../android-analysis.md) e [`../apktool-resource-analysis.md`](../apktool-resource-analysis.md).

## 6. Binários nativos

A plataforma pode trabalhar com Ghidra, Hopper e IDA, dependendo do ambiente. Os resultados podem incluir:

- pseudocódigo;
- assembly;
- símbolos;
- strings;
- referências cruzadas;
- chamadas;
- informações de função e fluxo.

Bridges importantes estão em `bridge/ghidra/` e `bridge/native/`.

Consulte [`../native-investigation.md`](../native-investigation.md), [`../ghidra-provider.md`](../ghidra-provider.md) e [`../ida-provider.md`](../ida-provider.md).

## 7. JavaScript e Electron

A análise de aplicações JavaScript/Electron pode mapear:

- módulos e imports;
- arquivos de entrada;
- IPC do Electron;
- source maps;
- relações entre código web e complementos nativos;
- scripts e artefatos recuperáveis.

Comando de exemplo:

```bash
npx -y lefon-reverse-engineering@latest analyze-javascript-application "C:/caminho/do/app" --json
```

Consulte [`../javascript-application-workflows.md`](../javascript-application-workflows.md) e [`../electron-observation.md`](../electron-observation.md).

## 8. Sites e navegador

A camada de navegador usa recursos da família Chrome/Chromium para observar páginas, scripts, rede e comportamento em execução.

Pode coletar:

- DOM e estrutura da página;
- scripts carregados;
- requisições de rede;
- screenshots quando solicitadas;
- source maps quando disponíveis;
- evidências de execução.

Consulte [`../browser-observation.md`](../browser-observation.md), [`../web-runtime.md`](../web-runtime.md) e [`../web-network-captures.md`](../web-network-captures.md).

## 9. .NET e código gerenciado

A análise gerenciada é voltada a assemblies e metadados .NET. Pode inspecionar instruções CIL, referências, dependências declaradas e informações de build.

Consulte [`../managed-code-analysis.md`](../managed-code-analysis.md).

## 10. Capturas de rede

A plataforma consegue trabalhar com HAR e, em ambientes compatíveis, artefatos do mitmproxy.

O objetivo é relacionar requisições, respostas, payloads acessíveis e origem das chamadas.

Consulte [`../web-network-captures.md`](../web-network-captures.md).

## 11. Firmware

Existem fluxos específicos para análise de firmware e artefatos binários. Dependendo do formato, a investigação pode combinar extração, identificação de arquitetura e análise estática.

Consulte [`../firmware-analysis.md`](../firmware-analysis.md).

## 12. EVM / smart contracts

A análise EVM trabalha sobre bytecode e pode identificar seletores, offsets e características inferidas da interface.

Consulte [`../evm-bytecode.md`](../evm-bytecode.md).

## 13. Crashes e Linux

Há integração com pwntools/pwndbg e fluxos para crashes registrados, layouts binários e inspeção de contexto.

Consulte [`../recorded-crashes.md`](../recorded-crashes.md) e [`../binary-diagnostics.md`](../binary-diagnostics.md).

## 14. Estrutura do código-fonte

```text
src/                    Núcleo TypeScript, providers e serviços
bridge/                 Pontes para ferramentas externas
scripts/                CLI, build, verificações e automações
docs/                   Documentação técnica
website/                Site/documentação web
native/                 Componentes nativos
third_party/             Dependências e componentes de terceiros
.agents/                Skills/instruções para agentes
.github/                CI, templates e workflows
```

## 15. Arquivos que você deve conhecer

- `package.json`: pacote, comandos npm e scripts.
- `scripts/lefon.mjs`: entrada principal da CLI compatível.
- `server.json`: metadados do servidor.
- `src/`: implementação principal.
- `.agents/skills/reverse-engineer-anything/`: skill principal para agentes.
- `LICENSE`: licença MIT e atribuição original obrigatória.
- `THIRD_PARTY_NOTICES.md`: créditos e licenças de terceiros.

## 16. Segurança e uso responsável

Use engenharia reversa apenas em sistemas, arquivos e ambientes em que você tenha autorização ou outra base legal para analisar. Respeite licenças, propriedade intelectual, termos de serviço, privacidade e legislação aplicável.

## 17. Identidade da versão brasileira

**Nome:** Lefon Engenharia Reversa  
**Mantenedor da adaptação brasileira:** Nelson Neto (`@mkbraion`)  
**Repositório:** `mkbraion/lefon-reverse-engineering`

A implementação contém código derivado do projeto original de **morluto**, licenciado sob MIT. A atribuição original é mantida no arquivo `LICENSE`.
