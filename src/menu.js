const renderMenu = (root, images) => {
    root.sample.innerHTML = '';
    images.forEach(image => {
        const item = document.createElement('div')
        item.classList.add('item')
        item.innerHTML = `
                <div class="img-container">
                    <img src="${image}" alt="" class="image">
                </div>
                <div class="info">
                    <h3>Delicious</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
        `;
        root.sample.appendChild(item)
    });
}

export default renderMenu