setInterval(() => {
    var d = new Date()
    var htime = d.getHours()
    var mtime = d.getMinutes()
    var stime = d.getSeconds()
    var hrotation= 30*htime + mtime/2;
    var mrotation = 6*mtime;
    var srotation = 6*stime;
    
    // document.getElementById("hourhand").style.transform =`rotate(${hrotation}deg)`;
    // document.getElementById("minhand").style.transform = `rotate(${mrotation}deg)`;
    // document.getElementById("sechand").style.transform = `rotate(${srotation}deg)`;

    var hourPointer = document.getElementById("hourhand");
    var minPointer = document.getElementById("minhand");
    var secondPointer = document.getElementById("sechand");

    hourPointer.style.transform = `rotate(${hrotation}deg)`; 
    minPointer.style.transform = `rotate(${mrotation}deg)`; 
    secondPointer.style.transform = `rotate(${srotation}deg)`; 
},1000);