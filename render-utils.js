export function renderComposerNames(composers) {
    
    const a = document.createElement('a');
    a.href = `/composer-details/?id=${composers.id}`;
    a.textContent = composers.img;

    const div = document.createElement('div');
    div.textContent = 'Composer:';
    
    const h1 = document.createElement('h1');
    h1.textContent = composers.name;

    div.append(h1, a);
    return div;
}

export function renderComposerNamesDetails(composers) {
    const div = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.textContent = composers.name;

    const img = document.createElement('img');
    img.src = '../assets/alchemy-logo.png';

    const p = document.createElement('p');
    p.textContent = composers.era;

    const ul = document.createElement('ul');
    ul.textContent = 'Hits:';

    for (let music of composers.hits) {
        const li = document.createElement('li');
        li.textContent = `${music.pieceName}: ${music.Classification}`;
        ul.append(li);
    }
    div.append(h2, img, p, ul);
    return div;
}
