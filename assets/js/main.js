
(function () {
    "use strict";

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    /**
    * Easy event listener function
    */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }

    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    /**
     * Easy on scroll event listener 
     */
    const onload = (el, listener) => {
        el.addEventListener('load', listener)
    }

    /**
    * Toggle .header-scrolled class to #header when page is scrolled
    */
     
    let selectHeader = select('#header')
    if (selectHeader) {
        const headerScrolled = () => {
            if (window.scrollY > 50) {
                
                selectHeader.classList.replace('py-6', 'py-3')
                selectHeader.classList.add('bg-primary', 'backdrop-blur-lg')
            } else {
                selectHeader.classList.replace('py-3', 'py-6')
                selectHeader.classList.remove('bg-primary', 'backdrop-blur-lg')
            }
        }
        //window.addEventListener('load', headerScrolled)
        onscroll(document, headerScrolled)
    }

    
    let selectProfile = select('#profile-pic')
    let selectProfileTitle = select('#profile-title')
    let selectProfileSubtitle = select('#profile-subtitle')
    let selectProfileConnect = select('#profile-connect')
    let selectProfileButton = select('#profile-button')
    if (selectProfile && selectProfileTitle && selectProfileSubtitle && selectProfileConnect && selectProfileButton){
        const annimateUp = () => {
            selectProfile.classList.remove('translate-y-18','opacity-0')
            selectProfileTitle.classList.remove('translate-y-18','opacity-0')
            selectProfileSubtitle.classList.remove('translate-y-14','opacity-0')
            selectProfileConnect.classList.remove('translate-y-18','opacity-0')
            selectProfileButton.classList.remove('translate-y-14','opacity-0')
        }
        onload(window, annimateUp)
    }

    



})()