import { baseUrl } from "./routes.js";

class Panduan {
    static tampilDataPanduan() {
        const dataPanduanElement = document.querySelector("#dataPanduan");
        let dummy = "";
        let nomor = 1;
        fetch(`${baseUrl}panduan`)
            .then((response) => response.json())
            .then((result) => {
                result.forEach((element) => {
                    dummy += `
                        <tr>
                            <td>${nomor}</td>
                            <td>${element.judul_panduan}</td>
                            <td>${element.deskripsi}</td>
                            <td>
                                <a class="waves-effect waves-light btn yellow darken-2"><i class="material-icons left">edit</i>Ubah</a>
                            </td>
                            <td>
                                <a class="waves-effect waves-light btn red darken-4"><i class="material-icons left">delete</i>Hapus</a>
                            </td>
                        </tr
                    `;
                    nomor++;
                });
                dataPanduanElement.innerHTML = dummy;
            });
    }
}

export default Panduan;
