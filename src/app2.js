import $ from 'jquery'
import './app2.css'

const $tabBar = $('#app2 .tab_bar')
const $tabContent = $('#app2 .tab_content')

$tabBar.on('click', 'li', (e) => {
    const i = $(e.currentTarget).index()
    $tabBar
        .children()
        .eq(i)
        .addClass('selected')
        .siblings()
        .removeClass('selected')
    $tabContent
        .children()
        .eq(i)
        .addClass('active')
        .siblings()
        .removeClass('active')
})

$tabBar.children().eq(0).trigger('click')
