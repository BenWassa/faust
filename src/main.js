import { cityData, updateCityPanel } from './cities/index.js'
import { Hero } from './views/home.js'
import { SystemView } from './views/system.js'
import { CitiesView } from './views/cities.js'
import { MachinesView } from './views/machines.js'
import { CasualtiesView } from './views/casualties.js'
import { ExitsView } from './views/exits.js'
import { ResourcesView } from './views/resources.js'

const state = {
  currentView: 'home',
  cityData,
  currentCity: 'toronto',
}

const validViews = new Set([
  'home',
  'system',
  'cities',
  'machines',
  'casualties',
  'exits',
  'resources',
])

function selectCity(cityKey) {
  state.currentCity = cityKey
  render()
}

function render() {
  const app = document.getElementById('app')
  const views = {
    home: Hero,
    system: SystemView,
    cities: () => CitiesView(state),
    machines: MachinesView,
    casualties: CasualtiesView,
    exits: ExitsView,
    resources: ResourcesView,
  }
  app.style.opacity = '0'
  setTimeout(() => {
    app.innerHTML = views[state.currentView]()
    if (state.currentView === 'cities') updateCityPanel(state)
    app.style.opacity = '1'
    const progress = {
      home: '0%',
      system: '16%',
      cities: '32%',
      machines: '48%',
      casualties: '64%',
      exits: '80%',
      resources: '100%',
    }
    document.getElementById('progress-bar').style.width = progress[state.currentView]
  }, 300)
}

function navigateTo(viewId) {
  if (!validViews.has(viewId)) return
  state.currentView = viewId
  if (viewId === 'home') {
    history.replaceState(null, '', window.location.pathname + window.location.search)
  } else {
    window.location.hash = viewId
  }
  render()
  window.scrollTo(0, 0)
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu')
  menu.classList.toggle('hidden')
  menu.classList.toggle('flex')
}

function openTrap(trapId, forceOpen = false) {
  const target = document.querySelector(`[data-trap="${trapId}"]`)
  if (!target) return
  const detail = target.querySelector('[data-trap-detail]')
  const icon = target.querySelector('[data-trap-icon]')
  const isOpen = detail && !detail.classList.contains('hidden')

  if (isOpen && forceOpen) {
    return
  }

  const items = document.querySelectorAll('[data-trap]')
  items.forEach((item) => {
    item.classList.remove('trap-active', 'bg-rust/5')
    const itemDetail = item.querySelector('[data-trap-detail]')
    const itemIcon = item.querySelector('[data-trap-icon]')
    if (itemDetail) itemDetail.classList.add('hidden')
    if (itemIcon) itemIcon.classList.remove('rotate-180')
  })

  if (isOpen) {
    return
  }

  target.classList.add('trap-active')
  if (detail) detail.classList.remove('hidden')
  if (icon) icon.classList.add('rotate-180')

  if (window.innerWidth < 768) {
    setTimeout(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }, 100)
  }
}

Object.assign(window, { navigateTo, toggleMobileMenu, openTrap, selectCity })

document.addEventListener('DOMContentLoaded', () => {
  syncViewFromHash()
  render()
  window.addEventListener('hashchange', () => {
    syncViewFromHash()
    render()
  })
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar')
    if (window.scrollY > 50) {
      nav.classList.add('shadow-md', 'py-2')
      nav.classList.remove('py-4')
    } else {
      nav.classList.remove('shadow-md', 'py-2')
      nav.classList.add('py-4')
    }
  })
})

function syncViewFromHash() {
  const hashView = window.location.hash.replace('#', '')
  if (hashView && validViews.has(hashView)) {
    state.currentView = hashView
  }
}
