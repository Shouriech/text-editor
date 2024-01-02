import { capitalizeSentences, correctGrammar } from './grammar.js';

document.getElementById('editor').addEventListener('input', function() {
    var text = this.value;
    var correctedText = capitalizeSentences(text);
    correctedText = correctGrammar(correctedText);
    document.getElementById('output').innerText = correctedText;
});