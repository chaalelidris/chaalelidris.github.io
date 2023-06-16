(function () {
    "use strict";

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim();
        if (all) {
            return [...document.querySelectorAll(el)];
        } else {
            return document.querySelector(el);
        }
    };

    /**
    * Easy event listener function
    */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all);
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener));
            } else {
                selectEl.addEventListener(type, listener);
            }
        }
    };

    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener);
    };

    /**
     * Easy on load event listener 
     */
    const onload = (el, listener) => {
        el.addEventListener('load', listener);
    };

    /**
    * Toggle .header-scrolled class to #header when page is scrolled
    */
    const toggleHeaderClass = () => {
        const selectHeader = select('#header');
        if (selectHeader) {
            if (window.scrollY > 50) {
                selectHeader.classList.replace('py-6', 'py-3');
                selectHeader.classList.add('bg-primary', 'backdrop-blur-lg', 'shadow-xl');
            } else {
                selectHeader.classList.replace('py-3', 'py-6');
                selectHeader.classList.remove('bg-primary', 'backdrop-blur-lg', 'shadow-xl');
            }
        }
    };

    const animateProfileElements = () => {
        const selectProfile = select('#profile-pic');
        const selectProfileTitle = select('#profile-title');
        const selectProfileSubtitle = select('#profile-subtitle');
        const selectProfileConnect = select('#profile-connect');
        const selectProfileButton = select('#profile-button');
        if (selectProfile && selectProfileTitle && selectProfileSubtitle && selectProfileConnect && selectProfileButton) {
            selectProfile.classList.remove('translate-y-18', 'opacity-0');
            selectProfileTitle.classList.remove('translate-y-18', 'opacity-0');
            selectProfileSubtitle.classList.remove('translate-y-14', 'opacity-0');
            selectProfileConnect.classList.remove('translate-y-18', 'opacity-0');
            selectProfileButton.classList.remove('translate-y-14', 'opacity-0');
        }
    };

    // Attach scroll event listener to toggle header class
    onscroll(document, toggleHeaderClass);

    // Attach load event listener to animate profile elements
    onload(window, animateProfileElements);
})();
