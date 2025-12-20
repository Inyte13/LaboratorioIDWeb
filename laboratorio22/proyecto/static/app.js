async function cargarEquipos() {
  const res = await fetch("/equipos");
  const equipos = await res.json();
  const div = document.getElementById("equipos");
  div.innerHTML = "<h2>Lista de equipos</h2>" +
    equipos.map(e => `<p>${e.id} - ${e.nombre} (${e.ciudad}) | Ataque: ${e.nivelAtaque}, Defensa: ${e.nivelDefensa}</p>`).join("");
}

document.getElementById("form-equipo").addEventListener("submit", async (e) => {
  e.preventDefault();
  const nuevoEquipo = {
    nombre: document.getElementById("nombre").value,
    ciudad: document.getElementById("ciudad").value,
    nivelAtaque: parseInt(document.getElementById("nivelAtaque").value),
    nivelDefensa: parseInt(document.getElementById("nivelDefensa").value)
  };

  const res = await fetch("/equipos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(nuevoEquipo)
  });

  if (res.ok) {
    alert("Equipo registrado correctamente");
    cargarEquipos();
  } else {
    alert("Error al registrar equipo");
  }
});

cargarEquipos();
