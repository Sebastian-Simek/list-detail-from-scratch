import { renderComposerNames } from './utils.js';
import { composersArray } from './composers.js';

const div = document.getElementById('composers');

for (let composers of composersArray) {
    console.log(composers);
    const composerDiv = renderComposerNames(composers);
    div.append(composerDiv);
  
}

