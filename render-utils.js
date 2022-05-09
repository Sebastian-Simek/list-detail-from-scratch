export function renderComposerNames(composers) {
    
    const a = document.createElement('a');
    a.href = `/composer-details/?id=${composers.id}`;
    a.textContent = composers.img;

    const div = document.createElement('div');
    div.textContent = 'Composer:';
    
    const h1 = document.createElement('h1');
    h1.textContent = composers.name;

    const p = document.createElement('p');
    p.textContent = composers.img;

    div.append(h1, p, a);
    return div;
}