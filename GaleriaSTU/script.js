const gallery = document.getElementById("gallery");
const picture = document.getElementById("picture");
const btn1 = document.getElementById("btn1");


function backToIndex() {
    location.href="/Zabytki_Cieszyna/Index/index.html";
}

function changeImg(event) {
    if (event.target.id == "img1") {
        picture.setAttribute("src", "https://photos.wikimapia.org/p/00/05/55/78/65_big.jpg");
    }else if (event.target.id == "img2") {
        picture.setAttribute("src", "https://wszystkiestronyswiata.pl/wp-content/uploads/2022/08/studnia.jpg");
    }else if (event.target.id == "img3") {
        picture.setAttribute("src", "https://www.kamratowo.pl/sites/default/files/styles/highlighted/public/2018-10/cieszyn%20-%20studnia%20%2813%29.JPG?itok=jd5atmtQ");
    }else if (event.target.id == "img4") {
        picture.setAttribute("src", "https://v.wpimg.pl/ODQ2MTI3YCUwUDtnZkhtMHMIbz0gEWNmJBB3dmYLf3QpHSs9JVY9ISFdYzM7Rj8lJkJjJCUcLjQ4HTtlZlcmNyFeLC1mViImNFZiN3BSLHRnBnh5ewordXwGdGctHi1zMgNgZX4EeyAwVnhjfFZ8Ziw");
    }
}

gallery.addEventListener("click", changeImg);
btn1.addEventListener("click", backToIndex);