import swRegister from './utils/swRegister.js';
import './components/jumbtron.js';
import App from './views/app.js';

const app = new App({
    button: document.querySelector('#menu'),
    drawer: document.querySelector('#drawer'),
    content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
});
