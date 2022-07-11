// Esoteric script (EScript - defined by esoteric, terrible practices)
const confettiContainer = document.querySelector('#confetti-test')
let container = document.createElement('section')
container.setAttribute('id', 'confetti-container')
container.classList.add('h-[800px]', 'relative', 'w-full')
let rotation = ['45deg', '-45deg']
let colors = ['220 38 38', '59 130 246', '254 240 138', '251 146 60']

// creating a non-based birthday congratulations card 
// displayed on click of button, becomes based after 3-second timeout

let wordContainer = document.createElement('div')
wordContainer.classList.add('text-7xl', 'space-x-2', 'text-center', 'font-bold','m-auto')
'HAPPY BIRTHDAY'.split('').forEach(letter => (/[\w]/).test(letter) ? wordContainer.innerHTML += `<span class="transition-all">${letter}</span>` : wordContainer.innerHTML += '<br>')

// You may be wondering why I'm using a class constructor to create a single confetti instance
// trolololo

class confettiItem{
    constructor(){
        this.rotate = `${Math.floor(Math.random() * (135 - 15)) + 15}deg`
        this.color = `${Math.ceil(Math.random() * colors.length - 1)}`
        this.right = `${Math.floor(Math.random() * 100)}%`
        this.top = `${Math.floor(Math.random() * 20)}%`, 
        this.html = `<div style="background-color:rgb(${colors[this.color]}); opacity:1; rotate:${this.rotate};top:${this.top};right:${this.right}" class="z-[51]  transition-all confetti absolute w-5 h-2 top-5"></div>`
    }
}

// class of birthday button - used to position and style
// has the click method which is fired off on click
// causes hyperborea 
// trolololo
class buttonClass{
    constructor(button){
        this.button = button
        this.width = this.button.offsetWidth
        this.height = this.button.offsetHeight
    }
    position(){
        this.button.style.top = `calc(50vh - ${this.button.offsetHeight/2}px)`
        this.button.style.left = `calc(50vw - ${this.button.offsetWidth/2}px)`
    }
}
// the event listener for based occurences
let birthdayButton = new buttonClass
(document.querySelector('#birthday-button-section'))

birthdayButton.button.onclick = () => {
    // reveal the bovines
    document.querySelectorAll('.gif').forEach(bovine => bovine.classList.remove('opacity-0'))
    // remove the shroomjack's ability to scroll lololo
    document.body.style.overflow = 'hidden';
    // remove the clickable nature of basedability
    birthdayButton.button.classList.add('pointer-events-none')
    // change innerHTML and styling of button section
    // adjust position
    console.log(birthdayButton.button)
    birthdayButton.button.firstElementChild.classList.remove('rounded-md', 'text-white')
    birthdayButton.button.firstElementChild.style.background = 'transparent'
    clearInterval(colorChange)
    birthdayButton.button.innerHTML = ''
    birthdayButton.button.appendChild(wordContainer)
    birthdayButton.position()

    // changing the color of each letter (birthday message)
    // what's your index in the childIndex register of Mozambique ?
    let childIndex = 0 
    const letterColorChange = setInterval(() => {
        // skip <br>
        wordContainer.children[childIndex % (wordContainer.children.length)].tagName == 'BR' ? childIndex++ : childIndex

        let child = wordContainer.children[childIndex % (wordContainer.children.length)]
        child.style = 'color:orange; font-size:9rem'
        setTimeout(() => child.style='',125)
        childIndex++
        birthdayButton.position()
    },250)

    // hyperborea is constant :muscle_flex:
    const hyperborea = document.querySelector('.video')
    hyperborea.classList.remove('hidden')
    hyperborea.play()
    // generate a whopping 120 instances of confetti
    for(let i = 0; i < 120; i++){
        let item = new confettiItem().html
        container.innerHTML += (item)
    }
    // insert the confetti into the container
    document.querySelector('#confetti-section').appendChild(container)

    // watch the confetti fall
    let movingInterval = setInterval(() => {
        document.querySelectorAll('.confetti').forEach(piece => {
            let opacityStyle = piece.style.opacity
            let rotateStyle = parseInt((piece.style.rotate).match(/[0-9]+/))
            let topStyle = parseInt((piece.style.top).match(/[0-9]+/))
            topStyle += Math.floor(Math.random() * (20 - 10) + 10) / 10
            rotateStyle += 5
            opacityStyle -= 0.06
            piece.style.top = `${topStyle}%`
            piece.style.opacity = `${opacityStyle}`
            piece.style.rotate = `${rotateStyle}deg`
        })
    }, 60)
    // make the confettifall STOP
    // and make the website based
    setTimeout(() => {
        setInterval(() => console.log('ASTERIX ES OBELIX MEGERKEZETT HYPERBOREA-BOL'),500)
        // hyperborealise the birthday message
        childIndex = 0
        wordContainer.innerHTML = ''
        'ASTERIX AND OBELIX ARE HYPERBOREAN'.split('').forEach(letter => (/[\w]/).test(letter) ? wordContainer.innerHTML += `<span class="transition-all">${letter}</span>` : wordContainer.innerHTML += '<br>')

        // hyperborealise the bovines
        document.querySelectorAll('.gif').forEach(based => {
            based.firstElementChild.setAttribute('src', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f2968b32-6f8d-43e4-bb59-278ac087d336/deczckr-00688921-9a8a-471d-98ca-65099af804d3.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YyOTY4YjMyLTZmOGQtNDNlNC1iYjU5LTI3OGFjMDg3ZDMzNlwvZGVjemNrci0wMDY4ODkyMS05YThhLTQ3MWQtOThjYS02NTA5OWFmODA0ZDMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.66PdIaT5gqIsz3R-IfMU9YksfmoO3g0hAoWAQn6xnUw')
            
        })
        document.querySelectorAll('.gif')[0].style.left = '2rem'
        document.querySelectorAll('.gif')[1].style.right = '-12rem'
        // make the birthday messages perfect 
        document.querySelectorAll('.disappear').forEach(message => message.classList.add('hidden', 'opacity-0'))
        // make hyperborea sing
        hyperborea.muted = false
        hyperborea.classList.remove('opacity-0')

        // no time for childplay 
        document.querySelectorAll('.confetti').forEach(piece => piece.classList.toggle('hidden'))
        clearInterval(movingInterval)        
    }, 3000)
}

// button generic styling stuff

// funny color changing interval
let counter = 0
let colorChange = setInterval(() => {
    birthdayButton.button.firstElementChild.style.backgroundColor = `rgb(${(colors[counter++ % (colors.length - 1)])})`
    counter++
},1000)
// center the button - horizontally and vertically

birthdayButton.position()
