import { baseUrl } from "./routes.js";

class GayaBelajar {
    static tampilDataGayaBelajar() {
        const dayaGayaBelajarElement = document.querySelector("#dataGayaBelajar");
        let dummy = '';
        fetch(`${baseUrl}soal_VAK`)
            .then((response) => response.json())
            .then((result) => {
                result.forEach((element) => {
                    console.log(element);
                    dummy += `
                        <tr>
                            <td>${element.nomor_soal}</td>
                            <td>${element.soal}</td>
                            <td>${element.pilihan1}</td>
                            <td>${element.pilihan2}</td>
                            <td>${element.pilihan3}</td>
                            <td>
                                <a class="waves-effect waves-light btn yellow darken-2"><i class="material-icons left">edit</i>Ubah</a>
                            </td>
                            <td>
                                <a class="waves-effect waves-light btn red darken-4"><i class="material-icons left">delete</i>Hapus</a>
                            </td>
                        </tr
                    `;
                });
                dayaGayaBelajarElement.innerHTML = dummy;
            });
    }
}

export default GayaBelajar;
