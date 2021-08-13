const renderContact = (root) => {
    root.sample.innerHTML = '';
    const contact = document.createElement('div')
    // contact.classList.add('item')
    contact.innerHTML = `
                <div class="about-div">
                    <h2>Talk to us!</h2>
                    <p class="contact">contact@vega.com</p>
                    <p class="contact">555-555-5555</p>
                </div>
        `;
    root.sample.appendChild(contact)
}

export default renderContact