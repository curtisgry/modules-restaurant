import './style.css'
import initPage from './pageLoad.js'
import renderMenu from './menu.js'
import renderAbout from './about.js'
import renderContact from './contact.js'
import bgImg from './images/foodbg.jpg'
import burger1 from './images/burger1.jpg'
import burger2 from './images/burger2.jpg'
import wrap from './images/wrap.jpg'

const images = [burger1, burger2, wrap];
const menuItems = ['Quinoa Burger', 'Blackbean Burger', 'Avocado Wrap']

const root = initPage();
renderAbout(root);

const bindEvents = ((root) => {

    const about = root.header.querySelector('.about')
    const menu = root.header.querySelector('.menu')
    const contact = root.header.querySelector('.contact')

    about.addEventListener('click', () => {
        renderAbout(root)
    })
    menu.addEventListener('click', () => {
        renderMenu(root, images, menuItems)
    })
    contact.addEventListener('click', () => {
        renderContact(root)
    })

})(root)




