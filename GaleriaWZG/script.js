const gallery = document.getElementById("gallery");
const picture = document.getElementById("picture");
const btn1 = document.getElementById("btn1");


function backToIndex() {
    location.href="/Zabytki_Cieszyna/Index/index.html";
}

function changeImg(event) {
    if (event.target.id == "img1") {
        picture.setAttribute("src", "https://static.polskieszlaki.pl/zdjecia/turystyka/2023-03/516_348/cieszyn-6-1.jpg");
    }else if (event.target.id == "img2") {
        picture.setAttribute("src", "https://browarcieszyn.pl/img/galleries/0000096/0000795_picture_w1024.jpg");
    }else if (event.target.id == "img3") {
        picture.setAttribute("src", "https://podrozebezosci.pl/wp-content/uploads/2019/11/cieszyn-wieza-piastowska-wzgorze-zamkowe-gora-atrakcje-co-warto-zobaczyc-zwiedzic-zabytki.jpg");
    }else if (event.target.id == "img4") {
        picture.setAttribute("src", "https://i0.wp.com/podrozezmamaitata.com/wp-content/uploads/2018/04/IMG_1371.jpg?resize=1170%2C878&ssl=1");
    }
}

gallery.addEventListener("click", changeImg);
btn1.addEventListener("click", backToIndex);