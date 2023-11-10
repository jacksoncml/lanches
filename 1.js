slide1();
function slide1(){
    document.getElementById('imag').src="images.jpeg";
    document.getElementById('imag').style.width = "450px";
    document.getElementById('imag').style.height = "350px";
    document.getElementById('imag').style.border = '1px solid red';
    setTimeout("slide2()", 1000)
}
function slide2(){
    document.getElementById('imag').src="download 2.jpeg";
    document.getElementById('imag').style.width = "450px";
    document.getElementById('imag').style.height = "350px";
    document.getElementById('imag').style.border = '1px solid red';
    setTimeout("slide3()", 1000)
    }
function slide3(){
    document.getElementById('imag').src="download 1.jpeg";
    document.getElementById('imag').style.width = "450px";
    document.getElementById('imag').style.height = "350px";
    document.getElementById('imag').style.border = '1px solid red';
    setTimeout("slide1()", 1000)
    }
function pd(){
    confirm("Compra realizada");
}