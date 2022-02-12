const toggleButton = document.querySelector('.toggle-button')
const body = document.querySelector('body')

//let theme = localStorage.getItem('theme')

let theme = document.cookie.split('=')[2]

if(theme === 'dark'){
    setDark()
}

toggleButton.addEventListener('click', () =>{
    // body.classList.toggle('dark')
    // toggleButton.classList.toggle('active')
    // theme = localStorage.getItem('theme')
    
    theme = document.cookie.split('=')[2]
    
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
    // localStorage.setItem('theme', 'dark')
    document.cookie = 'theme=dark; expires = ' +  new Date(2025,1,1)
}

function setLight(){
    body.classList.remove('dark')
    toggleButton.classList.remove('active')
    // localStorage.setItem('theme', 'light')
    document.cookie = 'theme=light; expires = ' + new Date(2025,1,1)
}