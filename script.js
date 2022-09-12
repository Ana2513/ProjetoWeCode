var li_items = document.querySelectorAll('.sidebar ul li')
var nav_menu = document.querySelector('.nav_menu')
var sidemenu_wrapper = document.querySelector('.sidemenu_wrapper')
var close_menu = document.querySelector('li.close')

var open_search = document.querySelector('.nav_search_open')
var close_search = document.querySelector('.nav_search_close')
var nav_pesquisa = document.getElementById('nav_pesquisa')

nav_menu.addEventListener('click', () => {
  nav_menu.closest('.sidemenu_wrapper').classList.toggle('hover_collapse')
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
