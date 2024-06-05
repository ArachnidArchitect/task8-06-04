let input = document.querySelector('input')
let button = document.querySelector('button')
let display = document.querySelector('h2')



button.addEventListener('click', ()=>{
    let tempStorage = input.value.split(',')
    console.log(input.value)
    console.log(tempStorage)
    rgbToHex(tempStorage[0],tempStorage[1],tempStorage[2])
})


function rgbToHex(r, g, b) {
    if ((r>255 || g>255 || b >255) || (r<0 || g<0 || b <0)) {
        alert("There is no hex for that value")
    }else{
        let input = [r, g, b]
    let hex = '#'
    for (let i = 0; i < input.length ; i++) {
        let color = input[i]

        let whole = Math.floor(color / 16)
        let rem = color % 16
        if (whole > 9 && whole < 16) {
            switch (whole) {
                case 10:
                    whole = 'a'
                    break;
                case 11:
                    whole = 'b'
                    break;
                case 12:
                    whole = 'c'
                    break;
                case 13:
                    whole = 'd'
                    break;
                case 14:
                    whole = 'e'
                    break;
                case 15:
                    whole = 'f'
                    break;
            }
        }
        hex += whole
        if (rem>9 && rem <16) {            
            switch (rem) {
                case 10:
                    rem = 'a'
                    break;
                case 11:
                    rem = 'b'
                    break;
                case 12:
                    rem = 'c'
                    break;
                case 13:
                    rem = 'd'
                    break;
                case 14:
                    rem = 'e'
                    break;
                case 15:
                    
                    rem = 'f'
                    break;
            }
        }
        
        hex += rem

    }
console.log(hex)
display.innerText = hex
    }
    
}