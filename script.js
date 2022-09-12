var li_items = document.querySelectorAll('.sidebar ul li')
var nav_menu = document.querySelector('.nav_menu_open')
var sidemenu_wrapper = document.querySelector('.sidemenu_wrapper')
var close_menu = document.querySelector('li.close')
var quad2 = document.querySelector('quad2')

var open_search = document.querySelector('.nav_search_open')
var close_search = document.querySelector('.nav_search_close')
var nav_pesquisa = document.getElementById('nav_pesquisa')

nav_menu.addEventListener('click', () => {
  close_menu.closest('.sidemenu_wrapper').classList.toggle('hover_collapse')
})

close_menu.addEventListener('click', () => {
  close_menu.closest('.sidemenu_wrapper').classList.toggle('hover_collapse')
})

open_search.addEventListener('click', () => {
  close_search.closest('.nav_pesquisa').classList.toggle('search_collapse')
})

close_search.addEventListener('click', () => {
  close_search.closest('.nav_pesquisa').classList.toggle('search_collapse')
})

var foot_SN = document.querySelector('.foot_SN')
var foot_SN_cont = document.querySelector('.foot_SN_cont')

foot_SN.addEventListener('click', () => {
  foot_SN_cont.closest('.foot_SN_cont').classList.toggle('foot_menu_collapse')
})

var foot_MC = document.querySelector('.foot_MC')
var foot_MC_cont = document.querySelector('.foot_MC_cont')

foot_MC.addEventListener('click', () => {
  foot_MC_cont.closest('.foot_MC_cont').classList.toggle('foot_menu_collapse')
})

var foot_PL = document.querySelector('.foot_PL')
var foot_PL_cont = document.querySelector('.foot_PL_cont')

foot_PL.addEventListener('click', () => {
  foot_PL_cont.closest('.foot_PL_cont').classList.toggle('foot_menu_collapse')
})

var foot_CT = document.querySelector('.foot_CT')
var foot_CT_cont = document.querySelector('.foot_CT_cont')

foot_CT.addEventListener('click', () => {
  foot_CT_cont.closest('.foot_CT_cont').classList.toggle('foot_menu_collapse')
})

var dep1 = document.querySelector('.dep1')
var dep1_open = document.querySelector('.dep1_open')

dep1.addEventListener('click', () => {
  dep1_open.closest('.dep1_open').classList.toggle('dep_collapse')
  dep1.closest('.dep1').classList.toggle('dep_select')
})

var dep2 = document.querySelector('.dep2')
var dep2_open = document.querySelector('.dep2_open')

dep2.addEventListener('click', () => {
  dep2_open.closest('.dep2_open').classList.toggle('dep_collapse')
  dep2.closest('.dep2').classList.toggle('dep_select')
})

var dep3 = document.querySelector('.dep3')
var dep3_open = document.querySelector('.dep3_open')

dep3.addEventListener('click', () => {
  dep3_open.closest('.dep3_open').classList.toggle('dep_collapse')
  dep3.closest('.dep3').classList.toggle('dep_select')
})

var dep4 = document.querySelector('.dep4')
var dep4_open = document.querySelector('.dep4_open')

dep4.addEventListener('click', () => {
  dep4_open.closest('.dep4_open').classList.toggle('dep_collapse')
  dep4.closest('.dep4').classList.toggle('dep_select')
})

var dep5 = document.querySelector('.dep5')
var dep5_open = document.querySelector('.dep5_open')

dep5.addEventListener('click', () => {
  dep5_open.closest('.dep5_open').classList.toggle('dep_collapse')
  dep5.closest('.dep5').classList.toggle('dep_select')
})

var dep6 = document.querySelector('.dep6')
var dep6_open = document.querySelector('.dep6_open')

dep6.addEventListener('click', () => {
  dep6_open.closest('.dep6_open').classList.toggle('dep_collapse')
  dep6.closest('.dep6').classList.toggle('dep_select')
})
