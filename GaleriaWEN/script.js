const gallery = document.getElementById("gallery");
const picture = document.getElementById("picture");
const btn1 = document.getElementById("btn1");


function backToIndex() {
    location.href="/Zabytki_Cieszyna/Index/index.html";
}

function changeImg(event) {
    if (event.target.id == "img1") {
        picture.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Cieszy%C5%84ska_Wenecja_2.jpg/1280px-Cieszy%C5%84ska_Wenecja_2.jpg");
    }else if (event.target.id == "img2") {
        picture.setAttribute("src", "https://d-art.ppstatic.pl/kadry/k/r/cd/88/6288bd900b0df_o_full.jpg");
    }else if (event.target.id == "img3") {
        picture.setAttribute("src", "https://static.wixstatic.com/media/8ac3ea_48ad65d4e305424da57c88c970d99c88~mv2.jpg/v1/fill/w_2500,h_1875,al_c/8ac3ea_48ad65d4e305424da57c88c970d99c88~mv2.jpg");
    }else if (event.target.id == "img4") {
        picture.setAttribute("src", "https://gwiazdkacieszynska.pl/images/2022/2023/summer-3517203_1280.jpg");
    }
}

gallery.addEventListener("click", changeImg);
btn1.addEventListener("click", backToIndex);