import { createHomeSection } from './build/home.js';


document.addEventListener('DOMContentLoaded', () => {
    const main = document.createElement('main');
    main.classList.add('main');

    document.body.appendChild(main);

    main.appendChild(createHomeSection());
});
