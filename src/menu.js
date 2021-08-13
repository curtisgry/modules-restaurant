const renderMenu = (root, images, menuItems) => {
    root.sample.innerHTML = '';
    images.forEach(image => {
        const item = document.createElement('div')
        item.classList.add('item')
        item.innerHTML = `
                <div class="img-container">
                    <img src="${image}" alt="" class="image">
                </div>
                <div class="info">
                    <h3 class="item-title"></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
        `;
        root.sample.appendChild(item)
    });
    const itemTitles = document.querySelectorAll('.item-title');

    for (let i = 0; i < itemTitles.length; i++) {
        console.log(itemTitles[i])
        itemTitles[i].innerHTML = `${menuItems[i]}`
    }
}

export default renderMenu