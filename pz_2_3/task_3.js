const path = require('path');
const os = require('os');

((pt)=>{
    console.log(os.type() + ' ' + os.platform())
    console.log(path.parse(pt))
})('C:/Users/Михаил/WebstormProjects/untitled1/short_sound.mp3')
