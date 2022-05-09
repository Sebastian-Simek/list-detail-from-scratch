import { findById } from '../utils.js';
import { renderComposerNamesDetails } from '../render-utils.js';
import { composersArray } from '../composers.js';

const params = new URLSearchParams(window.location.search);
const main = document.querySelector('main');

const composer = findById(params.get('id'), composersArray);
const composerDiv = renderComposerNamesDetails(composer);
main.append(composerDiv);

