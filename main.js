var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('<h2>Ingeniero en Sistemas Computacionales | Desarrolladora FrontEnd Jr.</h2>')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Si lo puedes imaginar, lo puedes crear.')
    .pauseFor(2500)
    .deleteChars(6)
    .typeString('<strong>Desarrollar!</strong>')
    .pauseFor(2500)
    .start();