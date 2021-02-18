import GayaBelajar from "./gaya-belajar.js";
import Main from "./main.js";
import Misi from "./misi.js";
import Panduan from "./panduan.js";
import Siswa from "./siswa.js";

// const baseUrl = "http://127.0.0.1:8000/api/";
const baseUrl = "https://d2186d62a231.ngrok.io/api/";

class Routes {
    static loadPage = (page) => {
        const xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = () => {
            if (xhttp.readyState === 4) {
                const content = document.querySelector("#body-content");
                if (xhttp.status === 200) {
                    content.innerHTML = xhttp.responseText;
                    if (page === "siswa") Siswa.tampilDataSiswa();
                    if (page === "misi") Misi.tampilDataMisi();
                    if (page === "panduan") Panduan.tampilDataPanduan();
                    if (page === "gaya-belajar") GayaBelajar.tampilDataGayaBelajar();
                    if (page === "form-gaya-belajar") GayaBelajar.simpanDataGayaBelajar();
                }
            }
        };

        xhttp.open("GET", `pages/${page}.html`, true);
        xhttp.send();
    };
}

export { Routes, baseUrl };
