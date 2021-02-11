const nomorSoal = document.querySelector("#nomorSoal");
const soal = document.querySelector("#soal");
const pilihan1 = document.querySelector("#pilihan1");
const pilihan2 = document.querySelector("#pilihan2");
const pilihan3 = document.querySelector("#pilihan3");
const btnSubmit = document.querySelector("#btnSubmit");
const baseUrl = "http://127.0.0.1:8000/api/";

btnSubmit.addEventListener("click", () => {
    let data = {
        nomor_soal: parseInt(nomorSoal.value),
        soal: soal.value,
        pilihan1: pilihan1.value,
        pilihan2: pilihan2.value,
        pilihan3: pilihan3.value,
    };
    postSoal(data);
});

const postSoal = (data) => {
    fetch(`${baseUrl}post_soal_vak`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });
};
