const keys = document.querySelectorAll('.key')

const Whitekeys = document.querySelectorAll('.key.white')
const Blackkeys = document.querySelectorAll('.key.black')

keys.forEach( key => {
    key.addEventListener('click' , ()=> playNote(key))
});



const White_Keys = ['a', 's' , 'd' , 'f' , 'g' , 'h' , 'j'];
const Black_Keys = ['w' , 'e' , 'r' , 't'  , 'y'] ;

document.addEventListener('keydown' , e => {
    if(e.repeat) return
    const key = e.key
    const whiteIndex = White_Keys.indexOf(key);
    const blackIndex = Black_Keys.indexOf(key)

    if(whiteIndex > -1) playNote(Whitekeys[whiteIndex]);
    if(blackIndex > -1) playNote(Blackkeys[blackIndex]);


} )

function playNote(key) {
    let noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play() ;
    key.classList.add('active');
    noteAudio.addEventListener('ended' , ()=> {
        key.classList.remove('active')
    })

} 


