function regionList(btn, list) {

    btn.addEventListener('click', () => {
        if (list.style.display == 'block'){
            list.style.display = 'none'
        }
        else {
            list.style.display = 'block'
        }
    })
    
}

export default regionList