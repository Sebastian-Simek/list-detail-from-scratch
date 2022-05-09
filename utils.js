export function renderComposerNames(composers) {
    const div = document.createElement('div');
    div.textContent = 'Composers';
    
    const h1 = document.createElement('h1');
    h1.textContent = composers.name;

    const p = document.createElement('p');
    p.textContent = composers.img;

    div.append(h1, p);
    return div;
}