const tab = (headerSelector, tabSelector, contentSelector, active) => {
    const header = document.querySelector(headerSelector)
    const tab = document.querySelectorAll(tabSelector)
    const content = document.querySelectorAll(contentSelector)

    function hideTabContent() {
        content.forEach(el => {
            el.style.display = 'none'
        })
        tab.forEach(item => {
            item.classList.remove(active)
        })
    }

    function showTabContent(i = 0) {
        content[i].style.display = 'block'
        tab[i].classList.add(active)
    }

    hideTabContent()
    showTabContent()

    header.addEventListener('click', (e) => {
        tab.forEach((item, i) => {
            if (e.target === item || e.target.parentElement === item ) {
                console.log(item, '\n', item.parentElement);
                hideTabContent()
                showTabContent(i)
            }
        })
    })
}

export default tab;