const gallery = document.getElementById("gallery");
const picture = document.getElementById("picture");
const btn1 = document.getElementById("btn1");


function backToIndex() {
    location.href="/Zabytki_Cieszyna/Index/index.html";
}

function changeImg(event) {
    if (event.target.id == "img1") {
        picture.setAttribute("src", "https://d-art.ppstatic.pl/kadry/k/r/1/c3/3c/5201da7b6c9b7_o_medium.jpg");
    }else if (event.target.id == "img2") {
        picture.setAttribute("src", "https://www.archiwum.cieszyn.pl/files/www.cieszyn.pl%20Marek%20Dzupin%2016[2].jpg");
    }else if (event.target.id == "img3") {
        picture.setAttribute("src", "https://asbb.beskidy.pl/rotunda.large.jpeg");
    }else if (event.target.id == "img4") {
        picture.setAttribute("src", "https://t3.ftcdn.net/jpg/00/69/26/06/360_F_69260617_eTYksfUSEjnRXUG1VLAnH6rc7tvihVlB.jpg");
    }
}

gallery.addEventListener("click", changeImg);
btn1.addEventListener("click", backToIndex);
