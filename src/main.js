import './style.css';
import { initNotes } from './modules/notes.js';
import { initJsonFormatter } from './modules/jsonFormatter.js';
import { initRegexTester } from './modules/regexTester.js';

document.addEventListener('DOMContentLoaded', () => {
    initNotes();
    initJsonFormatter();
    initRegexTester();
    
    console.log('DevPulse initialized successfully 🚀');
});
