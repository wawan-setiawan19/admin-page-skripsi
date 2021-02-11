import { baseUrl } from "./routes.js";

class Siswa {
    static tampilDataSiswa = () => {
        const dataSiswaElement = document.querySelector("#dataSiswa");
        let nilaiPretest = 0;
        let nilaiPosttest = 0;
        let keterangan = 0;
        let dummy = "";
        fetch(`${baseUrl}user`)
            .then((response) => response.json())
            .then((result) => {
                result.forEach((element) => {
                    console.log(element);
                    dummy += `
                        <tr>
                            <td>${element.nis}</td>
                            <td>${element.name}</td>
                            <td>${element.kelas}</td>
                            <td>${element.jenis_kelamin}</td>
                            <td>
                                <a class="waves-effect waves-light btn green darken-4"><i class="material-icons left">launch</i>Lihat Detail</a>
                            </td>
                            <td>
                                <a class="waves-effect waves-light btn yellow darken-2"><i class="material-icons left">edit</i>Ubah</a>
                            </td>
                            <td>
                                <a class="waves-effect waves-light btn red darken-4"><i class="material-icons left">delete</i>Hapus</a>
                            </td>
                        </tr>
                    `;
                });
                dataSiswaElement.innerHTML = dummy;
            });
    };

    tampilDetailSiswa = (id) => {
        console.log("detail siswa");
    };

    editDataSiswa = (id) => {
        console.log("edit berhasil");
    };

    hapusDataSiswa = (id) => {
        console.log("data berhasil dihapus");
    };
}

export default Siswa;
