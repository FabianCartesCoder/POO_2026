document.addEventListener('DOMContentLoaded', () => {
    const emails = [
        { id: 1, sender: "DANY HERNANDEZ GONZ.", subject: "Nueva tarea: \"4.- Funciones en JS\"", snippet: "Ajustes de notificaciones POO (2026)...", time: "17 mar", unread: true },
        { id: 2, sender: "DANY HERNANDEZ GONZ.", subject: "Nueva tarea: \"3.- SQL creación de BD\"", snippet: "Ajustes de notificaciones Adm. de BD...", time: "17 mar", unread: true },
        { id: 3, sender: "ARAEL ESTEBAN ANABA.", subject: "(sin asunto)", snippet: "Contenido del correo - Ajustes de notificaciones...", time: "12 mar", unread: false },
    ];

    const container = document.getElementById('email-container');
    const searchInput = document.getElementById('search-input');
    const profileTrigger = document.getElementById('user-profile-trigger');
    const profileMenu = document.getElementById('profile-menu');

    // --- RENDERIZADO DE CORREOS ---
    function render(data = emails) {
        container.innerHTML = data.map(m => `
                    <div class="email-item ${m.unread ? 'unread' : ''}" data-id="${m.id}">
                        <div class="col-check">
                            <span class="material-icons-outlined icon check-btn">check_box_outline_blank</span>
                            <span class="material-icons-outlined icon star-btn">star_border</span>
                        </div>
                        <div class="col-sender">${m.sender}</div>
                        <div class="col-content"><b>${m.subject}</b> - ${m.snippet}</div>
                        <div class="col-time">${m.time}</div>
                    </div>
                `).join('');
        initRowEvents();
    }

    function initRowEvents() {
        document.querySelectorAll('.email-item').forEach(row => {
            // Checkbox
            row.querySelector('.check-btn').onclick = (e) => {
                e.stopPropagation();
                const isChecked = e.target.innerText === 'check_box';
                e.target.innerText = isChecked ? 'check_box_outline_blank' : 'check_box';
                e.target.style.color = isChecked ? '#5f6368' : '#0b57d0';
                row.classList.toggle('selected');
            };
            // Estrella
            row.querySelector('.star-btn').onclick = (e) => {
                e.stopPropagation();
                e.target.classList.toggle('star-active');
                e.target.innerText = e.target.classList.contains('star-active') ? 'star' : 'star_border';
            };
            // Marcar como leído
            row.onclick = () => row.classList.remove('unread');
        });
    }

    // --- BUSCADOR ---
    searchInput.oninput = (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = emails.filter(m =>
            m.sender.toLowerCase().includes(term) || m.subject.toLowerCase().includes(term)
        );
        render(filtered);
    };

    // --- MENÚ PERFIL ---
    profileTrigger.onclick = (e) => {
        e.stopPropagation();
        profileMenu.style.display = (profileMenu.style.display === 'block') ? 'none' : 'block';
    };

    // --- CATEGORÍAS (Sidebar) ---
    document.getElementById('toggle-categories').onclick = (e) => {
        e.preventDefault();
        const list = document.getElementById('categories-list');
        const arrow = document.getElementById('cat-arrow');
        list.classList.toggle('d-none');
        arrow.innerText = list.classList.contains('d-none') ? 'expand_more' : 'expand_less';
    };

    // --- OTROS EVENTOS ---
    document.getElementById('menu-btn').onclick = () => document.getElementById('main-sidebar').classList.toggle('collapsed');
    document.getElementById('open-compose').onclick = () => document.getElementById('compose-window').style.display = 'block';
    document.getElementById('close-compose').onclick = () => document.getElementById('compose-window').style.display = 'none';

    // Cerrar menú perfil al hacer clic fuera
    window.onclick = () => profileMenu.style.display = 'none';
    profileMenu.onclick = (e) => e.stopPropagation();

    render();
});