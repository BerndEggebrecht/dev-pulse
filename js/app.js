document.addEventListener('DOMContentLoaded', () => {
    const notesInput = document.getElementById('notes-input');

    // Gespeicherte Notiz beim Laden wiederherstellen
    const savedNote = localStorage.getItem('devpulse_quicknote');
    if (savedNote) {
        notesInput.value = savedNote;
    }

    // Bei jeder Änderung automatisch im LocalStorage sichern
    notesInput.addEventListener('input', () => {
        localStorage.setItem('devpulse_quicknote', notesInput.value);
    });
});