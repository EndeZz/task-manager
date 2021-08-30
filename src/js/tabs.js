import $$ from './library.js'

function getArrayTabs() {
  return document.querySelectorAll('.tabs__item')
}

function getCurrentValueTab() {
  return !sessionStorage.getItem('dataTab')
    ? 'movies'
    : sessionStorage.getItem('dataTab')
}

export default function switchTabs() {
  changeClassActive(getCurrentValueTab())

  installSavedTab(getArrayTabs())

  setClickedTab(getArrayTabs())
}

function setClickedTab(arrTabs) {
  arrTabs.forEach((tabItem) => {
    tabItem.addEventListener('click', (event) => {
      arrTabs.forEach((item) => {
        item.classList.remove('tabs__item_active')
      })
      event.target.classList.add('tabs__item_active')

      sessionStorage.setItem('dataTab', event.target.getAttribute('data-tab'))

      changeClassActive(getCurrentValueTab())
    })
  })
}

function installSavedTab(arrTabs) {
  arrTabs.forEach((item) => {
    if (getCurrentValueTab() === item.getAttribute('data-tab')) {
      item.classList.add('tabs__item_active')
    } else {
      item.classList.remove('tabs__item_active')
    }
  })
}

function changeClassActive(currentTab) {
  if (currentTab === 'movies') {
    $$('.new-product').classList.add('active')
    $$('.genre').classList.add('active')
    $$('.channels').classList.remove('active')
  }
  if (currentTab === 'channels') {
    $$('.new-product').classList.remove('active')
    $$('.genre').classList.remove('active')
    $$('.channels').classList.add('active')
  }
}
