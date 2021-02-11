import Main from "./main.js";
import Siswa from "./siswa.js";

const baseUrl = "http://127.0.0.1:8000/api/";
class Routes {
    loadPage = (page) => {
        const xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = () => {
            if (xhttp.readyState === 4) {
                const content = document.querySelector("#body-content");
                if (xhttp.status === 200) {
                    content.innerHTML = xhttp.responseText;
                    Main.getMainElement();
                    if(page === 'siswa') Siswa.tampilDataSiswa();
                }
            }
        };

        xhttp.open("GET", `pages/${page}.html`, true);
        xhttp.send();
    };
}

let page = location.hash.substr(1);
if (page == "") page = "siswa";
const route = new Routes();
route.loadPage(page);

export { Routes, baseUrl }; 