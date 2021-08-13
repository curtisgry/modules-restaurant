const initPage = () => {
    const body = document.querySelector('body')
    const root = document.createElement('div');
    const footer = document.createElement('footer');
    root.id = 'content'
    body.appendChild(root)
    const sample = document.createElement('section');
    sample.classList.add('sample');

    const header = document.createElement('header');
    header.id = 'header'
    header.innerHTML = `
            <div class="title">
                <h1>VEGA</h1>
            </div>
            <nav class="nav">
                <ul>
                    <li><a class="about" href="#">About</a></li>
                    <li><a class="menu" href="#">Menu</a></li>       
                    <li><a class="contact" href="#">Contact</a></li>
                </ul>
            </nav>
    `;

    footer.innerHTML = `
        <div class-"footer-info">Developed by Curtis Gray</div>
    `

    root.appendChild(header)
    root.appendChild(sample)
    body.appendChild(footer)
    return { root, sample, header };
}

export default initPage