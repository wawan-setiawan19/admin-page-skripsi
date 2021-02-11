import { baseUrl } from "./routes.js";

class Misi {
    static tampilDataMisi() {
        const dataMisiElement = document.querySelector("#dataMisi");
        let dummy = "";
        let nomor = 1;
        fetch(`${baseUrl}misi`)
            .then((response) => response.json())
            .then((result) => {
                result.forEach((element) => {
                    dummy += `
                        <tr>
                            <td>${nomor}</td>
                            <td>${element.nama_misi}</td>
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
                dataMisiElement.innerHTML = dummy;
            });
    }
}

export default Misi;
