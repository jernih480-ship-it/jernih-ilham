
const form = document.getElementById("formLogin");
const email = document.getElementById("email");
const password = document.getElementById("password");
const pesan = document.getElementById("pesan");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const emailValue = email.value.trim();
  const passwordValue = password.value;

  if (emailValue === "" || passwordValue.trim() === "") {
    tampilkanPesan("Email dan password wajib diisi.", false);
    return;
  }

  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!polaEmail.test(emailValue)) {
    tampilkanPesan("Format email tidak valid.", false);
    return;
  }

  if (passwordValue.length < 8) {
    tampilkanPesan(
      "Password harus memiliki minimal 8 karakter.", false
    );
    return;
  }

  tampilkanPesan(
    "Validasi berhasil! Formulir sudah memenuhi ketentuan.", true
  );
});

function tampilkanPesan(teks, berhasil) {
  pesan.textContent = teks;

  pesan.classList.remove(
    "d-none", "alert-success", "alert-danger"
  );

  pesan.classList.add(
    berhasil ? "alert-success" : "alert-danger"
  );
}


