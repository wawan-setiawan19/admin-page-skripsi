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

        Routes.loadPage(page);

        siswa.addEventListener("click", () => {
            Routes.loadPage("siswa");
        });
        misi.addEventListener("click", () => {
            Routes.loadPage("misi");
        });
        panduan.addEventListener("click", () => {
            Routes.loadPage("panduan");
        });
        gayaBelajar.addEventListener("click", () => {
            Routes.loadPage("gaya-belajar");
        });
        preTest.addEventListener("click", () => {
            Routes.loadPage("pre-test");
        });
        postTest.addEventListener("click", () => {
            Routes.loadPage("post-test");
        });
    };
}

Main.getMainElement();

export default Main;
