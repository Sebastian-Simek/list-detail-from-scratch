export function renderComposerNames(composers) {
    const div = document.createElement('div');
    
    const h1 = document.createElement('h1');
    h1.textContent = composers.name;

    const p = document.createElement('p');

    div.append(h1, p);
}