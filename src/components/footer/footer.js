function Footer() {
	const footer = `
    <div class="limiter">
      <section>
        <h3>Github</h3>
        <ul>
          <a href="https://github.com/santosfabin/Randomix" target="_blank">
            <li>Repositório</li>
          </a>
        </ul>
      </section>

      <section>
        <h3>Desenvolvedores</h3>
        <ul>
          <a href="https://github.com/andersonjr1" target="_blank">
            <li>Anderson</li>
          </a>
          <a href="https://github.com/santosfabin" target="_blank">
            <li>Fabiano</li>
          </a>
          <a href="https://github.com/gbrQueiroz" target="_blank">
            <li>Gabriell</li>
          </a>
        </ul>
      </section>

      <section>
        <h3>Alpha EdTech</h3>
        <ul>
          <a href="https://www.alphaedtech.org.br/" target="_blank">
            <li>Conheça a Alpha</li>
          </a>
        </ul>
      </section>
    </div>
`;
	const divFooter = document.createElement("footer");
	divFooter.innerHTML = footer;

	return divFooter;
}

export {Footer};
