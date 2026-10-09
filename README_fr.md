<div align="center">

[English](LEFONDME.md) · [简体中文](LEFONDME_zh.md) · [繁體中文](LEFONDME_zh-TW.md) · [日本語](LEFONDME_ja.md) · [한국어](LEFONDME_ko.md) · [Türkçe](LEFONDME_tr.md) · [Русский](LEFONDME_ru.md) · [Tiếng Việt](LEFONDME_vi.md) · [ไทย](LEFONDME_th.md) · [Deutsch](LEFONDME_de.md) · [Español](LEFONDME_es.md) · **Français** · [Українська](LEFONDME_uk.md) · [Polski](LEFONDME_pl.md) · [Português (Brasil)](LEFONDME_pt-BR.md) · [العربية](LEFONDME_ar.md) · [فارسی](LEFONDME_fa.md) · [Bahasa Indonesia](LEFONDME_id.md) · [Italiano](LEFONDME_it.md)

# LEFON : rétro-ingénierie de tout

### Un seul MCP pour la rétro-ingénierie des binaires, des applications et du comportement à l'exécution.

**Repérez une fonctionnalité qui vous plaît. Comprenez son fonctionnement, jusqu'au niveau du binaire.**

[![npm version](https://img.shields.io/npm/v/lefon-reverse-engineering?style=flat-square&color=cb3837)](https://www.npmjs.com/package/lefon-reverse-engineering)
[![CI](https://img.shields.io/github/actions/workflow/status/mkbraion/lefon-reverse-engineering/ci.yml?branch=main&style=flat-square&label=CI)](https://github.com/mkbraion/lefon-reverse-engineering/actions/workflows/ci.yml)
[![MCP tool catalog](https://img.shields.io/badge/MCP-tool_catalog-5c4ee5?style=flat-square)](docs/mcp-contracts.md#generated-catalog)
[![Node.js requirements](https://img.shields.io/badge/Node.js-requirements-339933?style=flat-square&logo=nodedotjs&logoColor=white)](#current-status)
[![skills.sh](https://skills.sh/b/mkbraion/lefon-reverse-engineering?style=flat-square)](https://skills.sh/mkbraion/lefon-reverse-engineering/reverse-engineer-anything)
[![MIT license](https://img.shields.io/badge/license-MIT-f4c430?style=flat-square)](LICENSE)
[![Discord](https://img.shields.io/discord/1556595354999332884?logo=discord&logoColor=white&label=Discord&color=5865F2)](https://discord.gg/GkcryMnJDM)

<a href="https://trendshift.io/repositories/82054?utm_source=repository-badge&amp;utm_medium=badge&amp;utm_campaign=badge-repository-82054" target="_blank" rel="noopener noreferrer"><img src="https://trendshift.io/api/badge/repositories/82054" alt="mkbraion%2Flefon-reverse-engineering | Trendshift" width="250" height="55"/></a>

**[Site web](https://mkbraion.github.io/lefon-reverse-engineering/) · [Guides](https://mkbraion.github.io/lefon-reverse-engineering/guides/) · [Études de cas](https://mkbraion.github.io/lefon-reverse-engineering/showcase/)**

[Démarrage rapide](#démarrage-rapide) · [Comment fonctionne LEFON](#comment-fonctionne-lefon) · [Ce que vous pouvez analyser](#ce-que-vous-pouvez-analyser) · [Études de cas](#études-de-cas) · [Questions fréquentes](#questions-fréquentes) · [Documentation](#documentation)

<code>npx lefon-reverse-engineering setup</code>

<br />

<img src="docs/assets/lefon-hopper-analysis.png" alt="LEFON lance son pont d'analyse dans Hopper pendant l'inspection d'un binaire natif" width="1200" />

<br /><br />

<table aria-label="LEFON community">
<tr>
<td align="center" width="360">
  <a href="https://discord.gg/GkcryMnJDM">
    <img src="docs/assets/discord.svg" height="42" alt="Discord" /><br />
    <strong>Rejoignez la communauté de rétro-ingénierie</strong>
  </a><br />
  <sub>Discord · Questions et réponses · Partage de projets</sub>
</td>
</tr>
</table>

<br />

</div>

---

Vous avez repéré dans une application une fonctionnalité que vous aimeriez avoir dans votre propre produit ? Demandez à votre agent de l'étudier avec LEFON. Il peut inspecter l'application sans son code source, expliquer le fonctionnement de la fonctionnalité, présenter les preuves et en construire une version pour votre projet.

LEFON connecte votre agent à des outils d'inspection de binaires natifs, d'applications JavaScript et Electron, d'assemblys .NET et de sites web. Les mêmes outils sont aussi disponibles depuis votre terminal. L'analyse s'exécute localement, et chaque conclusion s'accompagne des preuves et des limites sur lesquelles elle repose.

Setup enregistre LEFON auprès de votre agent et installe les instructions de workflow correspondantes. L'analyse native peut utiliser une installation existante de Hopper ou de Ghidra ; Setup peut aussi installer Hopper après votre accord. L'analyse statique JavaScript ne nécessite aucun de ces moteurs.

> **[Visitez le site web de LEFON](https://mkbraion.github.io/lefon-reverse-engineering/)** pour les instructions d'installation, des guides illustrés et des études de cas réelles.

## Démarrage rapide

### Configurer votre agent

Une fois Node.js et npm installés, exécutez :

```bash
npx lefon-reverse-engineering setup
```

Choisissez vos agents, vérifiez les modifications proposées et approuvez-les. Setup ajoute le serveur MCP de LEFON et les instructions de workflow correspondantes, et sauvegarde la configuration existante. Redémarrez ensuite votre agent.

Setup prend en charge Claude Code, Codex, Cursor, Gemini CLI, Grok Build et [d'autres agents](docs/installation.md#supported-agents). Consultez [Installation et configuration](docs/installation.md) pour la configuration des fournisseurs et l'enregistrement MCP manuel.

### Interroger votre agent

```text
Comprends comment fonctionne la recherche dans l'app Notes, montre-moi les preuves
et construis une fonctionnalité similaire pour mon projet.
```

Remplacez Notes par votre application cible et la fonctionnalité que vous voulez comprendre.

### Utiliser le terminal

Inspectez le répertoire extrait ou l'archive ASAR d'une application JavaScript/Electron :

```bash
npx -y lefon-reverse-engineering@latest analyze-javascript-application /absolute/path/to/app --json
```

Le résultat comprend les modules, les imports, les frontières Electron et les preuves associées. Remplacez le chemin par votre cible, par exemple `"D:/apps/example"` sous Windows.

Pour installer la commande `lefon` pour un usage régulier :

```bash
npm install --global lefon-reverse-engineering
lefon --help
```

Pour l'analyse native, configurez d'abord un fournisseur. Consultez le [guide CLI et Evidence](docs/cli.md) pour les commandes natives, le choix du fournisseur, les snapshots et l'utilisation dans des scripts.

### Mettre à jour LEFON

LEFON évolue rapidement, et les nouvelles versions apportent fréquemment des corrections de bugs. Maintenez votre installation à jour.

Pour une CLI installée avec npm :

```bash
lefon update
```

Pour actualiser les enregistrements de vos agents et le skill, exécutez la commande setup affichée par la mise à jour.

Si vous utilisez `npx`, mettez à jour la configuration de votre agent avec :

```bash
npx lefon-reverse-engineering@latest setup
```

Vérifiez les modifications proposées par Setup et redémarrez votre agent. Pour des commandes CLI ponctuelles, utilisez `npx lefon-reverse-engineering@latest` suivi de la commande.

## Comment fonctionne LEFON

Votre agent appelle LEFON via MCP pour inspecter la cible et suivre le code pertinent. LEFON renvoie ses constatations avec les preuves correspondantes. L'agent s'en sert pour poser des questions complémentaires, expliquer le comportement, ou écrire et tester une implémentation. Les commandes CLI utilisent les mêmes workflows.

![Flux d'investigation de LEFON : votre agent pose une question sur une cible locale, LEFON l'inspecte et la trace avec des outils d'analyse, et l'agent utilise le code, les références et les inconnues renvoyés pour expliquer, implémenter et tester.](website/public/assets/figures/lefon-investigation-flow.svg)

[Ouvrir la figure en taille réelle](website/public/assets/figures/lefon-investigation-flow.svg).

<a id="current-status"></a>

## Ce que vous pouvez analyser

LEFON nécessite Node.js 22.x (>=22.19), 24.x (>=24.11) ou 26+, ainsi que npm. Les outils supplémentaires et les hôtes pris en charge dépendent de la cible :

| Cible                        | Ce que LEFON renvoie                                                                                          | Prérequis et guide                                                                                                                    |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Binaires natifs              | Pseudo-code, assembleur, chaînes, symboles, appels et références                                            | Hopper, Ghidra ou IDA ; [analyse native](https://mkbraion.github.io/lefon-reverse-engineering/guides/native/)                                                            |
| Structure ELF hors ligne     | Sections, segments, symboles et relocations d'origine, et protections statiques candidates                  | pwntools fourni par l'utilisateur sous Linux x64 ; [diagnostics binaires](docs/binary-diagnostics.md)                                 |
| Bytecode EVM                 | Sélecteurs de dispatch, offsets en octets, arguments inférés et mutabilité                                  | Fichier local brut ou hexadécimal sous Linux x64 ; [guide EVM hors ligne](docs/evm-bytecode.md)                                       |
| Crashs Linux enregistrés     | Notes brutes, registres et signaux de chaque thread enregistré, et correspondances de mappings facultatives | pwntools fourni par l'utilisateur sous Linux x64 ; GDB/pwndbg en option ; [crashs enregistrés](docs/recorded-crashes.md)              |
| JavaScript / Electron        | Modules, imports, source maps, routes, IPC et relations avec les modules natifs                             | Node.js et npm ; [analyse d'applications](https://mkbraion.github.io/lefon-reverse-engineering/guides/javascript/)                                                       |
| Sites web                    | Structure des pages, scripts, observations réseau et captures d'écran demandées                             | Un navigateur de la famille Chrome ; [analyse du navigateur](https://mkbraion.github.io/lefon-reverse-engineering/guides/browser/)                                       |
| Captures réseau enregistrées | Requêtes, réponses, payloads exposés et emplacements dans le code source                                    | HAR ; mitmdump sous Linux pour les captures mitmproxy natives ; [guide des captures](docs/web-network-captures.md)                    |
| Assemblys .NET               | Métadonnées, instructions CIL, dépendances natives déclarées et comparaisons de builds                      | Inspection statique ; [guide du code managé](docs/managed-code-analysis.md)                                                           |
| APK Android                  | Déclarations du manifeste, classes, méthodes décompilées et références                                      | JADX headless et un JDK complet sous Linux/macOS/Windows x64 ; [guide Android](docs/android-analysis.md)                              |
| Appareils Android            | Appareils, paquets, processus, journaux, dumps, captures d'écran et transferts d'APK/fichiers               | adb fourni par l'appelant (émulateur ou appareil) ; [guide ADB](docs/adb-device-analysis.md)                                          |
| Projets JEB                  | Unités de projet fournies par le moteur, condensés d'artefacts et pseudo-code de types/méthodes             | Un client JEB démarré par l'appelant servant MCP, sélectionné via LEFON_JEB_MCP_URL ; [guide JEB](docs/jeb-analysis.md)                 |
| Ressources Android           | Manifeste décodé, tables de chaînes, langues et faits de version                                            | Lanceur Apktool fourni par l'appelant ; [guide des ressources](docs/apktool-resource-analysis.md)                                     |
| Firmware                     | Régions, résultats d'extraction et passage de relais vers l'analyse native                                  | Binwalk / Unblob sous Linux ; [guide firmware](docs/firmware-analysis.md)                                                             |
| Paquets et ressources        | Inventaires de fichiers, empreintes, plists, anatomie des bundles Apple et ressources extraites             | [Guide artefacts et JavaScript](docs/javascript-artifact-reconstruction.md), [applications Apple](docs/apple-application-analysis.md) |
| Comportement des processus   | Sortie du terminal, interactions, code de sortie, observations du système de fichiers et comparaisons       | Linux/macOS avec un PTY natif ; [capture de processus](docs/process-capture.md)                                                       |

L'inspection statique JavaScript et .NET lit les fichiers fournis sans exécuter l'application. La capture à l'exécution lance la cible choisie ou interagit avec elle avec vos permissions utilisateur ; chaque guide d'exécution décrit ses effets.

<a id="choosing-a-deep-analysis-provider"></a>

Les formats natifs et les hôtes pris en charge varient selon le fournisseur. Consultez [la configuration de Hopper et Ghidra](docs/installation.md#hopper), le [guide IDA](docs/ida-provider.md) et [la prise en charge expérimentale de Ghidra sous Windows](docs/windows-ghidra-p0.md). Ghidra prend aussi en charge [l'analyse DOS 16 bits](docs/ghidra-dos.md). Pour les gros binaires, augmentez son délai de démarrage avec `LEFON_GHIDRA_STARTUP_TIMEOUT_MS`. Pour le choix du fournisseur, consultez le [guide CLI](docs/cli.md#choose-a-provider). Vérifiez la [disponibilité dans les versions publiées](docs/installation.md#released-package-and-main) pour les fonctionnalités ajoutées depuis la dernière version npm.

## Études de cas

[![Illustrations des études sur la spatialisation sonore de DX-Ball, le pont du presse-papiers de Notion et le cercle de projectiles de TH04](docs/assets/lefon-showcases.png)](https://mkbraion.github.io/lefon-reverse-engineering/showcase/)

### DX-Ball : reconstruire un calcul de panoramique sonore

Suivez un appel sonore jusqu'à la fonction qui convertit une position en panoramique, inspectez ses instructions et transformez un pseudo-code incomplet en C. La reconstruction réussit 3 205 cas issus du x86 d'origine et reproduit à l'identique les 63 octets de la fonction compilée.

[Lire l'étude de cas](https://mkbraion.github.io/lefon-reverse-engineering/showcase/dx-ball/) · [Dépôt de la reconstruction](https://github.com/N0zoM1z0/dx-ball)

### Notion : suivre le pont du presse-papiers d'Electron

Trouvez l'API de presse-papiers du renderer, suivez-la à travers le preload et l'IPC jusqu'au processus principal, puis inspectez le format de presse-papiers enrichi.

[Lire l'étude de cas](https://mkbraion.github.io/lefon-reverse-engineering/showcase/notion/)

### TH04 : retrouver un calcul d'anneau de projectiles sous DOS

Inspectez les instructions 16 bits du jeu PC-98 d'origine, retrouvez les calculs d'angles fixes et visés, et comparez le C++ reconstruit avec la sortie du compilateur d'époque.

[Lire l'étude de cas](https://mkbraion.github.io/lefon-reverse-engineering/showcase/th04/) · [Dépôt de la reconstruction](https://github.com/N0zoM1z0/th04)

Si vous avez utilisé LEFON sur un projet intéressant, nous serions ravis de le découvrir. Partagez votre cas dans une [issue](https://github.com/mkbraion/lefon-reverse-engineering/issues) ou une [pull request](https://github.com/mkbraion/lefon-reverse-engineering/pulls), en précisant la cible, votre question, la manière dont LEFON vous a aidé et ce que vous avez découvert.

## Questions fréquentes

<details>
<summary><strong>Quels agents peuvent utiliser LEFON ?</strong></summary>

Tout agent compatible avec les serveurs MCP locaux. Setup configure les [agents pris en charge](docs/installation.md#supported-agents) ; les autres clients peuvent utiliser [l'enregistrement MCP manuel](docs/installation.md#mcp-registry).

</details>

<details>
<summary><strong>Ai-je besoin de Hopper, Ghidra ou IDA ?</strong></summary>

L'analyse native approfondie utilise l'un d'eux. L'inspection statique JavaScript et .NET fonctionne sans moteur d'analyse native. Setup peut installer Hopper après votre accord ; Ghidra et IDA utilisent vos installations existantes. Consultez [la configuration des fournisseurs](docs/installation.md#hopper).

</details>

<details>
<summary><strong>Dois-je lancer Hopper au préalable ?</strong></summary>

LEFON lance Hopper lorsqu'une opération en a besoin. Sous macOS, une boîte de dialogue de premier lancement peut vous demander de choisir le mode démo ou d'activer votre licence. Consultez [Démarrage et dépannage de Hopper](docs/installation.md#launcher-paths-and-troubleshooting).

</details>

<details>
<summary><strong>Que fait l'installation du skill depuis skills.sh ?</strong></summary>

Le skill fournit des instructions d'investigation à votre agent. Utilisez `npx lefon-reverse-engineering setup` pour enregistrer le serveur MCP de LEFON et installer les instructions correspondantes, puis redémarrez votre agent. Consultez [l'installation du skill seul](docs/installation.md#skill-only-installation).

</details>

<details>
<summary><strong>Quel code LEFON renvoie-t-il ?</strong></summary>

L'analyse native renvoie du pseudo-code et de l'assembleur. L'analyse JavaScript/Electron récupère les modules et leurs relations. Votre agent s'appuie sur ces résultats pour écrire et tester une implémentation ; les [études de cas](#études-de-cas) en donnent des exemples concrets.

</details>

<details>
<summary><strong>LEFON envoie-t-il mon application en ligne ?</strong></summary>

LEFON analyse les cibles localement. Votre agent reçoit les résultats des outils, et son fournisseur de modèle applique sa propre politique de données.

</details>

<details>
<summary><strong>Que faire si je rencontre un bug ?</strong></summary>

Commencez par mettre à jour ; une version récente l'a peut-être déjà corrigé.

Pour une CLI installée avec npm :

```bash
lefon update
```

Pour une configuration d'agent via `npx` :

```bash
npx lefon-reverse-engineering@latest setup
```

Si vous utilisez un agent, terminez l'[actualisation de la configuration](#mettre-à-jour-lefon) et redémarrez-le. Relancez la même tâche. Si le problème persiste, [ouvrez une issue](https://github.com/mkbraion/lefon-reverse-engineering/issues) en indiquant votre version de LEFON, le type de cible, les étapes pour reproduire le problème et la sortie d'erreur.

</details>

## Documentation

Commencez par les [guides pas à pas](https://mkbraion.github.io/lefon-reverse-engineering/guides/) du site web. Pour les options exactes, les prérequis et les contrats de résultats :

- [Installation et configuration](docs/installation.md) : enregistrement des agents, configuration des fournisseurs, mises à jour et désinstallation.
- [Vérification et dépannage](docs/installation.md#check-readiness-for-your-task) : diagnostiquer un agent ou un moteur d'analyse précis.
- [CLI et Evidence](docs/cli.md) : commandes, choix du fournisseur, snapshots, import/export et codes de sortie.
- [Contrats MCP](docs/mcp-contracts.md) et [prompts pour agents](docs/mcp-prompts.md) : résultats des outils, sessions et investigations guidées.
- [Catalogue des outils](docs/mcp-contracts.md#generated-catalog) : inventaire des outils, fournisseurs et commandes CLI, généré lors du build.
- [Feuille de route](docs/roadmap.md) : travaux prévus et suivi des capacités.

Signalez les vulnérabilités via [SECURITY.md](SECURITY.md).

## Historique des étoiles

🎉 **50 000 étoiles GitHub — merci !**

Merci à toutes les personnes qui utilisent LEFON, signalent des bugs, proposent des fonctionnalités, testent les builds et contribuent des correctifs.

<a href="https://www.star-history.com/?repos=mkbraion%2Flefon-reverse-engineering&amp;type=date">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/chart?repos=mkbraion/lefon-reverse-engineering&amp;type=date&amp;theme=dark&amp;legend=top-left" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/chart?repos=mkbraion/lefon-reverse-engineering&amp;type=date" />
    <img alt="Historique des étoiles GitHub de LEFON" src="https://api.star-history.com/chart?repos=mkbraion/lefon-reverse-engineering&amp;type=date" />
  </picture>
</a>

## Avertissement

LEFON fournit des outils destinés à la recherche, à l'analyse et à la reconstruction légales en rétro-ingénierie. Il vous appartient d'obtenir toute autorisation nécessaire et de respecter les lois applicables. Le projet n'encourage aucune utilisation illégale ou non autorisée.

## Contribuer

Votre aide sur LEFON est la bienvenue ! [Ouvrez une issue](https://github.com/mkbraion/lefon-reverse-engineering/issues) pour signaler un bug ou proposer une fonctionnalité, ou [envoyez une pull request](https://github.com/mkbraion/lefon-reverse-engineering/pulls) pour améliorer le code ou la documentation.

Consultez [CONTRIBUTING.md](CONTRIBUTING.md) pour l'environnement de développement et les vérifications, la page [tests](docs/testing.md) pour les filières de vérification, et la [carte de l'architecture](docs/architecture.mermaid) pour la structure du projet.

## Licence

[MIT](LICENSE)
