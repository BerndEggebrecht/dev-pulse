# ⚡ DevPulse

> **DevPulse** ist ein modulares, blitzschnelles und datenschutzfreundliches Developer-Dashboard. Es bündelt die wichtigsten Alltags-Tools an einem Ort, läuft komplett lokal im Browser und funktioniert vollständig offline.

![DevPulse Banner](https://img.shields.io/badge/status-active-emerald?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)
![Tech Stack](https://img.shields.io/badge/stack-Vite%20%7C%20Tailwind%20CSS%20%7C%20Vanilla%20JS-cyan?style=flat-square)

---

## 🛠️ Features & Widgets

* **📝 Quick Notes (Auto-Save)**
  * Ein integrierter Notizblock für Code-Snippets, To-Dos oder temporäre Gedanken.
  * Speichert Eingaben in Echtzeit im `localStorage` ab – deine Daten bleiben lokal und gehen auch beim Schließen des Tabs nicht verloren.

* **🔧 JSON Formatter & Validator**
  * Validiert JSON-Strukturen in Echtzeit und warnt bei Syntaxfehlern.
  * Formatierte Ansicht (`Beautify`) und Datenkomprimierung (`Minify`) auf Knopfdruck.
  * Integrierter "Copy"-Button für den schnellen Export in die Zwischenablage.

* **🔍 Regex Tester**
  * Testet reguläre Ausdrücke (Regular Expressions) direkt gegen beliebige Testtexte.
  * Unterstützt benutzerdefinierte Flags (z. B. globale Suche `g`) und listet alle Treffer inklusive Index-Positionen übersichtlich auf.

---

## 🚀 Tech-Stack

* **Bundler:** [Vite](https://vitejs.dev/) (Ultraschnelle Entwicklung & optimierter Build)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Modernes, responsives Dark-Mode-Design)
* **Architektur:** Modulare JavaScript (ES6+) Struktur & reines Client-Side-Rendering

---

## 📦 Lokale Installation

Um das Projekt lokal auf deinem Rechner zu starten, folge diesen Schritten:

1. **Repository klonen / Ordner öffnen**
   ```bash
   cd dev-pulse

   Abhängigkeiten installieren

Bash
npm install

Entwicklungsserver starten

Bash
npm run dev

Öffne danach die im Terminal angegebene URL (meistens http://localhost:5173) in deinem Browser.

🚢 Build & Deployment
Um eine produktionsfertige, kompilierte Version für das Hosting (z. B. via GitHub Pages oder Vercel) zu erstellen, führe folgenden Befehl aus:

Bash
npm run build

Die fertigen Dateien landen im Ordner dist/.

📄 Lizenz
Dieses Projekt steht unter der MIT License.


---

Viel Erfolg beim Veröffentlichen auf GitHub! Sag Bescheid, wenn du das Projekt noch erweitern oder ein weiteres Widget (wie z. B. einen CSS-Generator oder API-Tester) einbauen möchtest.
