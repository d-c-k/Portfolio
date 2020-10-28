document.addEventListener('DOMContentLoaded', function(){

    let x = 'Hamster Paj'
    let run = new TextRunner(x)

    document.getElementById('test3').appendChild(run.text);
    console.log(run)

})