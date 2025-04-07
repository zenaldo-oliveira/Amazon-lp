class Header extends HTMLElement {
  connectedCallback() {
    fetch("./components/header/index.html")
      .then((response) => response.text())
      .then((data) => {
        this.innerHTML = data;
      });
  }
}
class Nav extends HTMLElement {
  connectedCallback() {
    fetch("./components/nav/index.html")
      .then((response) => response.text())
      .then((data) => {
        this.innerHTML = data;
      });
  }
}
class Footer extends HTMLElement {
  connectedCallback() {
    fetch("./components/footer/index.html")
      .then((response) => response.text())
      .then((data) => {
        this.innerHTML = data;
      });
  }
}
customElements.define("site-header", Header);
customElements.define("site-nav", Nav);
customElements.define("site-footer", Footer);
