const initPage = () => {
    const body = document.querySelector('body')
    const root = document.createElement('div');
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
    root.appendChild(header)
    root.appendChild(sample)
    return { root, sample, header };
}

export default initPage