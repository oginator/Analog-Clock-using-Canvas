window.onload = init;


function init() {

    let myCanvas = document.getElementById("clock");

    if (myCanvas.getContext) {
        let ctx = myCanvas.getContext('2d');

        update(ctx);

    } else {
        alert("Canvas is not supported");
    }
      

}


let angle_sec = 0;
let angle_min = 0;
let angle_hour = 0;

function update(ctx) {

    // pocinje kazaljka za sekunde

    ctx.save();

    ctx.clearRect(0, 0, 400, 300);

    //crtanje kruga
    ctx.beginPath();
    ctx.arc(200, 150, 120, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();

    //pokretanje kazaljke
    ctx.translate(200, 150);
    ctx.rotate((6 / 3600) * angle_sec);
    ctx.translate(-200, -150);

    //crtanje kazaljke sekunde
    ctx.beginPath();
    ctx.moveTo(200, 150);
    ctx.lineTo(200, 40);
    ctx.closePath();
    ctx.stroke();

    ctx.restore();

    angle_sec++;

    // pocinje kazaljka za minute

    ctx.save();

    //pokretanje kazaljke
    ctx.translate(200, 150);
    ctx.rotate((1 / 36000) * angle_min);
    ctx.translate(-200, -150);

   //crtanje kazaljke za minute
    ctx.beginPath();
    ctx.moveTo(200, 150);
    ctx.lineTo(200, 50);
    ctx.closePath();
    ctx.stroke();

    ctx.restore();

    angle_min++;

    // pocinje kazaljka za sate
    ctx.save();

    //pokretanje kazaljke
    ctx.translate(200, 150);
    ctx.rotate((0.16 / 360000) * angle_hour);
    ctx.translate(-200, -150);

    //crtanje kazaljke za sate
    ctx.beginPath();
    ctx.moveTo(200, 150);
    ctx.lineTo(200, 80);
    ctx.closePath();
    ctx.stroke();

    ctx.restore();

    angle_hour++;

    requestAnimationFrame(function () {
        update(ctx);
    });


}