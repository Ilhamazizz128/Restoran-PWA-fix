class JumboTron extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <article id="hero">
                <h1> SPECIAL OF Makanan dan Minuman lezat </h1>
                <p>Situs Web Untuk Makanan dan Minuman </p>
                
            </article>
        `;
    }
}

customElements.define('tron-jumbo', JumboTron);
