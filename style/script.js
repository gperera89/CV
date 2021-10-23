let eventTarget = document.getElementById('wd');

/*eventTarget.addEventListener('click', function() {
    const newLocal = "picture";
    document.getElementById(newLocal).src="style/jscsshtml.png"
}); 
document.img.src = onclick="style/jscsshtml.png" */

let image = document.getElementById('image')

let element1 = document.getElementById('wd');
element1.onclick = function() {
    element1.style.backgroundColor = 'blue';
    image.src="style/jscsshtml.png";
};

let element2 = document.getElementById('e&f');
element2.onclick = function() {
    element2.style.backgroundColor = 'red';
    image.src="style/f45.png";
};

let element3 = document.getElementById('Travel');
element3.onclick = function() {
    element3.style.backgroundColor = 'green';
    image.src="style/tibet.jpeg";
};

let element4 = document.getElementById('Photography');
element4.onclick = function() {
    element4.style.backgroundColor = 'orange';
    image.src="style/photography.jpeg";
};

let element5 = document.getElementById('Sci');
element5.onclick = function() {
    element5.style.backgroundColor = 'pink';
    element5.style.color = "black";
    image.src="style/incpetion.jpg";
};

element1.onmouseleave = function() {
    element1.style.backgroundColor = 'gray';
};
element2.onmouseleave = function() {
    element2.style.backgroundColor = 'gray';
};
element3.onmouseleave = function() {
    element3.style.backgroundColor = 'gray';
};
element4.onmouseleave = function() {
    element4.style.backgroundColor = 'gray';
};
element5.onmouseleave = function() {
    element5.style.backgroundColor = 'gray';
    element5.style.color = "white"
};