<!-- MKBRAION-POLISH:START -->
<div align="center">

# Lefon Reverse Engineering

**Ferramenta em TypeScript para engenharia reversa, análise de código-fonte, inspeção estrutural e compreensão de projetos de software.**

[![Repositório](https://img.shields.io/badge/GitHub-Repositório-181717?logo=github)](https://github.com/mkbraion/lefon-reverse-engineering)

</div>

**Stack / tópicos:** ``code-analysis`` · ``css`` · ``developer-tools`` · ``frontend`` · ``html`` · ``java`` · ``javascript`` · ``nodejs`` · ``python`` · ``reverse-engineering`` · ``security-tools`` · ``software-engineering``

> Projeto mantido por [@mkbraion](https://github.com/mkbraion).
<!-- MKBRAION-POLISH:END -->

<div align="center">

[English](LEFONDME.md) · [简体中文](LEFONDME_zh.md) · [繁體中文](LEFONDME_zh-TW.md) · [日本語](LEFONDME_ja.md) · [한국어](LEFONDME_ko.md) · [Türkçe](LEFONDME_tr.md) · [Русский](LEFONDME_ru.md) · [Tiếng Việt](LEFONDME_vi.md) · [ไทย](LEFONDME_th.md) · [Deutsch](LEFONDME_de.md) · [Español](LEFONDME_es.md) · [Français](LEFONDME_fr.md) · [Українська](LEFONDME_uk.md) · [Polski](LEFONDME_pl.md) · **Português (Brasil)** · [العربية](LEFONDME_ar.md) · [فارسی](LEFONDME_fa.md) · [Bahasa Indonesia](LEFONDME_id.md) · [Italiano](LEFONDME_it.md)

# 🇧🇷 Lefon Engenharia Reversa

### Plataforma brasileira de engenharia reversa assistida por IA, com CLI e MCP para binários, aplicativos e análise em execução.

**Analise software, aplicativos e binários com apoio de agentes de IA e ferramentas profissionais de engenharia reversa.**

[![MCP](https://img.shields.io/badge/MCP-ferramentas-5c4ee5?style=flat-square)](docs/mcp-contracts.md#generated-catalog)
[![Node.js](https://img.shields.io/badge/Node.js-requisitos-339933?style=flat-square&logo=nodedotjs&logoColor=white)](#current-status)
[![Licença MIT](https://img.shields.io/badge/licen%C3%A7a-MIT-f4c430?style=flat-square)](LICENSE)



[Início rápido](#início-rápido) · [Como a Lefon funciona](#como-o-lefon-funciona) · [O que você pode analisar](#o-que-você-pode-analisar) · [Casos de uso](#casos-de-uso) · [Perguntas frequentes](#perguntas-frequentes) · [Documentação](#documentação)


> **Versão brasileira Lefon** — adaptação, documentação e identidade brasileira mantidas por **Nelson Neto (@mkbraion)**.
> Para manter compatibilidade técnica com o ecossistema original, alguns comandos e identificadores internos ainda usam `lefon`/`lefon-reverse-engineering`.

<code>npx lefon-reverse-engineering setup</code>

<br />

<img src="docs/assets/lefon-hopper-analysis.png" alt="Lefon inicia sua ponte de análise dentro do Hopper enquanto inspeciona um binário nativo" width="1200" />

<br /><br />

<table aria-label="Comunidade Lefon">
<tr>
<td align="center" width="420">
  <a href="https://github.com/mkbraion/lefon-reverse-engineering/discussions">
    <strong>🇧🇷 Comunidade Lefon Engenharia Reversa</strong>
  </a><br />
  <sub>Discussões · Dúvidas · Estudos · Engenharia Reversa</sub>
</td>
</tr>
</table>

<br />

</div>

---

Viu uma funcionalidade em um aplicativo que gostaria de ter no seu próprio produto? Peça ao seu agente para investigá-la com a Lefon. Ele pode inspecionar o aplicativo sem o código-fonte, explicar como a funcionalidade funciona, apresentar as evidências e criar uma versão para o seu projeto.

A Lefon conecta seu agente a ferramentas para inspecionar binários nativos, aplicativos JavaScript e Electron, assemblies .NET e sites. Você também pode usar as mesmas ferramentas pelo terminal. A análise acontece localmente, e os resultados incluem as evidências e limitações por trás de cada conclusão.

A configuração registra a Lefon no seu agente e instala as instruções de fluxo de trabalho correspondentes. A análise nativa pode usar uma instalação existente do Hopper ou do Ghidra; a configuração também pode instalar o Hopper opcionalmente, mediante aprovação. A análise estática de JavaScript não precisa de nenhum dos dois motores.

> **Documentação brasileira:** consulte o [Guia Completo em Português](docs/pt-BR/GUIA_COMPLETO.md).

## Início rápido

### Configure seu agente

Com Node.js e npm instalados, execute:

```bash
npx lefon-reverse-engineering setup
```

Escolha seus agentes, revise as alterações propostas e aprove-as. A configuração adiciona o servidor MCP da Lefon e as instruções de fluxo de trabalho correspondentes, com backups das configurações existentes. Reinicie seu agente depois.

A configuração oferece suporte ao Claude Code, Codex, Cursor, Gemini CLI, Grok Build e [outros agentes](docs/installation.md#supported-agents). Consulte [instalação e configuração](docs/installation.md) para configurar provedores e registrar o MCP manualmente.

### Peça ao seu agente

```text
Investigue como a busca funciona no aplicativo Notes, mostre as evidências e crie uma funcionalidade semelhante para o meu projeto.
```

Substitua Notes pelo aplicativo alvo e indique a funcionalidade que deseja entender.

### Use o terminal

Inspecione um diretório extraído de um aplicativo JavaScript/Electron ou um arquivo ASAR:

```bash
npx -y lefon-reverse-engineering@latest analyze-javascript-application /absolute/path/to/app --json
```

O resultado inclui módulos, importações, limites do Electron e suas evidências. Substitua o caminho pelo do seu alvo, como `"D:/apps/example"` no Windows.

Para instalar o comando `lefon` e usá-lo regularmente:

```bash
npm install --global lefon-reverse-engineering
lefon --help
```

Para análise nativa, configure primeiro um provedor. Consulte o [guia de CLI e Evidence](docs/cli.md) para comandos nativos, seleção de provedores, snapshots e uso em scripts.

### Atualize a Lefon

A base tecnológica da Lefon evolui rapidamente, e novas versões incluem correções frequentes de bugs. Mantenha sua instalação atualizada.

Para uma CLI instalada pelo npm:

```bash
lefon update
```

Para atualizar os registros dos agentes e a skill, execute o comando de configuração exibido pela atualização.

Se você usa `npx`, atualize a configuração do agente com:

```bash
npx lefon-reverse-engineering@latest setup
```

Revise as alterações de configuração e reinicie seu agente. Para comandos avulsos da CLI, use `npx lefon-reverse-engineering@latest` seguido do comando.

## Como a Lefon funciona

Seu agente chama a Lefon por MCP para inspecionar o alvo e rastrear o código relevante. A Lefon retorna os resultados com suas evidências. O agente usa esses resultados para fazer novas perguntas, explicar o comportamento ou escrever e testar uma implementação. Os comandos da CLI usam os mesmos fluxos de trabalho.

![Fluxo de investigação da Lefon: seu agente pergunta sobre um alvo local, a Lefon o inspeciona e rastreia com ferramentas de análise, e o agente usa o código, as referências e os pontos desconhecidos retornados para explicar, implementar e testar.](website/public/assets/figures/lefon-investigation-flow.svg)

[Abra a figura em tamanho completo](website/public/assets/figures/lefon-investigation-flow.svg).

<a id="current-status"></a>

## O que você pode analisar

A Lefon requer Node.js 22.x (>=22.19), 24.x (>=24.11) ou 26+, além do npm. As ferramentas adicionais e os sistemas anfitriões compatíveis dependem do alvo:

| Alvo                        | O que a Lefon retorna                                                                                                     | Requisitos e guia                                                                                                                     |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Binários nativos            | Pseudocódigo, assembly, strings, símbolos, chamadas e referências                                                       | Hopper, Ghidra ou IDA; [análise nativa](docs/native-investigation.md)                                                             |
| Estrutura ELF sem execução  | Seções, segmentos, símbolos/relocações originais e possíveis mecanismos de mitigação identificados por análise estática | pwntools fornecido pelo chamador no Linux x64; [diagnóstico de binários](docs/binary-diagnostics.md)                                  |
| Bytecode EVM                | Seletores de despacho, offsets de bytes, argumentos inferidos e mutabilidade                                            | Entrada local com bytes brutos ou representação hexadecimal no Linux x64; [guia de EVM sem execução](docs/evm-bytecode.md)            |
| Falhas do Linux registradas | Registros note brutos, registradores/sinais de cada thread registrada e candidatos opcionais a mapeamentos              | pwntools fornecido pelo chamador no Linux x64; GDB/pwndbg opcionais; [falhas registradas](docs/recorded-crashes.md)                   |
| JavaScript / Electron       | Módulos, importações, source maps, rotas, IPC e relações com complementos nativos                                       | Node.js e npm; [análise de aplicativos](docs/javascript-application-workflows.md)                                                         |
| Sites                       | Estrutura da página, scripts, observações de rede e capturas de tela solicitadas                                        | Um navegador da família Chrome; [análise do navegador](docs/browser-observation.md)                                             |
| Capturas de rede salvas     | Requisições, respostas, payloads acessíveis e localizações de origem                                                    | HAR; mitmdump no Linux para capturas no formato nativo do mitmproxy; [guia de capturas](docs/web-network-captures.md)                 |
| Assemblies .NET             | Metadados, instruções CIL, dependências nativas declaradas e comparações de builds                                      | Inspeção estática; [guia de código gerenciado](docs/managed-code-analysis.md)                                                         |
| APKs Android                | Declarações do manifesto, classes, métodos descompilados e referências                                                  | JADX sem interface gráfica e um JDK completo no Linux/macOS/Windows x64; [guia de Android](docs/android-analysis.md)                  |
| Dispositivos Android        | Dispositivos, pacotes, processos, logs, despejos, capturas de tela e transferências de APK/arquivos                     | adb fornecido pelo chamador (emulador ou aparelho); [guia de ADB](docs/adb-device-analysis.md)                                        |
| Projetos JEB                | Unidades de projeto do motor, hashes de artefatos e pseudocódigo de tipos/métodos                                       | Um cliente JEB iniciado pelo chamador servindo MCP, selecionado com LEFON_JEB_MCP_URL; [guia de JEB](docs/jeb-analysis.md)              |
| Recursos do Android         | Manifesto decodificado, tabelas de strings, idiomas e fatos de versão                                                   | Lançador do Apktool fornecido pelo chamador; [guia de recursos](docs/apktool-resource-analysis.md)                                    |
| Firmware                    | Regiões, resultados de extração e encaminhamentos à análise nativa                                                      | Binwalk / Unblob no Linux; [guia de firmware](docs/firmware-analysis.md)                                                              |
| Pacotes e recursos          | Inventários de arquivos, digests, plists, estrutura de bundles Apple e recursos extraídos                               | [Guia de artefatos e JavaScript](docs/javascript-artifact-reconstruction.md), [aplicativos Apple](docs/apple-application-analysis.md) |
| Comportamento de processos  | Saída do terminal, interações, observações de encerramento e do sistema de arquivos, e comparações entre execuções      | Linux/macOS com PTY nativo; [captura de processos](docs/process-capture.md)                                                           |

A inspeção estática de JavaScript e .NET lê os arquivos fornecidos sem executar o aplicativo. A captura em execução inicia o alvo selecionado ou interage com ele usando as permissões do seu usuário; cada guia descreve seus efeitos.

<a id="choosing-a-deep-analysis-provider"></a>

Os formatos nativos e os sistemas anfitriões compatíveis variam por provedor. Consulte [configuração do Hopper e Ghidra](docs/installation.md#hopper), o [guia do IDA](docs/ida-provider.md) e o [suporte experimental ao Ghidra no Windows](docs/windows-ghidra-p0.md). O Ghidra também oferece [análise de DOS de 16 bits](docs/ghidra-dos.md). Para selecionar um provedor, consulte o [guia da CLI](docs/cli.md#choose-a-provider). Verifique a [disponibilidade nas versões](docs/installation.md#released-package-and-main) das funcionalidades adicionadas após a versão mais recente no npm.

## Casos de uso

[![Ilustrações dos estudos de panoramização de áudio do DX-Ball, da ponte da área de transferência do Notion e do anel de projéteis do TH04](docs/assets/lefon-showcases.png)](website/public/showcase/)

### DX-Ball: reconstruir um cálculo de panorâmica de áudio

Siga uma chamada de áudio até a função auxiliar que converte posição em panorâmica, inspecione as instruções e transforme pseudocódigo incompleto em C. A reconstrução passa em 3.205 casos com o x86 original e reproduz todos os 63 bytes da função compilada.

[Estudo de caso no repositório](website/public/showcase/dx-ball/) · [Repositório da reconstrução](https://github.com/N0zoM1z0/dx-ball)

### Notion: rastrear a ponte da área de transferência do Electron

Encontre a API da área de transferência do renderizador, siga-a por preload e IPC até o processo principal e inspecione o formato da área de transferência com seus dados de formatação.

[Estudo de caso no repositório](website/public/showcase/notion/)

### TH04: recuperar o cálculo de um anel de projéteis no DOS

Inspecione as instruções de 16 bits do jogo original para PC-98, recupere os cálculos de ângulos fixos e direcionados e compare o C++ reconstruído com a saída do compilador da época.

[Estudo de caso no repositório](website/public/showcase/th04/) · [Repositório da reconstrução](https://github.com/N0zoM1z0/th04)

Se você usou a Lefon em algo interessante, gostaríamos de conhecer. Compartilhe seu caso em uma [issue](https://github.com/mkbraion/lefon-reverse-engineering/issues) ou um [pull request](https://github.com/mkbraion/lefon-reverse-engineering/pulls), incluindo o alvo, sua pergunta, como a Lefon ajudou e o que descobriu.

## Perguntas frequentes

<details>
<summary><strong>Quais agentes podem usar a Lefon?</strong></summary>

Qualquer agente que ofereça suporte a servidores MCP locais. A configuração prepara os [agentes compatíveis](docs/installation.md#supported-agents); outros clientes podem usar o [registro manual do MCP](docs/installation.md#mcp-registry).

</details>

<details>
<summary><strong>Preciso do Hopper, Ghidra ou IDA?</strong></summary>

A análise nativa aprofundada usa um desses motores. A inspeção estática de JavaScript e .NET funciona sem um motor de análise nativa. A configuração pode instalar o Hopper após aprovação; Ghidra e IDA usam as instalações existentes. Consulte [configuração dos provedores](docs/installation.md#hopper).

</details>

<details>
<summary><strong>Preciso iniciar o Hopper antes?</strong></summary>

O Lefon inicia o Hopper quando uma operação precisa dele. No macOS, um diálogo na primeira execução pode pedir que você escolha o modo de demonstração ou ative a licença. Consulte [inicialização do Hopper e solução de problemas](docs/installation.md#launcher-paths-and-troubleshooting).

</details>

<details>
<summary><strong>O que faz a instalação da skill pelo skills.sh?</strong></summary>

A skill fornece instruções de investigação ao seu agente. Use `npx lefon-reverse-engineering setup` para registrar o servidor MCP da Lefon e instalar as instruções correspondentes, depois reinicie seu agente. Consulte [instalação apenas da skill](docs/installation.md#skill-only-installation).

</details>

<details>
<summary><strong>Que código a Lefon retorna?</strong></summary>

A análise nativa retorna pseudocódigo e assembly. A análise de JavaScript/Electron recupera módulos e suas relações. Seu agente usa esses resultados para escrever e testar uma implementação; os [casos de uso](#casos-de-uso) apresentam exemplos completos.

</details>

<details>
<summary><strong>A Lefon envia meu aplicativo para algum servidor?</strong></summary>

A Lefon analisa os alvos localmente. Seu agente recebe os resultados das ferramentas, e o provedor do modelo tem sua própria política de dados.

</details>

<details>
<summary><strong>O que devo fazer se encontrar um bug?</strong></summary>

Atualize primeiro; uma versão recente pode já ter corrigido o problema.

Para uma CLI instalada pelo npm:

```bash
lefon update
```

Para configurar o agente por `npx`:

```bash
npx lefon-reverse-engineering@latest setup
```

Se você usa um agente, conclua a [atualização da configuração](#atualize-a-lefon) e reinicie-o. Tente executar a mesma tarefa novamente. Se o problema persistir, [abra uma issue](https://github.com/mkbraion/lefon-reverse-engineering/issues) com sua versão da Lefon, o tipo de alvo, os passos para reproduzir e a saída do erro.

</details>

## Documentação

Comece pelo [Guia Completo em Português](docs/pt-BR/GUIA_COMPLETO.md). Para opções exatas, pré-requisitos e contratos dos resultados:

- [Instalação e configuração](docs/installation.md): registro de agentes, configuração de provedores, atualizações e desinstalação.
- [Prontidão e solução de problemas](docs/installation.md#check-readiness-for-your-task): diagnóstico de um agente ou motor de análise específico.
- [CLI e Evidence](docs/cli.md): comandos, seleção de provedores, snapshots, importação/exportação e status de saída.
- [Contratos MCP](docs/mcp-contracts.md) e [prompts para agentes](docs/mcp-prompts.md): resultados das ferramentas, sessões e investigações guiadas.
- [Catálogo de ferramentas](docs/mcp-contracts.md#generated-catalog): inventário de ferramentas, provedores e comandos da CLI gerado durante o build.
- [Roadmap](docs/roadmap.md): trabalho planejado e acompanhamento das capacidades.

Relate vulnerabilidades conforme [SECURITY.md](SECURITY.md).


## Aviso legal

A Lefon fornece ferramentas para pesquisa, análise e reconstrução por engenharia reversa dentro da lei. Você é responsável por obter as autorizações necessárias e cumprir as leis aplicáveis. O projeto não apoia usos ilegais ou não autorizados.

## Contribuir

Sua ajuda com a Lefon é bem-vinda! [Abra uma issue](https://github.com/mkbraion/lefon-reverse-engineering/issues) para relatar um bug ou sugerir uma funcionalidade, ou [envie um pull request](https://github.com/mkbraion/lefon-reverse-engineering/pulls) para melhorar o código ou a documentação.

Consulte [CONTRIBUTING.md](CONTRIBUTING.md) para configurar o ambiente de desenvolvimento e as verificações, o [guia de testes](docs/testing.md) para os fluxos de verificação e o [mapa da arquitetura](docs/architecture.mermaid) para a estrutura do projeto.

## Licença

[MIT](LICENSE)

---

## Créditos, origem e licença

**Lefon Engenharia Reversa** é a versão brasileira, com documentação, identidade e adaptações mantidas por **Nelson Neto (@mkbraion)**.

Este repositório contém código derivado do projeto original criado por **morluto**, distribuído sob a **Licença MIT**. A atribuição original é preservada no arquivo [`LICENSE`](LICENSE), conforme exigido pela licença. Consulte também [`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md) para os avisos de terceiros.

As modificações e a documentação específica da versão Lefon são © 2026 Nelson Neto, respeitados os direitos e licenças dos componentes de terceiros.
