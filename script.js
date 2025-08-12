document.addEventListener("DOMContentLoaded", () => {
    const cuotasSelect = document.querySelector("select[name='cuotas']");
    for (let i = 1; i <= 24; i++) {
      const opt = document.createElement("option");
      opt.value = i;
      opt.textContent = i;
      cuotasSelect.appendChild(opt);
    }
  
    const form = document.getElementById("userForm");
    const tableBody = document.getElementById("userTableBody");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const data = Object.fromEntries(new FormData(form).entries());
  
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${data.nombre}</td>
        <td>${data.cedula}</td>
        <td>$${parseFloat(data.valor).toLocaleString()}</td>
        <td>$${parseFloat(data.interes).toLocaleString()}</td>
        <td>${data.direccion}</td>
        <td>${data.barrio}</td>
        <td>${data.celular}</td>
        <td>${data.cuotas}</td>
      `;
      tableBody.appendChild(row);
  
      form.reset();
    });
  });
  