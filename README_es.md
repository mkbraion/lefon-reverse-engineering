<div align="center">

[English](LEFONDME.md) · [简体中文](LEFONDME_zh.md) · [繁體中文](LEFONDME_zh-TW.md) · [日本語](LEFONDME_ja.md) · [한국어](LEFONDME_ko.md) · [Türkçe](LEFONDME_tr.md) · [Русский](LEFONDME_ru.md) · [Tiếng Việt](LEFONDME_vi.md) · [ไทย](LEFONDME_th.md) · [Deutsch](LEFONDME_de.md) · **Español** · [Français](LEFONDME_fr.md) · [Українська](LEFONDME_uk.md) · [Polski](LEFONDME_pl.md) · [Português (Brasil)](LEFONDME_pt-BR.md) · [العربية](LEFONDME_ar.md) · [فارسی](LEFONDME_fa.md) · [Bahasa Indonesia](LEFONDME_id.md) · [Italiano](LEFONDME_it.md)

# LEFON: Ingeniería inversa de cualquier cosa

### Un solo MCP para la ingeniería inversa de binarios, aplicaciones y comportamiento en ejecución.

**¿Ves una función que te gusta? Entiende cómo funciona, hasta el nivel binario.**

[![npm version](https://img.shields.io/npm/v/lefon-reverse-engineering?style=flat-square&color=cb3837)](https://www.npmjs.com/package/lefon-reverse-engineering)
[![CI](https://img.shields.io/github/actions/workflow/status/mkbraion/lefon-reverse-engineering/ci.yml?branch=main&style=flat-square&label=CI)](https://github.com/mkbraion/lefon-reverse-engineering/actions/workflows/ci.yml)
[![MCP tool catalog](https://img.shields.io/badge/MCP-tool_catalog-5c4ee5?style=flat-square)](docs/mcp-contracts.md#generated-catalog)
[![Node.js requirements](https://img.shields.io/badge/Node.js-requirements-339933?style=flat-square&logo=nodedotjs&logoColor=white)](#current-status)
[![skills.sh](https://skills.sh/b/mkbraion/lefon-reverse-engineering?style=flat-square)](https://skills.sh/mkbraion/lefon-reverse-engineering/reverse-engineer-anything)
[![MIT license](https://img.shields.io/badge/license-MIT-f4c430?style=flat-square)](LICENSE)
[![Discord](https://img.shields.io/discord/1556595354999332884?logo=discord&logoColor=white&label=Discord&color=5865F2)](https://discord.gg/GkcryMnJDM)

<a href="https://trendshift.io/repositories/82054?utm_source=repository-badge&amp;utm_medium=badge&amp;utm_campaign=badge-repository-82054" target="_blank" rel="noopener noreferrer"><img src="https://trendshift.io/api/badge/repositories/82054" alt="mkbraion%2Flefon-reverse-engineering | Trendshift" width="250" height="55"/></a>

**[Sitio web](https://mkbraion.github.io/lefon-reverse-engineering/) · [Guías](https://mkbraion.github.io/lefon-reverse-engineering/guides/) · [Casos prácticos](https://mkbraion.github.io/lefon-reverse-engineering/showcase/)**

[Inicio rápido](#inicio-rápido) · [Cómo funciona LEFON](#cómo-funciona-lefon) · [Qué puedes analizar](#qué-puedes-analizar) · [Casos prácticos](#casos-prácticos) · [Preguntas frecuentes](#preguntas-frecuentes) · [Documentación](#documentación)

<code>npx lefon-reverse-engineering setup</code>

<br />

<img src="docs/assets/lefon-hopper-analysis.png" alt="LEFON inicia su puente de análisis dentro de Hopper mientras inspecciona un binario nativo" width="1200" />

<br /><br />

<table aria-label="Comunidad LEFON">
<tr>
<td align="center" width="360">
  <a href="https://discord.gg/GkcryMnJDM">
    <img src="docs/assets/discord.svg" height="42" alt="Discord" /><br />
    <strong>Únete a la comunidad de ingeniería inversa</strong>
  </a><br />
  <sub>Discord · Preguntas y respuestas · Comparte tus resultados</sub>
</td>
</tr>
</table>

<br />

</div>

---

¿Has visto una función en una aplicación que quieres incorporar a tu producto? Pide a tu agente que la investigue con LEFON. Puede inspeccionar la aplicación sin su código fuente, explicar cómo funciona la función, mostrar las pruebas y crear una versión para tu proyecto.

LEFON conecta tu agente con herramientas para inspeccionar binarios nativos, aplicaciones JavaScript y Electron, ensamblados .NET y sitios web. También puedes usar las mismas herramientas desde la terminal. El análisis se ejecuta localmente y los resultados incluyen las pruebas y limitaciones que sustentan cada conclusión.

La configuración registra LEFON en tu agente e instala las instrucciones de trabajo correspondientes. El análisis nativo puede usar una instalación existente de Hopper o Ghidra; la configuración también puede instalar Hopper, si lo autorizas. El análisis estático de JavaScript no necesita ninguno de los dos motores.

> **[Visita el sitio web de LEFON](https://mkbraion.github.io/lefon-reverse-engineering/)** para encontrar instrucciones de configuración, guías ilustradas y casos reales.

## Inicio rápido

### Configura tu agente

Con Node.js y npm instalados, ejecuta:

```bash
npx lefon-reverse-engineering setup
```

Elige tus agentes, revisa los cambios propuestos y apruébalos. La configuración añade el servidor MCP de LEFON y las instrucciones de trabajo correspondientes, con copias de seguridad de la configuración existente. Reinicia tu agente al terminar.

La configuración admite Claude Code, Codex, Cursor, Gemini CLI, Grok Build y [otros agentes](docs/installation.md#supported-agents). Consulta [instalación y configuración](docs/installation.md) para configurar proveedores y registrar MCP manualmente.

### Pregunta a tu agente

```text
Investiga cómo funciona la búsqueda en la aplicación Notes, muéstrame las pruebas y crea una función similar para mi proyecto.
```

Sustituye Notes por la aplicación objetivo y especifica la función que quieres entender.

### Usa la terminal

Inspecciona un directorio extraído de una aplicación JavaScript/Electron o un archivo ASAR:

```bash
npx -y lefon-reverse-engineering@latest analyze-javascript-application /absolute/path/to/app --json
```

El resultado incluye módulos, importaciones, límites de Electron y sus pruebas. Sustituye la ruta por la de tu objetivo, por ejemplo `"D:/apps/example"` en Windows.

Para instalar el comando `lefon` y usarlo habitualmente:

```bash
npm install --global lefon-reverse-engineering
lefon --help
```

Para el análisis nativo, configura primero un proveedor. Consulta la [guía de CLI y Evidence](docs/cli.md) para los comandos nativos, la selección de proveedores, las instantáneas y el uso en scripts.

### Actualiza LEFON

LEFON cambia rápidamente y las nuevas versiones incluyen correcciones frecuentes. Mantén tu instalación actualizada.

Para una CLI instalada mediante npm:

```bash
lefon update
```

Para actualizar los registros de tus agentes y la skill, ejecuta el comando de configuración que muestra la actualización.

Si usas `npx`, actualiza la configuración de tu agente con:

```bash
npx lefon-reverse-engineering@latest setup
```

Revisa los cambios de configuración y reinicia tu agente. Para ejecutar comandos de CLI puntuales, usa `npx lefon-reverse-engineering@latest` seguido del comando.

## Cómo funciona LEFON

Tu agente llama a LEFON mediante MCP para inspeccionar el objetivo y seguir el código relevante. LEFON devuelve los hallazgos junto con sus pruebas. El agente los utiliza para hacer preguntas de seguimiento, explicar el comportamiento o escribir y probar una implementación. Los comandos de CLI usan los mismos flujos de trabajo.

![Flujo de investigación de LEFON: tu agente pregunta sobre un objetivo local, LEFON lo inspecciona y rastrea con herramientas de análisis, y el agente utiliza el código, las referencias y los aspectos desconocidos devueltos para explicar, implementar y probar.](website/public/assets/figures/lefon-investigation-flow.svg)

[Abre la figura a tamaño completo](website/public/assets/figures/lefon-investigation-flow.svg).

<a id="current-status"></a>

## Qué puedes analizar

LEFON requiere Node.js 22.x (>=22.19), 24.x (>=24.11) o 26+, además de npm. Las herramientas adicionales y los sistemas anfitriones compatibles dependen del objetivo:

| Objetivo                    | Qué devuelve LEFON                                                                                                               | Requisitos y guía                                                                                                                          |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Binarios nativos            | Pseudocódigo, ensamblador, cadenas, símbolos, llamadas y referencias                                                           | Hopper, Ghidra o IDA; [análisis nativo](https://mkbraion.github.io/lefon-reverse-engineering/guides/native/)                                                                  |
| Estructura ELF sin ejecutar | Secciones, segmentos, símbolos/reubicaciones originales y posibles medidas de mitigación detectadas mediante análisis estático | pwntools proporcionado por quien llama, en Linux x64; [diagnóstico de binarios](docs/binary-diagnostics.md)                                |
| Bytecode EVM                | Selectores de despacho, desplazamientos en bytes, argumentos inferidos y mutabilidad                                           | Entrada local con bytes sin procesar o representación hexadecimal, en Linux x64; [guía de EVM sin ejecutar](docs/evm-bytecode.md)          |
| Fallos de Linux registrados | Registros note sin procesar, registros/señales de cada hilo registrado y posibles correspondencias de memoria opcionales       | pwntools proporcionado por quien llama, en Linux x64; GDB/pwndbg opcionales; [fallos registrados](docs/recorded-crashes.md)                |
| JavaScript / Electron       | Módulos, importaciones, mapas de código fuente, rutas, IPC y relaciones con complementos nativos                               | Node.js y npm; [análisis de aplicaciones](https://mkbraion.github.io/lefon-reverse-engineering/guides/javascript/)                                                            |
| Sitios web                  | Estructura de la página, scripts, observaciones de red y capturas de pantalla solicitadas                                      | Un navegador de la familia Chrome; [análisis del navegador](https://mkbraion.github.io/lefon-reverse-engineering/guides/browser/)                                             |
| Capturas de red guardadas   | Solicitudes, respuestas, contenido accesible de las cargas útiles y ubicaciones de origen                                      | HAR; mitmdump en Linux para capturas en formato nativo de mitmproxy; [guía de capturas](docs/web-network-captures.md)                      |
| Ensamblados .NET            | Metadatos, instrucciones CIL, dependencias nativas declaradas y comparaciones de compilaciones                                 | Inspección estática; [guía de código administrado](docs/managed-code-analysis.md)                                                          |
| APK de Android              | Declaraciones del manifiesto, clases, métodos descompilados y referencias                                                      | JADX sin interfaz gráfica y un JDK completo en Linux/macOS/Windows x64; [guía de Android](docs/android-analysis.md)                        |
| Dispositivos Android        | Dispositivos, paquetes, procesos, registros, volcados, capturas de pantalla y transferencias de APK/archivos                   | adb suministrado por el autor de la llamada (emulador o dispositivo); [guía de ADB](docs/adb-device-analysis.md)                           |
| Proyectos JEB               | Unidades de proyecto del motor, resúmenes de artefactos y pseudocódigo de tipos/métodos                                        | Un cliente JEB iniciado por el autor de la llamada que sirve MCP, seleccionado con LEFON_JEB_MCP_URL; [guía de JEB](docs/jeb-analysis.md)    |
| Recursos de Android         | Manifiesto decodificado, tablas de cadenas, idiomas y datos de versión                                                         | Lanzador de Apktool suministrado por el autor de la llamada; [guía de recursos](docs/apktool-resource-analysis.md)                         |
| Firmware                    | Regiones, resultados de extracción y derivaciones al análisis nativo                                                           | Binwalk / Unblob en Linux; [guía de firmware](docs/firmware-analysis.md)                                                                   |
| Paquetes y recursos         | Inventarios de archivos, resúmenes criptográficos, plists, estructura de paquetes de Apple y recursos extraídos                | [Guía de artefactos y JavaScript](docs/javascript-artifact-reconstruction.md), [aplicaciones de Apple](docs/apple-application-analysis.md) |
| Comportamiento de procesos  | Salida de la terminal, interacciones, observaciones de salida y del sistema de archivos, y comparaciones entre ejecuciones     | Linux/macOS con una PTY nativa; [captura de procesos](docs/process-capture.md)                                                             |

La inspección estática de JavaScript y .NET lee los archivos suministrados sin ejecutar la aplicación. La captura en ejecución inicia el objetivo seleccionado o interactúa con él con los permisos de tu usuario; cada guía describe sus efectos.

<a id="choosing-a-deep-analysis-provider"></a>

Los formatos nativos y los sistemas anfitriones compatibles varían según el proveedor. Consulta [configuración de Hopper y Ghidra](docs/installation.md#hopper), la [guía de IDA](docs/ida-provider.md) y la [compatibilidad experimental de Ghidra en Windows](docs/windows-ghidra-p0.md). Ghidra también admite [análisis de DOS de 16 bits](docs/ghidra-dos.md). Para elegir un proveedor, consulta la [guía de CLI](docs/cli.md#choose-a-provider). Comprueba la [disponibilidad por versión](docs/installation.md#released-package-and-main) de las funciones añadidas después de la última versión publicada en npm.

## Casos prácticos

[![Ilustraciones de los casos de panoramización de sonido de DX-Ball, el puente del portapapeles de Notion y el anillo de proyectiles de TH04](docs/assets/lefon-showcases.png)](https://mkbraion.github.io/lefon-reverse-engineering/showcase/)

### DX-Ball: reconstruir un cálculo de panoramización de sonido

Sigue una llamada de sonido hasta la función auxiliar que convierte la posición en panoramización, inspecciona las instrucciones y transforma el pseudocódigo incompleto en C. La reconstrucción supera 3.205 casos con el x86 original y reproduce los 63 bytes de la función compilada.

[Lee el caso práctico](https://mkbraion.github.io/lefon-reverse-engineering/showcase/dx-ball/) · [Repositorio de reconstrucción](https://github.com/N0zoM1z0/dx-ball)

### Notion: seguir el puente del portapapeles de Electron

Encuentra la API del portapapeles del proceso de renderizado, síguela a través de preload e IPC hasta el proceso principal e inspecciona el formato enriquecido del portapapeles.

[Lee el caso práctico](https://mkbraion.github.io/lefon-reverse-engineering/showcase/notion/)

### TH04: recuperar el cálculo de un anillo de proyectiles en DOS

Inspecciona las instrucciones de 16 bits del juego original para PC-98, recupera los cálculos de ángulos fijos y dirigidos, y compara el C++ reconstruido con la salida del compilador de la época.

[Lee el caso práctico](https://mkbraion.github.io/lefon-reverse-engineering/showcase/th04/) · [Repositorio de reconstrucción](https://github.com/N0zoM1z0/th04)

Si has usado LEFON para investigar algo interesante, nos gustaría verlo. Comparte tu caso en una [issue](https://github.com/mkbraion/lefon-reverse-engineering/issues) o una [pull request](https://github.com/mkbraion/lefon-reverse-engineering/pulls), incluyendo el objetivo, tu pregunta, cómo te ayudó LEFON y qué encontraste.

## Preguntas frecuentes

<details>
<summary><strong>¿Qué agentes pueden usar LEFON?</strong></summary>

Cualquier agente que admita servidores MCP locales. La configuración prepara los [agentes compatibles](docs/installation.md#supported-agents); otros clientes pueden usar el [registro manual de MCP](docs/installation.md#mcp-registry).

</details>

<details>
<summary><strong>¿Necesito Hopper, Ghidra o IDA?</strong></summary>

El análisis nativo en profundidad utiliza uno de ellos. La inspección estática de JavaScript y .NET funciona sin un motor de análisis nativo. La configuración puede instalar Hopper después de tu aprobación; Ghidra e IDA usan las instalaciones que ya tienes. Consulta [configuración de proveedores](docs/installation.md#hopper).

</details>

<details>
<summary><strong>¿Tengo que iniciar Hopper primero?</strong></summary>

LEFON inicia Hopper cuando una operación lo necesita. En macOS, puede aparecer un diálogo al iniciarlo por primera vez para elegir el modo de demostración o activar tu licencia. Consulta [inicio de Hopper y resolución de problemas](docs/installation.md#launcher-paths-and-troubleshooting).

</details>

<details>
<summary><strong>¿Qué hace la instalación de la skill desde skills.sh?</strong></summary>

La skill proporciona instrucciones de investigación a tu agente. Usa `npx lefon-reverse-engineering setup` para registrar el servidor MCP de LEFON e instalar las instrucciones correspondientes; después reinicia tu agente. Consulta [instalación solo de la skill](docs/installation.md#skill-only-installation).

</details>

<details>
<summary><strong>¿Qué código devuelve LEFON?</strong></summary>

El análisis nativo devuelve pseudocódigo y ensamblador. El análisis de JavaScript/Electron recupera módulos y sus relaciones. Tu agente utiliza estos hallazgos para escribir y probar una implementación; los [casos prácticos](#casos-prácticos) ofrecen ejemplos completos.

</details>

<details>
<summary><strong>¿LEFON sube mi aplicación?</strong></summary>

LEFON analiza los objetivos localmente. Tu agente recibe los resultados de las herramientas, y su proveedor de modelos tiene su propia política de datos.

</details>

<details>
<summary><strong>¿Qué debo hacer si encuentro un error?</strong></summary>

Actualiza primero; una versión reciente puede haber solucionado el problema.

Para una CLI instalada mediante npm:

```bash
lefon update
```

Para configurar el agente mediante `npx`:

```bash
npx lefon-reverse-engineering@latest setup
```

Si usas un agente, completa la [actualización de la configuración](#actualiza-lefon) y reinícialo. Repite la misma tarea. Si el problema continúa, [abre una issue](https://github.com/mkbraion/lefon-reverse-engineering/issues) con tu versión de LEFON, el tipo de objetivo, los pasos para reproducirlo y la salida del error.

</details>

## Documentación

Empieza con las [guías prácticas](https://mkbraion.github.io/lefon-reverse-engineering/guides/) del sitio web. Para opciones exactas, requisitos y contratos de resultados:

- [Instalación y configuración](docs/installation.md): registro de agentes, configuración de proveedores, actualizaciones y desinstalación.
- [Preparación y resolución de problemas](docs/installation.md#check-readiness-for-your-task): diagnóstico de un agente o motor de análisis concreto.
- [CLI y Evidence](docs/cli.md): comandos, selección de proveedores, instantáneas, importación/exportación y estados de salida.
- [Contratos de MCP](docs/mcp-contracts.md) y [prompts para agentes](docs/mcp-prompts.md): resultados de herramientas, sesiones e investigaciones guiadas.
- [Catálogo de herramientas](docs/mcp-contracts.md#generated-catalog): inventario de herramientas, proveedores y comandos de CLI generado durante la compilación.
- [Hoja de ruta](docs/roadmap.md): trabajo previsto y seguimiento de capacidades.

Informa de vulnerabilidades siguiendo [SECURITY.md](SECURITY.md).

## Historial de estrellas

🎉 **50.000 estrellas en GitHub: ¡gracias!**

Gracias a quienes usan LEFON, informan de errores, solicitan funciones, prueban compilaciones y contribuyen con correcciones.

<a href="https://www.star-history.com/?repos=mkbraion%2Flefon-reverse-engineering&amp;type=date">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/chart?repos=mkbraion/lefon-reverse-engineering&amp;type=date&amp;theme=dark&amp;legend=top-left" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/chart?repos=mkbraion/lefon-reverse-engineering&amp;type=date" />
    <img alt="Historial de estrellas de LEFON en GitHub" src="https://api.star-history.com/chart?repos=mkbraion/lefon-reverse-engineering&amp;type=date" />
  </picture>
</a>

## Aviso legal

LEFON proporciona herramientas para la investigación, el análisis y la reconstrucción mediante ingeniería inversa conforme a la ley. Eres responsable de obtener las autorizaciones necesarias y cumplir las leyes aplicables. El proyecto no respalda usos ilegales ni no autorizados.

## Contribuir

¡Nos encantaría que ayudaras con LEFON! [Abre una issue](https://github.com/mkbraion/lefon-reverse-engineering/issues) para comunicar un error o proponer una función, o [envía una pull request](https://github.com/mkbraion/lefon-reverse-engineering/pulls) para mejorar el código o la documentación.

Consulta [CONTRIBUTING.md](CONTRIBUTING.md) para preparar el entorno de desarrollo y las comprobaciones, la [guía de pruebas](docs/testing.md) para los procesos de verificación y el [mapa de arquitectura](docs/architecture.mermaid) para la estructura del proyecto.

## Licencia

[MIT](LICENSE)
