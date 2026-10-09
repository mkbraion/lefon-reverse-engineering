<div align="center">

[English](LEFONDME.md) · [简体中文](LEFONDME_zh.md) · [繁體中文](LEFONDME_zh-TW.md) · [日本語](LEFONDME_ja.md) · [한국어](LEFONDME_ko.md) · [Türkçe](LEFONDME_tr.md) · [Русский](LEFONDME_ru.md) · [Tiếng Việt](LEFONDME_vi.md) · [ไทย](LEFONDME_th.md) · [Deutsch](LEFONDME_de.md) · [Español](LEFONDME_es.md) · [Français](LEFONDME_fr.md) · [Українська](LEFONDME_uk.md) · [Polski](LEFONDME_pl.md) · [Português (Brasil)](LEFONDME_pt-BR.md) · **العربية** · [فارسی](LEFONDME_fa.md) · [Bahasa Indonesia](LEFONDME_id.md) · [Italiano](LEFONDME_it.md)

# LEFON: هندسة عكسية لأي شيء

### خادم MCP واحد للهندسة العكسية للملفات الثنائية والتطبيقات والسلوك أثناء التشغيل.

**وجدت ميزة تعجبك؟ افهم طريقة عملها حتى مستوى الشيفرة الثنائية.**

[![npm version](https://img.shields.io/npm/v/lefon-reverse-engineering?style=flat-square&color=cb3837)](https://www.npmjs.com/package/lefon-reverse-engineering)
[![CI](https://img.shields.io/github/actions/workflow/status/mkbraion/lefon-reverse-engineering/ci.yml?branch=main&style=flat-square&label=CI)](https://github.com/mkbraion/lefon-reverse-engineering/actions/workflows/ci.yml)
[![MCP tool catalog](https://img.shields.io/badge/MCP-tool_catalog-5c4ee5?style=flat-square)](docs/mcp-contracts.md#generated-catalog)
[![Node.js requirements](https://img.shields.io/badge/Node.js-requirements-339933?style=flat-square&logo=nodedotjs&logoColor=white)](#current-status)
[![skills.sh](https://skills.sh/b/mkbraion/lefon-reverse-engineering?style=flat-square)](https://skills.sh/mkbraion/lefon-reverse-engineering/reverse-engineer-anything)
[![MIT license](https://img.shields.io/badge/license-MIT-f4c430?style=flat-square)](LICENSE)
[![Discord](https://img.shields.io/discord/1556595354999332884?logo=discord&logoColor=white&label=Discord&color=5865F2)](https://discord.gg/GkcryMnJDM)

<a href="https://trendshift.io/repositories/82054?utm_source=repository-badge&amp;utm_medium=badge&amp;utm_campaign=badge-repository-82054" target="_blank" rel="noopener noreferrer"><img src="https://trendshift.io/api/badge/repositories/82054" alt="mkbraion%2Flefon-reverse-engineering | Trendshift" width="250" height="55"/></a>

**[الموقع](https://mkbraion.github.io/lefon-reverse-engineering/) · [الأدلة](https://mkbraion.github.io/lefon-reverse-engineering/guides/) · [دراسات الحالة](https://mkbraion.github.io/lefon-reverse-engineering/showcase/)**

[البدء السريع](#البدء-السريع) · [كيف يعمل LEFON](#كيف-يعمل-lefon) · [ما الذي يمكنك تحليله](#ما-الذي-يمكنك-تحليله) · [دراسات الحالة](#دراسات-الحالة) · [الأسئلة الشائعة](#الأسئلة-الشائعة) · [التوثيق](#التوثيق)

<code>npx lefon-reverse-engineering setup</code>

<br />

<img src="docs/assets/lefon-hopper-analysis.png" alt="LEFON يشغّل جسر التحليل داخل Hopper لفحص ملف ثنائي للشيفرة الأصلية" width="1200" />

<br /><br />

<table aria-label="مجتمع LEFON">
<tr>
<td align="center" width="360">
  <a href="https://discord.gg/GkcryMnJDM">
    <img src="docs/assets/discord.svg" height="42" alt="Discord" /><br />
    <strong>انضم إلى مجتمع الهندسة العكسية</strong>
  </a><br />
  <sub>Discord · أسئلة وأجوبة · مشاركة النتائج</sub>
</td>
</tr>
</table>

<br />

</div>

---

هل وجدت في تطبيق ميزة تريد إضافتها إلى منتجك؟ اطلب من وكيلك استقصاءها باستخدام LEFON. يستطيع فحص التطبيق من دون شيفرته المصدرية، وشرح طريقة عمل الميزة وعرض الأدلة، ثم بناء نسخة تناسب مشروعك.

يربط LEFON وكيلك بأدوات لفحص الملفات الثنائية للشيفرة الأصلية، وتطبيقات JavaScript وElectron، وتجميعات .NET، والمواقع. يمكنك أيضًا استخدام الأدوات نفسها من الطرفية. يجري التحليل محليًا، وتتضمن النتائج الأدلة والقيود التي تستند إليها كل خلاصة.

يسجّل الإعداد LEFON لدى وكيلك ويثبّت تعليمات سير العمل المطابقة. يمكن لتحليل الشيفرة الأصلية استخدام تثبيت موجود من Hopper أو Ghidra؛ ويمكن للإعداد أيضًا تثبيت Hopper اختياريًا بعد موافقتك. لا يحتاج التحليل الثابت لـ JavaScript إلى أي من المحركين.

> **[زر موقع LEFON](https://mkbraion.github.io/lefon-reverse-engineering/)** للاطلاع على تعليمات الإعداد والأدلة المصوّرة ودراسات الحالة الفعلية.

## البدء السريع

### إعداد وكيلك

بعد تثبيت Node.js وnpm، نفّذ:

```bash
npx lefon-reverse-engineering setup
```

اختر الوكلاء، وراجع التغييرات المقترحة، ثم وافق عليها. يضيف الإعداد خادم MCP الخاص بـ LEFON وتعليمات سير العمل المطابقة، مع الاحتفاظ بنسخ احتياطية من الإعدادات الموجودة. أعد تشغيل وكيلك بعد ذلك.

يدعم الإعداد Claude Code وCodex وCursor وGemini CLI وGrok Build و[وكلاء آخرين](docs/installation.md#supported-agents). راجع [التثبيت والإعداد](docs/installation.md) لتهيئة موفّري التحليل وتسجيل MCP يدويًا.

### اطلب من وكيلك

```text
استقصِ طريقة عمل البحث في تطبيق Notes، واعرض الأدلة، ثم ابنِ ميزة مشابهة لمشروعي.
```

استبدل Notes بالتطبيق المستهدف وحدّد الميزة التي تريد فهمها.

### استخدام الطرفية

افحص مجلد تطبيق JavaScript/Electron بعد فك حزمه، أو ملف ASAR:

```bash
npx -y lefon-reverse-engineering@latest analyze-javascript-application /absolute/path/to/app --json
```

تتضمن النتيجة الوحدات وعمليات الاستيراد وحدود Electron والأدلة المتعلقة بها. استبدل المسار بمسار هدفك، مثل `"D:/apps/example"` على Windows.

لتثبيت أمر `lefon` للاستخدام المعتاد:

```bash
npm install --global lefon-reverse-engineering
lefon --help
```

لتحليل الشيفرة الأصلية، هيّئ موفّرًا أولًا. راجع [دليل CLI وEvidence](docs/cli.md) لأوامر تحليل الشيفرة الأصلية، واختيار الموفّر، واللقطات، والاستخدام في السكربتات.

### تحديث LEFON

يتطور LEFON بسرعة، وتتضمن الإصدارات الجديدة إصلاحات متكررة للأخطاء. حافظ على تحديث نسختك.

لواجهة CLI المثبّتة عبر npm:

```bash
lefon update
```

لتحديث تسجيلات الوكلاء والمهارة، نفّذ أمر الإعداد الذي يعرضه التحديث.

إذا كنت تستخدم `npx`، فحدّث إعداد وكيلك بالأمر التالي:

```bash
npx lefon-reverse-engineering@latest setup
```

راجع تغييرات الإعداد وأعد تشغيل وكيلك. لأوامر CLI التي تنفّذها مرة واحدة، استخدم `npx lefon-reverse-engineering@latest` متبوعًا بالأمر المطلوب.

## كيف يعمل LEFON

يستدعي وكيلك LEFON عبر MCP لفحص الهدف وتتبع الشيفرة ذات الصلة. يعيد LEFON النتائج مع أدلتها. يستخدمها الوكيل لطرح أسئلة متابعة، أو شرح السلوك، أو كتابة تنفيذ واختباره. تستخدم أوامر CLI سير العمل نفسه.

![مسار الاستقصاء في LEFON: يسأل وكيلك عن هدف محلي، ويفحصه LEFON ويتتبعه بأدوات التحليل، ثم يستخدم الوكيل الشيفرة والمراجع والجوانب غير المحسومة التي أعادتها الأدوات لشرح السلوك وتنفيذه واختباره.](website/public/assets/figures/lefon-investigation-flow.svg)

[افتح الشكل بحجمه الكامل](website/public/assets/figures/lefon-investigation-flow.svg).

<a id="current-status"></a>

## ما الذي يمكنك تحليله

يتطلب LEFON إصدار Node.js 22.x (>=22.19) أو 24.x (>=24.11) أو 26+، إضافة إلى npm. تعتمد الأدوات الإضافية والأنظمة المضيفة المدعومة على الهدف:

| الهدف                           | ما يعيده LEFON                                                                                               | المتطلبات والدليل                                                                                                                 |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| الملفات الثنائية للشيفرة الأصلية | شيفرة شبه برمجية، وتعليمات تجميع، وسلاسل نصية، ورموز، واستدعاءات، ومراجع                                    | Hopper أو Ghidra أو IDA؛ [تحليل الشيفرة الأصلية](https://mkbraion.github.io/lefon-reverse-engineering/guides/native/)                                                 |
| بنية ELF دون تشغيل              | الأقسام والمقاطع والرموز ومعلومات إعادة التموضع الأصلية، وآليات الحماية المحتملة المستدلّ عليها بالفحص الثابت | pwntools يوفّره المستدعي على Linux x64؛ [تشخيص الملفات الثنائية](docs/binary-diagnostics.md)                                       |
| شيفرة EVM البايتية              | محددات التوجيه، وإزاحات البايتات، والمعاملات المستنتجة، وقابلية تغيير الحالة                                | مدخل محلي يحمل بايتات خامًا أو تمثيلًا سداسيًا عشريًا على Linux x64؛ [دليل EVM دون تشغيل](docs/evm-bytecode.md)                        |
| أعطال Linux المسجّلة             | سجلات note الخام، ومسجّلات المعالج/الإشارات لكل خيط مسجّل، وترشيحات اختيارية لخرائط الذاكرة                     | pwntools يوفّره المستدعي على Linux x64؛ GDB/pwndbg اختياريان؛ [الأعطال المسجّلة](docs/recorded-crashes.md)                           |
| JavaScript / Electron           | الوحدات، وعمليات الاستيراد، وخرائط المصدر، والمسارات، وIPC، وعلاقات إضافات الشيفرة الأصلية                    | Node.js وnpm؛ [تحليل التطبيقات](https://mkbraion.github.io/lefon-reverse-engineering/guides/javascript/)                                                             |
| المواقع                         | بنية الصفحة، والسكربتات، وملاحظات الشبكة، ولقطات الشاشة المطلوبة                                            | متصفح من عائلة Chrome؛ [تحليل المتصفح](https://mkbraion.github.io/lefon-reverse-engineering/guides/browser/)                                                         |
| تسجيلات الشبكة المحفوظة          | الطلبات، والاستجابات، ومحتويات الحمولة المتاحة، ومواضعها في المصدر                                          | HAR؛ وmitmdump على Linux لتسجيلات mitmproxy بصيغتها الأصلية؛ [دليل تسجيلات الشبكة](docs/web-network-captures.md)                     |
| تجميعات .NET                    | البيانات الوصفية، وتعليمات CIL، واعتماديات الشيفرة الأصلية المعلنة، ومقارنات البناء                         | فحص ثابت؛ [دليل الشيفرة المُدارة](docs/managed-code-analysis.md)                                                                   |
| حزم Android APK                 | تصريحات ملف manifest، والأصناف، والدوال الناتجة عن فك الترجمة، والمراجع                                     | JADX دون واجهة رسومية وJDK كامل على Linux/macOS/Windows x64؛ [دليل Android](docs/android-analysis.md)                             |
| أجهزة Android                   | الأجهزة والحزم والعمليات والسجلات والدامبات ولقطات الشاشة ونقل APK/الملفات                                   | adb يوفّره المُستدعي (محاكي أو جهاز)؛ [دليل ADB](docs/adb-device-analysis.md)                                                       |
| مشاريع JEB                      | وحدات المشروع من المحرك وبصمات المصنّفات والكود الزائف للأنواع/الدوال                                        | عميل JEB يبدأه المُستدعي ويقدّم MCP، ويُختار عبر LEFON_JEB_MCP_URL؛ [دليل JEB](docs/jeb-analysis.md)                                   |
| موارد Android                   | البيان المفكوك الترميز وجداول السلاسل واللغات وحقائق الإصدار                                                 | مُشغّل Apktool يوفّره المُستدعي؛ [دليل الموارد](docs/apktool-resource-analysis.md)                                                    |
| البرامج الثابتة                 | المناطق، ونتائج الاستخراج، وما يُمرّر إلى تحليل الشيفرة الأصلية                                                | Binwalk / Unblob على Linux؛ [دليل البرامج الثابتة](docs/firmware-analysis.md)                                                     |
| الحزم والموارد                  | قوائم الملفات، والبصمات، وملفات plist، وبنية حزم Apple، والموارد المستخرجة                                 | [دليل تحليل الملفات وJavaScript](docs/javascript-artifact-reconstruction.md)، [تطبيقات Apple](docs/apple-application-analysis.md) |
| سلوك العمليات                   | مخرجات الطرفية، والتفاعلات، وملاحظات الخروج ونظام الملفات، ومقارنات التشغيل                                  | Linux/macOS مع PTY أصلي؛ [تسجيل سلوك العمليات](docs/process-capture.md)                                                           |

يقرأ الفحص الثابت لـ JavaScript و.NET الملفات المقدّمة دون تشغيل التطبيق. يشغّل التسجيل أثناء التنفيذ الهدف المحدد أو يتفاعل معه بصلاحيات مستخدمك؛ ويشرح كل دليل للتسجيل أثناء التنفيذ آثاره.

<a id="choosing-a-deep-analysis-provider"></a>

تختلف صيغ ملفات الشيفرة الأصلية والأنظمة المضيفة المدعومة باختلاف الموفّر. راجع [إعداد Hopper وGhidra](docs/installation.md#hopper)، و[دليل IDA](docs/ida-provider.md)، و[دعم Ghidra التجريبي على Windows](docs/windows-ghidra-p0.md). يدعم Ghidra أيضًا [تحليل DOS ذي 16 بت](docs/ghidra-dos.md). لاختيار الموفّر، راجع [دليل CLI](docs/cli.md#choose-a-provider). تحقّق من [توفر الميزات في الإصدارات](docs/installation.md#released-package-and-main) للميزات المضافة بعد أحدث إصدار على npm.

## دراسات الحالة

[![رسوم توضيحية لأمثلة توزيع الصوت في DX-Ball وجسر الحافظة في Notion وحلقة الطلقات في TH04](docs/assets/lefon-showcases.png)](https://mkbraion.github.io/lefon-reverse-engineering/showcase/)

### DX-Ball: إعادة بناء حساب توزيع الصوت بين القناتين

تتبّع استدعاء صوت إلى الدالة المساعدة التي تحوّل الموضع إلى توزيع بين القناتين، وافحص التعليمات، وحوّل الشيفرة شبه البرمجية غير المكتملة إلى C. تجتاز إعادة البناء 3,205 حالات اختبار على x86 الأصلي، وتعيد إنتاج جميع بايتات الدالة المترجمة البالغ عددها 63 بايتًا.

[اقرأ دراسة الحالة](https://mkbraion.github.io/lefon-reverse-engineering/showcase/dx-ball/) ·
[مستودع إعادة البناء](https://github.com/N0zoM1z0/dx-ball)

### Notion: تتبّع جسر الحافظة في Electron

اعثر على API الحافظة في عملية العرض، وتتبّعه عبر preload وIPC إلى العملية الرئيسية، وافحص صيغة الحافظة ذات التنسيق الغني.

[اقرأ دراسة الحالة](https://mkbraion.github.io/lefon-reverse-engineering/showcase/notion/)

### TH04: استعادة حساب حلقة المقذوفات في DOS

افحص تعليمات اللعبة الأصلية على PC-98 ذات 16 بت، واستعد حساب الزوايا الثابتة والموجّهة نحو الهدف، وقارن شيفرة C++ المعاد بناؤها بمخرجات المترجم المستخدم آنذاك.

[اقرأ دراسة الحالة](https://mkbraion.github.io/lefon-reverse-engineering/showcase/th04/) ·
[مستودع إعادة البناء](https://github.com/N0zoM1z0/th04)

إذا استخدمت LEFON لفحص هدف مثير للاهتمام، فنود الاطلاع عليه. شارك حالتك في [issue](https://github.com/mkbraion/lefon-reverse-engineering/issues) أو [pull request](https://github.com/mkbraion/lefon-reverse-engineering/pulls)، مع ذكر الهدف، وسؤالك، وكيف ساعدك LEFON، وما توصلت إليه.

## الأسئلة الشائعة

<details>
<summary><strong>أي وكلاء يمكنهم استخدام LEFON؟</strong></summary>

أي وكيل يدعم خوادم MCP المحلية. يهيّئ الإعداد [الوكلاء المدعومين](docs/installation.md#supported-agents)؛ ويمكن للعملاء الآخرين استخدام [تسجيل MCP يدويًا](docs/installation.md#mcp-registry).

</details>

<details>
<summary><strong>هل أحتاج إلى Hopper أو Ghidra أو IDA؟</strong></summary>

يستخدم تحليل الشيفرة الأصلية المتعمق أحدها. يعمل الفحص الثابت لـ JavaScript و.NET دون محرك لتحليل الشيفرة الأصلية. يستطيع الإعداد تثبيت Hopper بعد الموافقة؛ أما Ghidra وIDA فيستخدمان تثبيتاتك الموجودة. راجع [إعداد الموفّرين](docs/installation.md#hopper).

</details>

<details>
<summary><strong>هل أحتاج إلى تشغيل Hopper أولًا؟</strong></summary>

يشغّل LEFON برنامج Hopper عندما تحتاج العملية إليه. على macOS، قد تظهر عند التشغيل الأول نافذة تطلب اختيار وضع العرض التجريبي أو تفعيل الترخيص. راجع [تشغيل Hopper واستكشاف الأخطاء](docs/installation.md#launcher-paths-and-troubleshooting).

</details>

<details>
<summary><strong>ماذا يفعل تثبيت المهارة من skills.sh؟</strong></summary>

توفّر المهارة تعليمات الاستقصاء لوكيلك. استخدم `npx lefon-reverse-engineering setup` لتسجيل خادم MCP الخاص بـ LEFON وتثبيت التعليمات المطابقة، ثم أعد تشغيل وكيلك. راجع [تثبيت المهارة وحدها](docs/installation.md#skill-only-installation).

</details>

<details>
<summary><strong>ما الشيفرة التي يعيدها LEFON؟</strong></summary>

يعيد تحليل الشيفرة الأصلية شيفرة شبه برمجية وتعليمات تجميع. يستعيد تحليل JavaScript/Electron الوحدات والعلاقات بينها. يستخدم وكيلك هذه النتائج لكتابة تنفيذ واختباره؛ وتقدّم [دراسات الحالة](#دراسات-الحالة) أمثلة عملية.

</details>

<details>
<summary><strong>هل يرفع LEFON تطبيقي؟</strong></summary>

يحلّل LEFON الأهداف محليًا. يتلقى وكيلك نتائج الأدوات، ولموفّر النموذج الذي يستخدمه سياسة بيانات خاصة به.

</details>

<details>
<summary><strong>ماذا أفعل إذا واجهت خطأ؟</strong></summary>

حدّث أولًا؛ فقد يكون إصدار حديث قد أصلح المشكلة بالفعل.

لواجهة CLI المثبّتة عبر npm:

```bash
lefon update
```

لإعداد الوكيل عبر `npx`:

```bash
npx lefon-reverse-engineering@latest setup
```

إذا كنت تستخدم وكيلًا، فأكمل [تحديث الإعداد](#تحديث-lefon) وأعد تشغيله. أعد محاولة المهمة نفسها. إذا استمرت المشكلة، [افتح issue](https://github.com/mkbraion/lefon-reverse-engineering/issues) يتضمن إصدار LEFON، ونوع الهدف، وخطوات إعادة الإنتاج، ومخرجات الخطأ.

</details>

## التوثيق

ابدأ بـ [الأدلة العملية](https://mkbraion.github.io/lefon-reverse-engineering/guides/) على الموقع. للخيارات الدقيقة والمتطلبات وعقود النتائج:

- [التثبيت والإعداد](docs/installation.md): تسجيل الوكلاء، وتهيئة الموفّرين، والتحديثات، وإلغاء التثبيت.
- [الجاهزية واستكشاف الأخطاء](docs/installation.md#check-readiness-for-your-task): تشخيص وكيل أو محرك تحليل محدد.
- [CLI وEvidence](docs/cli.md): الأوامر، واختيار الموفّر، واللقطات، والاستيراد/التصدير، وحالات الخروج.
- [عقود MCP](docs/mcp-contracts.md) و[تعليمات الوكلاء](docs/mcp-prompts.md): نتائج الأدوات، والجلسات، والاستقصاءات الموجّهة.
- [كتالوج الأدوات](docs/mcp-contracts.md#generated-catalog): قائمة الأدوات والموفّرين وأوامر CLI المولّدة أثناء البناء.
- [خطة العمل](docs/roadmap.md): الأعمال المخطط لها ومتابعة القدرات.

أبلغ عن الثغرات وفق [SECURITY.md](SECURITY.md).

## سجل النجوم

🎉 **50,000 نجمة على GitHub — شكرًا لكم!**

شكرًا لكل من يستخدم LEFON، ويبلّغ عن الأخطاء، ويقترح ميزات، ويختبر إصدارات البناء، ويساهم بالإصلاحات.

<a href="https://www.star-history.com/?repos=mkbraion%2Flefon-reverse-engineering&amp;type=date">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/chart?repos=mkbraion/lefon-reverse-engineering&amp;type=date&amp;theme=dark&amp;legend=top-left" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/chart?repos=mkbraion/lefon-reverse-engineering&amp;type=date" />
    <img alt="سجل نجوم LEFON على GitHub" src="https://api.star-history.com/chart?repos=mkbraion/lefon-reverse-engineering&amp;type=date" />
  </picture>
</a>

## إخلاء المسؤولية

يوفّر LEFON أدوات لأبحاث الهندسة العكسية والتحليل وإعادة البناء المشروعة. أنت مسؤول عن الحصول على أي تفويض مطلوب والالتزام بالقوانين المعمول بها. لا يؤيد المشروع الاستخدام غير القانوني أو غير المصرّح به.

## المساهمة

نرحّب بمساعدتك في تطوير LEFON! [افتح issue](https://github.com/mkbraion/lefon-reverse-engineering/issues) للإبلاغ عن خطأ أو اقتراح ميزة، أو [أرسل pull request](https://github.com/mkbraion/lefon-reverse-engineering/pulls) لتحسين الشيفرة أو التوثيق.

راجع [CONTRIBUTING.md](CONTRIBUTING.md) لإعداد بيئة التطوير والفحوص، و[دليل الاختبار](docs/testing.md) لمسارات التحقق، و[خريطة البنية](docs/architecture.mermaid) لهيكل المشروع.

## الترخيص

[MIT](LICENSE)
