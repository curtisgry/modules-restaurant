const renderAbout = (root) => {
    root.sample.innerHTML = '';
    const about = document.createElement('div')
    about.classList.add('item')
    about.innerHTML = `
                <div class="about-div">
                    <h2>Its all plants!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Reiciendis, similique doloribus facere magnam fuga iste ratione 
                    nisi mollitia totam praesentium accusamus eaque cum, ullam ipsam 
                    corrupti nostrum ad obcaecati incidunt?</p>
                </div>
        `;
    const hours = document.createElement('div')
    // hours.classList.add('item')
    hours.innerHTML = `
                <div class="about-div">
                    <h3>Hours</h3>
                    <p>Open from 2pm to 10pm daily!</p>
                </div>
        `;
    root.sample.appendChild(about)
    root.sample.appendChild(hours)
}

export default renderAbout
