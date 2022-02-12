const toggleButton = document.querySelector('.toggle-button')
const body = document.querySelector('body')

let theme = localStorage.getItem('theme')
if(theme === 'dark'){
    setDark()
}

toggleButton.addEventListener('click', () =>{
    // body.classList.toggle('dark')
    // toggleButton.classList.toggle('active')
    theme = localStorage.getItem('theme')
    if(theme === 'dark'){
        setLight()
    }
    else{
        setDark()
    }
})

function setDark (){
    body.classList.add('dark')
    toggleButton.classList.add('active')
    localStorage.setItem('theme', 'dark')
}

function setLight(){
    body.classList.remove('dark')
    toggleButton.classList.remove('active')
    localStorage.setItem('theme', 'light')
}