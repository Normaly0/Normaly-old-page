function focusElement(el) {
    (el === 'body') ? 
    window.scroll({top: 0, left: 0, behavior: 'smooth'}) : 
    document.getElementById(el).scrollIntoView({behavior: 'smooth'});
}