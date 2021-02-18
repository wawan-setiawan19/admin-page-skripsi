import { baseUrl, Routes } from "./routes.js";

class GayaBelajar {
    static getElementGayaBelajar() {
        const btnTambahGayaBelajar = document.querySelector("#btnTambahGayaBelajar");
        const btnEditGayaBelajar = document.querySelector("#btnEditGayaBelajar");
        const btnHapusGayaBelajar = document.querySelector("#btnHapusGayaBelajar");

        btnTambahGayaBelajar.addEventListener("click", () => {
            Routes.loadPage("form-gaya-belajar");
        });

        btnEditGayaBelajar.addEventListener("click", () => {
            console.log("edit");
        });

        btnHapusGayaBelajar.addEventListener("click", () => {
            console.log("hapus");
        });
    }

    static simpanDataGayaBelajar() {
        const btnSimpanGayaBelajar = document.querySelector("#btnSimpanGayaBelajar");
        const soalGayaBelajar = document.querySelector("#Soal");
        const pilihanVisual = document.querySelector("#pilihan1");
        const pilihanAudio = document.querySelector("#pilihan2");
        const pilihanKinestetik = document.querySelector("#pilihan3");
        
        btnSimpanGayaBelajar.addEventListener("click", () => {
            let data = {
                soal: soalGayaBelajar.value,
                pilihan1: pilihanVisual.value,
                pilihan2: pilihanAudio.value,
                pilihan3: pilihanKinestetik.value,
            };
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
                    const error = data.errors;
                    if (error) {
                        for (const key in error) {
                            console.log(error[key][0]);
                            M.toast({ html: error[key][0] });
                        }
                    } else {
                        M.toast({
                            html: "Soal berhasil ditambahkan",
                        });
                        Routes.loadPage('gaya-belajar');
                    }
                });
            console.log("simpan");
        });
    }

    static tampilDataGayaBelajar() {
        const dayaGayaBelajarElement = document.querySelector("#dataGayaBelajar");
        let nomorSoal = 0;
        let dummy = "";
        fetch(`${baseUrl}soal_VAK`)
            .then((response) => response.json())
            .then((result) => {
                result.forEach((element) => {
                    nomorSoal++;
                    dummy += `
                        <tr>
                            <td>${nomorSoal}</td>
                            <td>${element.soal}</td>
                            <td>${element.pilihan1}</td>
                            <td>${element.pilihan2}</td>
                            <td>${element.pilihan3}</td>
                            <td>
                                <a class="waves-effect waves-light btn yellow darken-2" id="btnEditGayaBelajar"><i class="material-icons left">edit</i>Ubah</a>
                            </td>
                            <td>
                                <a class="waves-effect waves-light btn red darken-4" id="btnHapusGayaBelajar"><i class="material-icons left">delete</i>Hapus</a>
                            </td>
                        </tr
                    `;
                });
                dayaGayaBelajarElement.innerHTML = dummy;
            })
            .then(() => {
                this.getElementGayaBelajar();
            });
    }
}

export default GayaBelajar;
