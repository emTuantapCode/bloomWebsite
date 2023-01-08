const searchInput = document.getElementById('search-input')
const searchButton = document.getElementById('search-button')


const handleClickSearch = () => {
    var isShow = searchInput.className.includes('show-search')
    if(isShow){
        searchInput.classList.remove('show-search')
    }else{
        searchInput.classList.add('show-search')
    }
}

searchButton.addEventListener('click',handleClickSearch)

const sider1 = document.querySelector('.sider-nav-1')
const sider2 = document.querySelector('.sider-nav-2')
const sider3 = document.querySelector('.sider-nav-3')
const sider4 = document.querySelector('.sider-nav-4')

const handleOverF = () => {
    sider2.classList.remove('active-sider')
    sider3.classList.remove('active-sider')
    sider4.classList.remove('active-sider')
    sider1.classList.add('active-sider')
}
const handleOverS = () => {
    sider1.classList.remove('active-sider')
    sider3.classList.remove('active-sider')
    sider4.classList.remove('active-sider')
    sider2.classList.add('active-sider')
}
const handleOverT = () => {
    sider2.classList.remove('active-sider')
    sider1.classList.remove('active-sider')
    sider4.classList.remove('active-sider')
    sider3.classList.add('active-sider')
}
const handleOverFth = () => {
    sider2.classList.remove('active-sider')
    sider3.classList.remove('active-sider')
    sider1.classList.remove('active-sider')
    sider4.classList.add('active-sider')
}
const handleOut = () => {
    sider2.classList.remove('active-sider')
    sider3.classList.remove('active-sider')
    sider1.classList.remove('active-sider')
    sider4.classList.remove('active-sider')
}
