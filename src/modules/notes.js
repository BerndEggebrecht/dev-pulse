export function initNotes() {
    const notesInput = document.getElementById('notes-input');
    if (!notesInput) return;

    // Gespeicherte Notiz laden
    const savedNote = localStorage.getItem('devpulse_quicknote');
    if (savedNote) {
        notesInput.value = savedNote;
    }

    // Bei Eingabe im LocalStorage sichern
    notesInput.addEventListener('input', () => {
        localStorage.setItem('devpulse_quicknote', notesInput.value);
    });
}