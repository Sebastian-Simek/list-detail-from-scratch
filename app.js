import { renderComposerNames } from './render-utils.js';
import { composersArray } from './composers.js';

const div = document.getElementById('composers');

for (let composers of composersArray) {
    const composerDiv = renderComposerNames(composers);
    div.append(composerDiv);
  
}

