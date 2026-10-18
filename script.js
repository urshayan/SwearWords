import { words } from './words.js';

const pickBtn = document.getElementById('pickBtn');
const wordDisplay = document.getElementById('wordDisplay');
const statusDiv = document.getElementById('status');
const synth = window.speechSynthesis;

statusDiv.textContent = `Loaded ${words.length} swear-words successfully!`;

function speakWord(word) {
    if (!synth) return;
    synth.cancel(); // Stop any ongoing speech
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.rate = 0.9;
    synth.speak(utterance);
}

pickBtn.addEventListener('click', () => {
    if (words.length === 0) return;
    const randomIndex = Math.floor(Math.random() * words.length);
    const selectedWord = words[randomIndex];
    
    wordDisplay.textContent = selectedWord;
    speakWord(selectedWord);
});