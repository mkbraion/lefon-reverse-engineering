<div align="center">

[English](LEFONDME.md) · [简体中文](LEFONDME_zh.md) · [繁體中文](LEFONDME_zh-TW.md) · [日本語](LEFONDME_ja.md) · [한국어](LEFONDME_ko.md) · [Türkçe](LEFONDME_tr.md) · [Русский](LEFONDME_ru.md) · [Tiếng Việt](LEFONDME_vi.md) · [ไทย](LEFONDME_th.md) · **Deutsch** · [Español](LEFONDME_es.md) · [Français](LEFONDME_fr.md) · [Українська](LEFONDME_uk.md) · [Polski](LEFONDME_pl.md) · [Português (Brasil)](LEFONDME_pt-BR.md) · [العربية](LEFONDME_ar.md) · [فارسی](LEFONDME_fa.md) · [Bahasa Indonesia](LEFONDME_id.md) · [Italiano](LEFONDME_it.md)

# LEFON: Alles reverse-engineeren

### Ein MCP für das Reverse Engineering von Binärdateien, Anwendungen und Laufzeitverhalten.

**Eine Funktion gefällt dir? Verstehe, wie sie funktioniert – bis hinunter auf die Binärebene.**

[![npm version](https://img.shields.io/npm/v/lefon-reverse-engineering?style=flat-square&color=cb3837)](https://www.npmjs.com/package/lefon-reverse-engineering)
[![CI](https://img.shields.io/github/actions/workflow/status/mkbraion/lefon-reverse-engineering/ci.yml?branch=main&style=flat-square&label=CI)](https://github.com/mkbraion/lefon-reverse-engineering/actions/workflows/ci.yml)
[![MCP tool catalog](https://img.shields.io/badge/MCP-tool_catalog-5c4ee5?style=flat-square)](docs/mcp-contracts.md#generated-catalog)
[![Node.js requirements](https://img.shields.io/badge/Node.js-requirements-339933?style=flat-square&logo=nodedotjs&logoColor=white)](#current-status)
[![skills.sh](https://skills.sh/b/mkbraion/lefon-reverse-engineering?style=flat-square)](https://skills.sh/mkbraion/lefon-reverse-engineering/reverse-engineer-anything)
[![MIT license](https://img.shields.io/badge/license-MIT-f4c430?style=flat-square)](LICENSE)
[![Discord](https://img.shields.io/discord/1556595354999332884?logo=discord&logoColor=white&label=Discord&color=5865F2)](https://discord.gg/GkcryMnJDM)

<a href="https://trendshift.io/repositories/82054?utm_source=repository-badge&amp;utm_medium=badge&amp;utm_campaign=badge-repository-82054" target="_blank" rel="noopener noreferrer"><img src="https://trendshift.io/api/badge/repositories/82054" alt="mkbraion%2Flefon-reverse-engineering | Trendshift" width="250" height="55"/></a>

**[Website](https://mkbraion.github.io/lefon-reverse-engineering/) · [Anleitungen](https://mkbraion.github.io/lefon-reverse-engineering/guides/) · [Fallstudien](https://mkbraion.github.io/lefon-reverse-engineering/showcase/)**

[Schnellstart](#schnellstart) · [So funktioniert LEFON](#so-funktioniert-lefon) · [Was du analysieren kannst](#was-du-analysieren-kannst) · [Fallstudien](#fallstudien) · [Häufige Fragen](#häufige-fragen) · [Dokumentation](#dokumentation)

<code>npx lefon-reverse-engineering setup</code>

<br />

<img src="docs/assets/lefon-hopper-analysis.png" alt="LEFON startet seine Analysebrücke in Hopper und untersucht eine native Binärdatei" width="1200" />

<br /><br />

<table aria-label="LEFON-Community">
<tr>
<td align="center" width="360">
  <a href="https://discord.gg/GkcryMnJDM">
    <img src="docs/assets/discord.svg" height="42" alt="Discord" /><br />
    <strong>Der Reverse-Engineering-Community beitreten</strong>
  </a><br />
  <sub>Discord · Fragen und Antworten · Ergebnisse teilen</sub>
</td>
</tr>
</table>

<br />

</div>

---

Du hast in einer App eine Funktion entdeckt, die du in dein eigenes Produkt übernehmen möchtest? Lass deinen Agenten sie mit LEFON untersuchen. Er kann die App ohne ihren Quellcode analysieren, die Funktionsweise erklären, Belege zeigen und eine passende Umsetzung für dein Projekt entwickeln.

LEFON verbindet deinen Agenten mit Werkzeugen zum Untersuchen nativer Binärdateien, von JavaScript- und Electron-Apps, .NET-Assemblies und Websites. Dieselben Werkzeuge kannst du auch im Terminal nutzen. Die Analyse läuft lokal; die Ergebnisse enthalten die Belege und Einschränkungen hinter jeder Schlussfolgerung.

Die Einrichtung registriert LEFON bei deinem Agenten und installiert passende Workflow-Anweisungen. Für native Analysen kannst du eine vorhandene Hopper- oder Ghidra-Installation verwenden. Mit deiner Zustimmung kann die Einrichtung auch Hopper installieren. Statische JavaScript-Analysen benötigen keines der beiden Programme.

> **[Besuche die LEFON-Website](https://mkbraion.github.io/lefon-reverse-engineering/)** für Einrichtungshinweise, bebilderte Anleitungen und echte Fallstudien.

## Schnellstart

### Deinen Agenten einrichten

Wenn Node.js und npm installiert sind, führe diesen Befehl aus:

```bash
npx lefon-reverse-engineering setup
```

Wähle deine Agenten aus, prüfe die geplanten Änderungen und bestätige sie. Die Einrichtung fügt den MCP-Server von LEFON und passende Workflow-Anweisungen hinzu und sichert vorhandene Konfigurationen. Starte deinen Agenten anschließend neu.

Die Einrichtung unterstützt Claude Code, Codex, Cursor, Gemini CLI, Grok Build und [weitere Agenten](docs/installation.md#supported-agents). Informationen zur Provider-Konfiguration und manuellen MCP-Registrierung findest du unter [Installation und Einrichtung](docs/installation.md).

### Deinen Agenten fragen

```text
Untersuche, wie die Suche in der Notes-App funktioniert, zeige mir die Belege und entwickle eine ähnliche Funktion für mein Projekt.
```

Ersetze Notes durch deine Ziel-App und benenne die Funktion, die du verstehen möchtest.

### Das Terminal verwenden

Untersuche ein entpacktes JavaScript-/Electron-App-Verzeichnis oder eine ASAR-Datei:

```bash
npx -y lefon-reverse-engineering@latest analyze-javascript-application /absolute/path/to/app --json
```

Das Ergebnis enthält Module, Imports, Electron-Grenzen und die zugehörigen Belege. Ersetze den Pfad durch dein Ziel, beispielsweise `"D:/apps/example"` unter Windows.

Für die regelmäßige Nutzung kannst du den Befehl `lefon` installieren:

```bash
npm install --global lefon-reverse-engineering
lefon --help
```

Konfiguriere für native Analysen zuerst einen Provider. Native Befehle, Provider-Auswahl, Snapshots und Skriptnutzung beschreibt der [CLI- und Evidence-Leitfaden](docs/cli.md).

### LEFON aktualisieren

LEFON entwickelt sich schnell weiter; neue Versionen enthalten häufig Fehlerbehebungen. Halte deine Installation aktuell.

Für eine über npm installierte CLI:

```bash
lefon update
```

Um die Agentenregistrierungen und den Skill zu aktualisieren, führe den Einrichtungsbefehl aus, den das Update ausgibt.

Wenn du `npx` verwendest, aktualisiere die Agenteneinrichtung mit:

```bash
npx lefon-reverse-engineering@latest setup
```

Prüfe die Änderungen und starte deinen Agenten neu. Für einzelne CLI-Aufrufe verwende `npx lefon-reverse-engineering@latest`, gefolgt vom gewünschten Befehl.

## So funktioniert LEFON

Dein Agent ruft LEFON über MCP auf, um das Ziel zu untersuchen und relevanten Code zu verfolgen. LEFON liefert Ergebnisse mit ihren Belegen zurück. Der Agent nutzt sie für weitere Fragen, Erklärungen oder zum Schreiben und Testen einer Implementierung. CLI-Befehle verwenden dieselben Workflows.

![LEFON-Untersuchungsablauf: Dein Agent fragt nach einem lokalen Ziel, LEFON untersucht und verfolgt es mit Analysewerkzeugen, und der Agent nutzt den zurückgegebenen Code, Verweise und offene Fragen zum Erklären, Implementieren und Testen.](website/public/assets/figures/lefon-investigation-flow.svg)

[Abbildung in voller Größe öffnen](website/public/assets/figures/lefon-investigation-flow.svg).

<a id="current-status"></a>

## Was du analysieren kannst

LEFON benötigt Node.js 22.x (>=22.19), 24.x (>=24.11) oder 26+ sowie npm. Zusätzliche Werkzeuge und unterstützte Hostsysteme hängen vom Ziel ab:

| Ziel                                | Was LEFON zurückgibt                                                                                              | Voraussetzungen und Anleitung                                                                                                                 |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Native Binärdateien                 | Pseudocode, Assemblercode, Zeichenketten, Symbole, Aufrufe und Verweise                                         | Hopper, Ghidra oder IDA; [native Analyse](https://mkbraion.github.io/lefon-reverse-engineering/guides/native/)                                                                   |
| Offline-ELF-Struktur                | Sektionen, Segmente, ursprüngliche Symbole/Relokationen und mögliche Schutzmaßnahmen aus statischer Analyse     | Vom Aufrufer bereitgestelltes pwntools unter Linux x64; [Binärdiagnostik](docs/binary-diagnostics.md)                                         |
| EVM-Bytecode                        | Dispatch-Selektoren, Byte-Offsets, abgeleitete Argumente und Veränderbarkeit des Zustands                       | Lokale Eingabe mit Rohbytes oder Hexdarstellung unter Linux x64; [Offline-EVM-Leitfaden](docs/evm-bytecode.md)                                |
| Aufgezeichnete Linux-Abstürze       | Unverarbeitete Note-Einträge, Register/Signale aller aufgezeichneten Threads und optionale Zuordnungskandidaten | Vom Aufrufer bereitgestelltes pwntools unter Linux x64; optional GDB/pwndbg; [aufgezeichnete Abstürze](docs/recorded-crashes.md)              |
| JavaScript / Electron               | Module, Imports, Source Maps, Routen, IPC und Beziehungen zu nativen Add-ons                                    | Node.js und npm; [Anwendungsanalyse](https://mkbraion.github.io/lefon-reverse-engineering/guides/javascript/)                                                                    |
| Websites                            | Seitenstruktur, Skripte, Netzwerkbeobachtungen und angeforderte Screenshots                                     | Ein Browser aus der Chrome-Familie; [Browseranalyse](https://mkbraion.github.io/lefon-reverse-engineering/guides/browser/)                                                       |
| Gespeicherte Netzwerkaufzeichnungen | Anfragen, Antworten, zugängliche Nutzdaten und Quellpositionen                                                  | HAR; mitmdump unter Linux für Aufzeichnungen im nativen mitmproxy-Format; [Leitfaden zu Netzwerkaufzeichnungen](docs/web-network-captures.md) |
| .NET-Assemblies                     | Metadaten, CIL-Anweisungen, deklarierte native Abhängigkeiten und Build-Vergleiche                              | Statische Untersuchung; [Leitfaden für verwalteten Code](docs/managed-code-analysis.md)                                                       |
| Android-APKs                        | Manifest-Deklarationen, Klassen, dekompilierte Methoden und Verweise                                            | JADX ohne grafische Oberfläche und ein vollständiges JDK unter Linux/macOS/Windows x64; [Android-Leitfaden](docs/android-analysis.md)         |
| Android-Geräte                      | Geräte, Pakete, Prozesse, Logs, Dumps, Bildschirmaufnahmen sowie APK- und Dateiübertragungen                    | Vom Aufrufer bereitgestelltes adb (Emulator oder Gerät); [ADB-Leitfaden](docs/adb-device-analysis.md)                                         |
| JEB-Projekte                        | Engine-gestützte Projekteinheiten, Artefakt-Prüfsummen und Pseudokode von Typen/Methoden                        | Ein vom Aufrufer gestarteter JEB-Client mit MCP, ausgewählt über LEFON_JEB_MCP_URL; [JEB-Leitfaden](docs/jeb-analysis.md)                       |
| Android-Ressourcen                  | Dekodiertes Manifest, String-Tabellen, Sprachen und Versionsfakten                                              | Vom Aufrufer bereitgestellter Apktool-Starter; [Ressourcen-Leitfaden](docs/apktool-resource-analysis.md)                                      |
| Firmware                            | Bereiche, Extraktionsergebnisse und Übergaben an die native Analyse                                             | Binwalk / Unblob unter Linux; [Firmware-Leitfaden](docs/firmware-analysis.md)                                                                 |
| Pakete und Ressourcen               | Dateiinventare, Hashwerte, plists, Aufbau von Apple-Bundles und extrahierte Ressourcen                          | [Artefakt- und JavaScript-Leitfaden](docs/javascript-artifact-reconstruction.md), [Apple-Anwendungen](docs/apple-application-analysis.md)     |
| Prozessverhalten                    | Terminalausgabe, Interaktionen, Beobachtungen zu Prozessende und Dateisystem sowie Laufvergleiche               | Linux/macOS mit nativer PTY; [Prozessaufzeichnung](docs/process-capture.md)                                                                   |

Statische JavaScript- und .NET-Untersuchungen lesen die bereitgestellten Dateien, ohne die Anwendung auszuführen. Laufzeitaufzeichnungen führen das gewählte Ziel mit deinen Benutzerrechten aus oder interagieren damit; die jeweiligen Anleitungen beschreiben die Auswirkungen.

<a id="choosing-a-deep-analysis-provider"></a>

Native Formate und unterstützte Hostsysteme unterscheiden sich je nach Provider. Siehe [Hopper- und Ghidra-Einrichtung](docs/installation.md#hopper), den [IDA-Leitfaden](docs/ida-provider.md) und die [experimentelle Ghidra-Unterstützung unter Windows](docs/windows-ghidra-p0.md). Ghidra unterstützt auch [16-Bit-DOS-Analyse](docs/ghidra-dos.md). Die Provider-Auswahl beschreibt der [CLI-Leitfaden](docs/cli.md#choose-a-provider). Prüfe die [Verfügbarkeit in Releases](docs/installation.md#released-package-and-main) für Funktionen, die seit der neuesten npm-Version hinzugekommen sind.

## Fallstudien

[![Illustrationen der Fallstudien zu DX-Balls Klangbalance, Notions Zwischenablage-Brücke und TH04s Geschossring](docs/assets/lefon-showcases.png)](https://mkbraion.github.io/lefon-reverse-engineering/showcase/)

### DX-Ball: Eine Stereo-Panning-Berechnung rekonstruieren

Verfolge einen Sound-Aufruf zur Hilfsfunktion, die Positionen in Panning-Werte umrechnet, untersuche die Anweisungen und überführe unvollständigen Pseudocode in C. Die Rekonstruktion besteht 3.205 Tests mit dem ursprünglichen x86-Code und reproduziert alle 63 Bytes der kompilierten Funktion.

[Fallstudie lesen](https://mkbraion.github.io/lefon-reverse-engineering/showcase/dx-ball/) · [Rekonstruktionsrepository](https://github.com/N0zoM1z0/dx-ball)

### Notion: Die Electron-Zwischenablagebrücke verfolgen

Finde die Zwischenablage-API des Renderers, verfolge sie über preload und IPC bis zum Hauptprozess und untersuche das Zwischenablageformat samt Formatierungsdaten.

[Fallstudie lesen](https://mkbraion.github.io/lefon-reverse-engineering/showcase/notion/)

### TH04: Eine DOS-Geschossring-Berechnung wiederherstellen

Untersuche die 16-Bit-Anweisungen des ursprünglichen PC-98-Spiels, rekonstruiere die festen und zielgerichteten Winkelberechnungen und vergleiche das rekonstruierte C++ mit der Ausgabe des damaligen Compilers.

[Fallstudie lesen](https://mkbraion.github.io/lefon-reverse-engineering/showcase/th04/) · [Rekonstruktionsrepository](https://github.com/N0zoM1z0/th04)

Wenn du mit LEFON etwas Interessantes untersucht hast, würden wir es gern sehen. Teile deine Fallstudie in einem [Issue](https://github.com/mkbraion/lefon-reverse-engineering/issues) oder [Pull Request](https://github.com/mkbraion/lefon-reverse-engineering/pulls) und beschreibe das Ziel, deine Frage, wie LEFON geholfen hat und was du herausgefunden hast.

## Häufige Fragen

<details>
<summary><strong>Welche Agenten können LEFON verwenden?</strong></summary>

Jeder Agent, der lokale MCP-Server unterstützt. Die Einrichtung konfiguriert die [unterstützten Agenten](docs/installation.md#supported-agents); andere Clients können die [manuelle MCP-Registrierung](docs/installation.md#mcp-registry) nutzen.

</details>

<details>
<summary><strong>Brauche ich Hopper, Ghidra oder IDA?</strong></summary>

Für tiefgehende native Analysen wird eines dieser Programme verwendet. Statische JavaScript- und .NET-Untersuchungen funktionieren ohne native Analyse-Engine. Die Einrichtung kann Hopper nach Zustimmung installieren; Ghidra und IDA nutzen deine vorhandenen Installationen. Siehe [Provider-Einrichtung](docs/installation.md#hopper).

</details>

<details>
<summary><strong>Muss ich Hopper vorher starten?</strong></summary>

LEFON startet Hopper, wenn eine Operation es benötigt. Unter macOS kann beim ersten Start ein Dialog erscheinen, in dem du den Demomodus auswählst oder deine Lizenz aktivierst. Siehe [Hopper-Start und Fehlerbehebung](docs/installation.md#launcher-paths-and-troubleshooting).

</details>

<details>
<summary><strong>Was bewirkt die Installation des Skills über skills.sh?</strong></summary>

Der Skill stellt Untersuchungsanweisungen für deinen Agenten bereit. Verwende `npx lefon-reverse-engineering setup`, um den MCP-Server von LEFON zu registrieren und passende Anweisungen zu installieren. Starte deinen Agenten anschließend neu. Siehe [Installation nur des Skills](docs/installation.md#skill-only-installation).

</details>

<details>
<summary><strong>Welchen Code liefert LEFON zurück?</strong></summary>

Native Analysen liefern Pseudocode und Assemblercode. JavaScript-/Electron-Analysen rekonstruieren Module und ihre Beziehungen. Dein Agent nutzt diese Ergebnisse zum Schreiben und Testen einer Implementierung; die [Fallstudien](#fallstudien) zeigen konkrete Beispiele.

</details>

<details>
<summary><strong>Lädt LEFON meine App hoch?</strong></summary>

LEFON analysiert Ziele lokal. Dein Agent erhält die Werkzeugergebnisse; sein Modellanbieter hat eine eigene Datenrichtlinie.

</details>

<details>
<summary><strong>Was soll ich tun, wenn ich einen Fehler finde?</strong></summary>

Aktualisiere zuerst; eine neuere Version könnte den Fehler bereits behoben haben.

Für eine über npm installierte CLI:

```bash
lefon update
```

Für die Agenteneinrichtung über `npx`:

```bash
npx lefon-reverse-engineering@latest setup
```

Wenn du einen Agenten verwendest, schließe die [Aktualisierung der Einrichtung](#lefon-aktualisieren) ab und starte ihn neu. Wiederhole dieselbe Aufgabe. Besteht das Problem weiterhin, [öffne ein Issue](https://github.com/mkbraion/lefon-reverse-engineering/issues) mit deiner LEFON-Version, dem Zieltyp, den Reproduktionsschritten und der Fehlerausgabe.

</details>

## Dokumentation

Beginne mit den [praxisnahen Anleitungen](https://mkbraion.github.io/lefon-reverse-engineering/guides/) auf der Website. Genaue Optionen, Voraussetzungen und Ergebniskontrakte findest du hier:

- [Installation und Einrichtung](docs/installation.md): Agentenregistrierung, Provider-Konfiguration, Updates und Deinstallation.
- [Bereitschaft und Fehlerbehebung](docs/installation.md#check-readiness-for-your-task): Diagnose eines bestimmten Agenten oder einer Analyse-Engine.
- [CLI und Evidence](docs/cli.md): Befehle, Provider-Auswahl, Snapshots, Import/Export und Exit-Status.
- [MCP-Kontrakte](docs/mcp-contracts.md) und [Agenten-Prompts](docs/mcp-prompts.md): Werkzeugergebnisse, Sitzungen und geführte Untersuchungen.
- [Werkzeugkatalog](docs/mcp-contracts.md#generated-catalog): Beim Build erzeugtes Inventar von Werkzeugen, Providern und CLI-Befehlen.
- [Roadmap](docs/roadmap.md): Geplante Arbeiten und Fortschrittsübersichten zu Fähigkeiten.

Melde Sicherheitslücken gemäß [SECURITY.md](SECURITY.md).

## Sternverlauf

🎉 **50.000 GitHub-Sterne – vielen Dank!**

Danke an alle, die LEFON nutzen, Fehler melden, Funktionswünsche äußern, Builds testen und Fehlerbehebungen beitragen.

<a href="https://www.star-history.com/?repos=mkbraion%2Flefon-reverse-engineering&amp;type=date">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/chart?repos=mkbraion/lefon-reverse-engineering&amp;type=date&amp;theme=dark&amp;legend=top-left" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/chart?repos=mkbraion/lefon-reverse-engineering&amp;type=date" />
    <img alt="GitHub-Sternverlauf von LEFON" src="https://api.star-history.com/chart?repos=mkbraion/lefon-reverse-engineering&amp;type=date" />
  </picture>
</a>

## Haftungsausschluss

LEFON stellt Werkzeuge für rechtmäßige Reverse-Engineering-Forschung, Analyse und Rekonstruktion bereit. Du bist dafür verantwortlich, erforderliche Genehmigungen einzuholen und geltendes Recht einzuhalten. Das Projekt unterstützt keine rechtswidrige oder unbefugte Nutzung.

## Mitwirken

Wir freuen uns über deine Hilfe bei LEFON! [Öffne ein Issue](https://github.com/mkbraion/lefon-reverse-engineering/issues), um einen Fehler zu melden oder eine Funktion vorzuschlagen, oder [sende einen Pull Request](https://github.com/mkbraion/lefon-reverse-engineering/pulls), um Code oder Dokumentation zu verbessern.

Die Entwicklungsumgebung und Prüfungen beschreibt [CONTRIBUTING.md](CONTRIBUTING.md), die Verifikationspfade der [Testleitfaden](docs/testing.md) und die Projektstruktur die [Architekturübersicht](docs/architecture.mermaid).

## Lizenz

[MIT](LICENSE)
