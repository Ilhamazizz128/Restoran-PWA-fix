const Drawer = {
    init({ button, drawer, content }) {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            this._toggleDrawer(event, drawer);
        });

        content.addEventListener('click', (event) => {
            this._closeDrawer(event, drawer);
        });
    },

    _closeDrawer(event, drawer) {
        event.stopPropagation();
        drawer.classList.remove('open');
    },
    _toggleDrawer(event, drawer) {
        event.stopPropagation();
        drawer.classList.toggle('open');
    },
};

export default Drawer;
