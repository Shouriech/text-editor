export function capitalizeSentences(text) {
    // Capitalize the first letter of each sentence
    text = text.replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function(c) {
        return c.toUpperCase();
    });

    // Capitalize 'i' when it stands alone
    text = text.replace(/\bi\b/g, 'I');

    return text;
}

export function correctGrammar(text) {
    // Use 'an' before a word that starts with a vowel sound, and 'a' otherwise
    text = text.replace(/\ban ([bcdfghjklmnpqrstvwxyz])/gi, 'a $1');
    text = text.replace(/\ba ([aeiou])/gi, 'an $1');

    // Replace double spaces with a single space
    text = text.replace(/  +/g, ' ');

    // Add a period at the end of the text if missing
    if (!/[.!?]$/.test(text)) {
        text += '.';
    }

    // Replace 'your' followed by a verb with 'you're', and 'you're' followed by a noun with 'your'

    text = text.replace(/\byour (\w+ing)\b/gi, 'you\'re $1');
    text = text.replace(/\byou're (\w+ed)\b/gi, 'your $1');

    // Replace 'it's' followed by a noun with 'its', and 'its' followed by 'is' or 'has' with 'it's'

    text = text.replace(/\bit's (\w+ed)\b/gi, 'its $1');
    text = text.replace(/\bits (is|has)\b/gi, 'it\'s $1');

    // Replace 'there' followed by 'are' with 'they're', and 'they're' followed by a noun with 'their'

    text = text.replace(/\bthere (are)\b/gi, 'they\'re $1');
    text = text.replace(/\bthey're (\w+ed)\b/gi, 'their $1');

    
    return text;
}