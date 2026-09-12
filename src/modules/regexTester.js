export function initRegexTester() {
    const patternInput = document.getElementById('regex-pattern');
    const flagsInput = document.getElementById('regex-flags');
    const testStringInput = document.getElementById('regex-test-string');
    const outputDiv = document.getElementById('regex-output');
    const statusSpan = document.getElementById('regex-status');

    if (!patternInput || !testStringInput) return;

    function runRegex() {
        const pattern = patternInput.value;
        const flags = flagsInput ? flagsInput.value : 'g';
        const testString = testStringInput.value;

        if (!pattern) {
            outputDiv.innerHTML = '<span class="text-slate-500">[ Warten auf Eingabe... ]</span>';
            statusSpan.textContent = 'Bereit';
            statusSpan.className = 'text-xs text-slate-500 font-mono';
            return;
        }

        try {
            const regex = new RegExp(pattern, flags);
            let matches = [];
            let match;

            if (flags.includes('g')) {
                while ((match = regex.exec(testString)) !== null) {
                    matches.push({
                        match: match[0],
                        index: match.index,
                        groups: match.slice(1)
                    });
                    // Endlosschleife bei Zero-Length-Matches verhindern
                    if (match.index === regex.lastIndex) {
                        regex.lastIndex++;
                    }
                }
            } else {
                match = regex.exec(testString);
                if (match) {
                    matches.push({
                        match: match[0],
                        index: match.index,
                        groups: match.slice(1)
                    });
                }
            }

            if (matches.length > 0) {
                statusSpan.textContent = `${matches.length} Treffer gefunden ✓`;
                statusSpan.className = 'text-xs text-emerald-400 font-mono';
                
                let html = `<div class="space-y-2">`;
                matches.forEach((m, i) => {
                    html += `<div class="p-2 bg-slate-900 border border-slate-800 rounded font-mono text-xs flex items-center justify-between">
                        <div>
                            <span class="text-cyan-400">#${i + 1}:</span> 
                            <strong class="text-white bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800 ml-1">${escapeHtml(m.match)}</strong>
                        </div>
                        <span class="text-slate-500 text-[10px]">Index: ${m.index}</span>
                    </div>`;
                });
                html += `</div>`;
                outputDiv.innerHTML = html;
            } else {
                statusSpan.textContent = 'Keine Treffer';
                statusSpan.className = 'text-xs text-amber-400 font-mono';
                outputDiv.innerHTML = '<span class="text-slate-500">Keine Übereinstimmung im Testtext gefunden.</span>';
            }

        } catch (err) {
            statusSpan.textContent = 'Fehler im Muster ✗';
            statusSpan.className = 'text-xs text-red-400 font-mono';
            outputDiv.innerHTML = `<span class="text-red-400">Regex-Fehler: ${escapeHtml(err.message)}</span>`;
        }
    }

    function escapeHtml(str) {
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    patternInput.addEventListener('input', runRegex);
    if (flagsInput) flagsInput.addEventListener('input', runRegex);
    testStringInput.addEventListener('input', runRegex);
}