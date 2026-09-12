export function initJsonFormatter() {
    const input = document.getElementById('json-input');
    const output = document.getElementById('json-output');
    const status = document.getElementById('json-status');
    const formatBtn = document.getElementById('json-format-btn');
    const minifyBtn = document.getElementById('json-minify-btn');
    const copyBtn = document.getElementById('json-copy-btn');

    if (!input || !output) return;

    function processJson(minify = false) {
        const text = input.value.trim();
        if (!text) {
            output.textContent = '';
            status.textContent = 'Bereit';
            status.className = 'absolute bottom-2 right-3 text-[10px] text-slate-500 font-mono';
            return;
        }

        try {
            const parsed = JSON.parse(text);
            const formatted = JSON.stringify(parsed, null, minify ? 0 : 2);
            output.textContent = formatted;
            output.classList.remove('text-red-400');
            output.classList.add('text-cyan-300');
            status.textContent = 'Gültiges JSON ✓';
            status.className = 'absolute bottom-2 right-3 text-[10px] text-emerald-400 font-mono';
        } catch (err) {
            output.textContent = `Fehler: ${err.message}`;
            output.classList.remove('text-cyan-300');
            output.classList.add('text-red-400');
            status.textContent = 'Ungültiges JSON ✗';
            status.className = 'absolute bottom-2 right-3 text-[10px] text-red-400 font-mono';
        }
    }

    // Live-Formatierung bei Eingabe
    input.addEventListener('input', () => processJson(false));

    // Buttons verknüpfen
    formatBtn.addEventListener('click', () => processJson(false));
    minifyBtn.addEventListener('click', () => processJson(true));

    copyBtn.addEventListener('click', () => {
        const content = output.textContent;
        if (!content || status.textContent.includes('Ungültiges')) return;
        
        navigator.clipboard.writeText(content).then(() => {
            const originalText = copyBtn.textContent;
            copyBtn.textContent = 'Kopiert!';
            setTimeout(() => {
                copyBtn.textContent = originalText;
            }, 1500);
        });
    });
}