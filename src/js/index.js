import './slider'
import modal from './modules/modal'
import tab from './modules/tab'


modal()
tab('.glazing_slider', '.glazing_block', '.glazing_content', 'active')
tab('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click')
console.log(1)