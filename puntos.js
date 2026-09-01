document.addEventListener('DOMContentLoaded', () => {
            const puebloSelect = document.getElementById('filtro-pueblo');
            const categoriaSelect = document.getElementById('filtro-categoria');
            const ordenarSelect = document.getElementById('ordenar-por');
            const chipsContainer = document.getElementById('filtros-activos');
            const listaPuntos = document.getElementById('lista-puntos');

            // Datos de ejemplo (reemplaza con tu JSON o DB)
            const puntos = [
                // { nombre: "", pueblo: "", categoria: "", desc: "", tel: "", url: ""},
                { nombre: "Parador Don Luna", pueblo: "Las Peñas", categoria: "Gastronomia", desc: "kiosco, comida al peso, regionales. Horario: Lunes a Domingo de 08:00 hs a 02:00 hs.", tel: "Tel: 3804784544", url: "https://maps.app.goo.gl/X79SgCKQkNV972tPA"},
                { nombre: "Empanadas Huayramuyu", pueblo: "Pinchas", categoria: "Gastronomia", desc: "Horario de atención: miércoles a domingo  de 09:00 – 16:00 hs.", tel: "Tel: 3804933679", url: "https://maps.app.goo.gl/YgAnWziY8fnwpRZr8" },
                { nombre: "Hecho con Amor", pueblo: "Chuquis", categoria: "Gastronomia", desc: "Empanadas y Pan Casero.", tel: "Tel: 3804955751", url: "https://maps.app.goo.gl/jU5SkKGRWJQEfmmE7"},
                { nombre: "Consenza Pizzería", pueblo: "Chuquis", categoria: "Gastronomia", desc: "Horarios de Atención: miércoles a domingo de 20:30 – 02:00.", tel: "Tel: 3804380792 – 3804566390", url: "https://maps.app.goo.gl/CCYBCEKaphocmc5X6"},
                { nombre: "Resto Bar 20/18", pueblo: "Chuquis", categoria: "Gastronomia", desc: "Horarios de atención: Viernes a domingos de 21:00hs - 02:00 hs.", tel: "Tel: 3804365275"},
                //{ nombre: "Lo de Silvia Bar", pueblo: "Chuquis", categoria: "Gastronomia", desc: "Comida, helados, bebidas y productos regionales – Horarios de Atención: Lunes a domingo de 10:00 – 00:00.", tel: "Tel: 3804783411 – 3804101165"},
                { nombre: "La Ruina - Entre amigos - Resto bar", pueblo: "Aminga", categoria: "Gastronomia", desc: "Horarios de atención: Lunes a Domingos  de 08:00 hs - 14:00hs  y de 19:00 hs - 01:00 hs", tel: "Tel: 3804325079", url: "https://maps.app.goo.gl/h5Ja7Ab16cukist98"},
                //{ nombre: "Sandwiches C&L", pueblo: "Aminga", categoria: "Gastronomia", desc: "Horarios de atención: Viernes a Domingos de 20:00 - 02:00 hs.", tel: "Tel: 3804887700"},
                //{ nombre: "Rotiseria Azul", pueblo: "Aminga", categoria: "Gastronomia", desc: "Horarios de atención: 21:00 - 02:00 hs.", tel: "Tel: 3804544156"},
                { nombre: "Restaurante Hosteria A.C.A", pueblo: "Anillaco", categoria: "Gastronomia", desc: "Horarios: 12:30 - 15:00 hs y de 21:00 - 22:30 hs. Correo: hosteriaanillaco@aca.org.ar", tel: "Tel: 3827494064", url: "https://maps.app.goo.gl/ZgoStxcFm1tJcMtV7"},
                //{ nombre: "El Velazco", pueblo: "Anillaco", categoria: "Gastronomia", desc: "Parrilla, Bar y Cafe – Horarios Lunes a Domingos 10:00 - 15:00 hs y de 17:00 - 01:00 hs.", tel: "Tel: 3804340805"},
                { nombre: "Casa de Paz", pueblo: "Santa Vera Cruz", categoria: "Hospedaje", desc: "Capacidad para 6 personas. (Internet, TV, cochera, asador, mirador)", tel: "Tel: 3827459560", url: "https://maps.app.goo.gl/DKJoT1j2LvhmaUwC9"},
                { nombre: "Casa Balunek", pueblo: "Santa Vera Cruz", categoria: "Hospedaje", desc: "Capacidad para 6 personas.", tel: "Tel: 3827451073", url: "https://maps.app.goo.gl/wPWaMYx6HF8VtfB28"},
                { nombre: "Finca Los Almendros", pueblo: "San Pedro", categoria: "Hospedaje", desc: "Ambiente familiar con capacidad para 18 plazas, comedor y dormitorios climatizados con hogar a leña. Abierto todo el año.", tel: "Tel: 3804681750", url: "https://maps.app.goo.gl/Tavt85wVzc2xFqwAA"},
                { nombre: "Casa de Alquiler por dia (2)", pueblo: "San Pedro", categoria: "Hospedaje", desc: "con capacidad para 4 personas cada una. Ambientes climatizados, asador, TV e internet.", tel: "Tel: 3827654174", url: "https://maps.app.goo.gl/ULuWWpGyKGZN6Z9s5"},
                { nombre: "Hostería Anjullón", pueblo: "Anjullon", categoria: "Hospedaje", desc: "Capacidad de plazas 3 (cuádruple, triple) capacidad total de personas 10. (internet, ambiente climatizado)", tel: "Tel: 3804208862", url: "https://maps.app.goo.gl/B8Wvp1s5Hrdz63CS8"},
                { nombre: "Casa", pueblo: "Anjullon", categoria: "Hospedaje", desc: "Capacidad total 8 personas. (3 habitaciones, internet, garaje, servicio de TV)", tel: "Tel: 3804208862", url: "https://maps.app.goo.gl/Y7k2n6FquqnMyiJc8"},
                { nombre: `Hospedaje "Dina"`, pueblo: "Los Molinos", categoria: "Hospedaje", desc: "Capacidad de cabañas: total 9 plazas - capacidad de dormitorios: 7 plazas. (garaje, servicio de TV, ambiente climatizado, servicios varios)", tel: "Tel: 3804259988", url: "https://maps.app.goo.gl/yraoSEf3Ufhfz1vCA"},
                { nombre: `Cabañas "La Alegria"`, pueblo: "Los Molinos", categoria: "Hospedaje", desc: "2 cabañas para 2 personas. (Ambiente Climatizado)", tel: "Tel: 3804594588 - 3804219754", url: "https://maps.app.goo.gl/V6pDwy5at3arb1PG9"},
                { nombre: "Hostería Automóvil Club Argentino A.C.A", pueblo: "Anillaco", categoria: "Hospedaje", desc: "Capacidad de plazas dobles, triple - capacidad total de personas 65. (internet, ambiente climatizado) - Correo: hosteriaanillaco@aca.org.ar", tel: "Tel: 3827494064 - 3874158689 (Enzo Nardini - Privado)", url: "https://maps.app.goo.gl/V6qbMFvRAEJainJ78"},
                { nombre: `Cabañas "EL CAUDILLO"`, pueblo: "Anillaco", categoria: "Hospedaje", desc: "Capacidad total 4 personas.(Pileta incluida - desayuno seco)", tel: "Tel: 3804555601", url: "https://maps.app.goo.gl/jrRxcyrY8i4Ds4kB7"},
                { nombre: `Cabañas "EL REFUGIO"`, pueblo: "Anillaco", categoria: "Hospedaje", desc: "Casa para 8 personas. (desayuno, pileta) - Cabañas capacidad: 5 personas. (desayuno, pileta)", tel: "Tel: 3827654658", url: "https://maps.app.goo.gl/i33DLiZYPSEyXyWG6"},
                { nombre: "Los abuelos, Casa hospedaje", pueblo: "Anillaco", categoria: "Hospedaje", desc: " Capacidad: 6 personas. (Internet, tv, cochera) - Instagram: @losabuelos.anillaco", tel: "Tel: 3804686912", url: "https://maps.app.goo.gl/MZixBcs2DSkGxuHV7"},
                { nombre: "Cabañas Cordón del Velazco", pueblo: "Anillaco", categoria: "Hospedaje", desc: "Capacidad para 8 personas. (internet, TV, asador, cochera, aire acondicionado) - Correo: Viviana_8845@yahoo.com.ar", tel: "Tel: 3804246541", url: "https://maps.app.goo.gl/L7h8WbrSNAPBz9bNA"},
                { nombre: `Cabañas "La Celestita"`, pueblo: "Anillaco", categoria: "Hospedaje", desc: "Capacidad para 3 personas (3 plazas) cocina-comedor, baño, 2 habitación. - Correo: josedanielherrera75@gmail.com", tel: "Tel: 3804406212", url: "https://maps.app.goo.gl/pj36nYYehJtcfKn76"},
                { nombre: "Aloja Hostal", pueblo: "Chuquis", categoria: "Hospedaje", desc: "Capacidad 20 Plazas. Horario: Lunes a Domingo 08:00 - 22:00 hs. ", tel: "Tel: 3804537812", url: "https://maps.app.goo.gl/oxZygGJD8LA6aRf86"},
                { nombre: "La Casona de Las Allende", pueblo: "Chuquis", categoria: "Hospedaje", desc: "Capacidad para 10 personas.", tel: "Tel: 3804776247", url: "https://maps.app.goo.gl/S2Yh6ZavoyShara19"},
                { nombre: "Cabañas Finca Huayco", pueblo: "Agua Blanca", categoria: "Hospedaje", desc: "Horario: Lunes a domingos de 09:00 a 20:00 hs.", tel: "Tel: 3804548401", url: "https://maps.app.goo.gl/bf3zgeQ8CiDNyGVo9"},
                { nombre: "Cabañas Lalina", pueblo: "Agua Blanca", categoria: "Hospedaje", desc: "El complejo de cabañas cuenta con 4 cabañas con capacidad total de 22 plazas - Servicios: Desayuno, Wifi, DIRECTV, aire acondicionado frío calor, ropa de blanco, asadores, cochera, espacios al aire libre. Horario: Lunes a Domingo", tel: "Tel: 3804380796", url: "https://maps.app.goo.gl/PnRsNFvSQPE76tUV6"},
                { nombre: "Sabores que Apasionan", pueblo: "Los Molinos", categoria: "Gastronomia", desc: "Horario: Sábados y domingos de 18:00 - 21:00 hs.", tel: "Tel: 3827402957", url: "https://maps.app.goo.gl/NiddkW7mpcWUBrPp8"},
                { nombre: "Viskito", pueblo: "Anjullon", categoria: "Gastronomia", desc: "Comidas para llevar. Horario: 21:00hs", tel: "", url: "https://maps.app.goo.gl/gqBF54dsGCSzYxiz5"},
                { nombre: `Bar y Kiosco "Ludmila"`, pueblo: "San Pedro", categoria: "Gastronomia", desc: "Horario corrido.", tel: "", url: "https://maps.app.goo.gl/yYk5CAAPKMK2gkNU6"},
                { nombre: `Kiosco "Punto Clave"`, pueblo: "Las Peñas", categoria: "Comercios", desc: "Pan casero, tortillas, cosas dulces, agua para mate, café. Horario: Lunes a Domingos de 09:00 a 00:00 hs.", tel: "", url: "https://maps.app.goo.gl/LpYbHLVav2ur9om89"},
                { nombre: `Kiosco "Tío Fuma"`, pueblo: "Pinchas", categoria: "Comercios", desc: "Horario: Lunes a Domingo de 08:00 a 00:00 hs.", tel: "Tel: 3804532639", url: "https://maps.app.goo.gl/Pq1hoHEdNSz8rL7U8"},
                { nombre: "Kiosco Benjamín", pueblo: "Chuquis", categoria: "Comercios", desc: "Horario: Lunes a Sábados de 09:00 - 13:00 y 18:00 - 22:00 hs; Domingo de 09:00 - 13:00 hs.", tel: "", url: "https://maps.app.goo.gl/NP2Q57zR1KjcsmXq5"},
                { nombre: "Kiosco UMA", pueblo: "Aminga", categoria: "Comercios", desc: "Horario: Lunes a domingo de 08:30 - 00:00 hs.", tel: "Tel: 3804630938", url: "https://maps.app.goo.gl/mNaG7656zcoq6v9t6"},
                //{ nombre: "La Belicha", pueblo: "Anillaco", categoria: "Comercios", desc: "Lunes a Jueves 09:00 - 13:30 hs y de 18:00 - 21:30 hs; Viernes y sábados de 09:00 - 13:00 hs.", tel: "3827451327", url: "https://maps.app.goo.gl/sNbXFjCgVwJMQY6v8"},
                { nombre: `Despensa "El Gordo"`, pueblo: "Los Molinos", categoria: "Comercios", desc: "Despensa, carnicería, verdulería. Horario: Lunes a Sábados de 10:00 - 13:30 hs y de 18:00 - 22:00 hs; Domingos de 10:00 - 14:00 hs.", tel: "", url: "https://maps.app.goo.gl/4VnS1RJeCb3Bh14v5"},
                { nombre: "Autoservicio Popo", pueblo: "Anjullon", categoria: "Comercios", desc: "Horario Comercial.", tel: "", url: "https://maps.app.goo.gl/bdSTnvwiCBersEXY9"},
                { nombre: "Bar y Kiosco Ludmila", pueblo: "San Pedro", categoria: "Comercios", desc: "Horario Corrido.", tel: "", url: "https://maps.app.goo.gl/7GmRiu1wZ6hZzaaMA"},
                { nombre: "Kiosco Gime", pueblo: "Santa Vera Cruz", categoria: "Comercios", desc: "Horario: Lunes a domingos 11:00 a 00:00 hs.", tel: "Tel: 3827402506", url: "https://maps.app.goo.gl/scEQqBB32wjsyDKV8"},
            ];

            let paginaActual = 1;
            const itemsPorPagina = 10;

            let filtros = { pueblo: '', categoria: '' };
            let orden = '';

            function renderizar() {
                let filtrados = puntos.filter(p => {
                    return (!filtros.pueblo || p.pueblo === filtros.pueblo) &&
                           (!filtros.categoria || p.categoria === filtros.categoria);
                });

                // Ordenar
                if (orden === 'nombre-asc') filtrados.sort((a,b) => a.nombre.localeCompare(b.nombre));
                if (orden === 'nombre-desc') filtrados.sort((a,b) => b.nombre.localeCompare(a.nombre));

                // PAGINACIÓN
                const totalPaginas = Math.ceil(filtrados.length / itemsPorPagina);

                if (paginaActual > totalPaginas) paginaActual = totalPaginas || 1;

                const inicio = (paginaActual - 1) * itemsPorPagina;
                const fin = inicio + itemsPorPagina;

                const pagina = filtrados.slice(inicio, fin);


                listaPuntos.innerHTML = pagina.map(p => `
                    <div class="card-info sin-img">
                        <div class="tag">${p.categoria}</div>
                        <h3>${p.nombre}</h3>

                        <p>${p.desc}</p>

                        ${
                            p.tel 
                            ? `<div class="telefono-box">
                                <i class="fa-solid fa-phone"></i> 
                                ${p.tel}
                            </div>`
                            : ""
                        }

                        <small>${p.pueblo}</small>

                        <a href="${p.url || '#'}" class="btn-ir">Ir ya</a>
                    </div>
                `).join('');


                renderizarChips();
                renderizarPaginacion(totalPaginas);
            }

            function renderizarChips() {
                chipsContainer.innerHTML = '';
                if (filtros.pueblo) {
                    const chip = crearChip('pueblo', puebloSelect.querySelector(`option[value="${filtros.pueblo}"]`).textContent);
                    chipsContainer.appendChild(chip);
                }
                if (filtros.categoria) {
                    const chip = crearChip('categoria', categoriaSelect.querySelector(`option[value="${filtros.categoria}"]`).textContent);
                    chipsContainer.appendChild(chip);
                }
            }

            function renderizarPaginacion(totalPaginas) {
    const pagContainer = document.querySelector(".paginacion");
    pagContainer.innerHTML = "";

    // Botón anterior
    const btnPrev = document.createElement("button");
    btnPrev.textContent = "Anterior";
    btnPrev.className = "btn-pagina";
    btnPrev.disabled = paginaActual === 1;
    btnPrev.onclick = () => { paginaActual--; renderizar(); };
    pagContainer.appendChild(btnPrev);

    // Números de página
    for (let i = 1; i <= totalPaginas; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;
        btn.className = "btn-pagina" + (i === paginaActual ? " active" : "");
        btn.onclick = () => { paginaActual = i; renderizar(); };
        pagContainer.appendChild(btn);
    }

    // Botón siguiente
    const btnNext = document.createElement("button");
    btnNext.textContent = "Siguiente";
    btnNext.className = "btn-pagina";
    btnNext.disabled = paginaActual === totalPaginas;
    btnNext.onclick = () => { paginaActual++; renderizar(); };
    pagContainer.appendChild(btnNext);
}


            function crearChip(tipo, texto) {
                const chip = document.createElement('div');
                chip.className = 'filtro-chip';
                chip.innerHTML = `
                    <span>${texto}</span>
                    <button type="button" data-tipo="${tipo}">
                        <span class="material-symbols-outlined">close</span>
                    </button>
                `;
                chip.querySelector('button').addEventListener('click', () => {
                    filtros[tipo] = '';
                    if (tipo === 'pueblo') puebloSelect.value = '';
                    if (tipo === 'categoria') categoriaSelect.value = '';
                    renderizar();
                });
                return chip;
            }

            puebloSelect.addEventListener('change', (e) => { filtros.pueblo = e.target.value; renderizar(); });
            categoriaSelect.addEventListener('change', (e) => { filtros.categoria = e.target.value; renderizar(); });
            ordenarSelect.addEventListener('change', (e) => { orden = e.target.value; renderizar(); });

            renderizar();
        });