function tampilkanData() {
  // Mengambil nilai dari input form
  const name = document.getElementById("name").value;
  const age = Number(document.getElementById("age").value);
  const isStudent = document.getElementById("isStudent").value === "true"; 
  const hobbies = document.getElementById("hobbies").value.split(","); 
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value; 

  // Membuat objek untuk menyimpan kota dan negara
  const address = { city: city, country: country };

  // Menampilkan setiap tipe data di konsol
  console.log("String:", name);
  console.log("Number:", age);
  console.log("Boolean:", isStudent);
  console.log("Array:", hobbies);
  console.log("Object:", address);

  // Menampilkan data di halaman
  const hasilDiv = document.getElementById("hasil");
  hasilDiv.innerHTML = `
    <p><strong>Nama:</strong> ${name}</p>
    <p><strong>Umur:</strong> ${age}</p>
    <p><strong>Pelajar:</strong> ${isStudent}</p>
    <p><strong>Hobi:</strong> ${hobbies.join(", ")}</p>
    <p><strong>Alamat:</strong> Kota - ${address.city}, Negara - ${address.country}</p>
  `;
}
