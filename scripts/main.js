import { Routes } from "./routes.js";
let page = location.hash.substr(1);
if (page == "") page = "siswa";
class Main {
    static getMainElement = () => {
        const siswa = document.querySelector("#siswaNav");
        const misi = document.querySelector("#misiNav");
        const panduan = document.querySelector("#panduanNav");
        const gayaBelajar = document.querySelector("#gayaBelajarNav");
        const preTest = document.querySelector("#preTestNav");
        const postTest = document.querySelector("#postTestNav");
        const route = new Routes();
        console.log(page);
        route.loadPage(page);

        siswa.addEventListener("click", () => {
            route.loadPage("siswa");
        });
        misi.addEventListener("click", () => {
            route.loadPage("misi");
        });
        panduan.addEventListener("click", () => {
            route.loadPage("panduan");
        });
        gayaBelajar.addEventListener("click", () => {
            route.loadPage("gaya-belajar");
        });
        preTest.addEventListener("click", () => {
            route.loadPage("pre-test");
        });
        postTest.addEventListener("click", () => {
            route.loadPage("post-test");
        });
    };
}

Main.getMainElement();

export default Main;
