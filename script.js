/* ===================================================
   LÓGICA DE TRAZABILIDAD Y MÉTRICAS - CANDELA PERÚ
   =================================================== */

const productsDatabase = [
    {
        id: "PROD-CAF-01",
        name: "Café Orgánico Gourmet Chanchamayo",
        batch: "LOTE-CF-2026-09",
        productImg: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80",
        
        originText: "Finca Villa Rica y Chanchamayo, Provincia de Chanchamayo, Región Junín (Selva Central del Perú). Cultivado a 1,600 msnm bajo sombra boscosa.",
        originImg: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80",
        
        materialText: "Granos selectos 100% Arábica de variedad Caturra y Typica. Cosechados a mano únicamente en madurez óptima durante la campaña mayo-agosto.",
        materialImg: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80",
        
        processText: "1. Despulpado ecológico con reciclaje de agua. 2. Fermentación natural en tanques por 18 horas. 3. Secado al sol en toldos parabólicos. 4. Tostado medio controlado y empaquetado con válvula desgasificadora.",
        processImg: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&w=400&q=80",
        
        supplierText: "Cooperativa Agraria Cafetalera de Chanchamayo (Asociación de 65 familias caficultoras). Alianza comercial bajo precios mínimos garantizados de Comercio Justo.",
        supplierImg: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=400&q=80",
        
        certs: ["Fair Trade Certified", "Orgánico USDA", "EU Organic", "Sello Biocomercio Perú"],
        certImg: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        
        views: 1420,
        purchases: 310,
        qrUrl: "https://candelaorganic.com/trazabilidad/PROD-CAF-01"
    },
    {
        id: "PROD-CHO-02",
        name: "Chocolate Orgánico 70% Cacao Nativo",
        batch: "LOTE-CH-2026-11",
        productImg: "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=600&q=80",
        
        originText: "Cuenca del Río Huallaga, Distrito de Tingo María, Región Huánuco. Sistema agroforestal diversificado con especies nativas amazónicas.",
        originImg: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80",
        
        materialText: "Granos de Cacao Nativo Criollo de fina aroma y azúcar de caña orgánica evaporada (panela). Sin lecitina de soya ni grasas añadida.",
        materialImg: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=400&q=80",
        
        processText: "1. Fermentación en cajones de madera de tornillo por 6 días. 2. Secado solar. 3. Tostado suave a baja temperatura. 4. Conchado lento por 48 horas para resaltar perfil organoléptico.",
        processImg: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=400&q=80",
        
        supplierText: "Asociación de Cacaoteros Sostenibles del Huallaga (48 productores recolectores). Convenio directo de trazabilidad e incentivo por preservación de variedades nativas.",
        supplierImg: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=400&q=80",
        
        certs: ["Orgánico USDA", "EU Organic", "SPP Comercio Justo", "Sello Biocomercio Perú"],
        certImg: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        
        views: 1890,
        purchases: 425,
        qrUrl: "https://candelaorganic.com/trazabilidad/PROD-CHO-02"
    },
    {
        id: "PROD-CAS-03",
        name: "Castaña Amazónica Silvestre Pelada",
        batch: "LOTE-CT-2026-15",
        productImg: "https://images.unsplash.com/photo-1543208541-005c31278153?auto=format&fit=crop&w=600&q=80",
        
        originText: "Concesiones castañeras en la Reserva Nacional Tambopata y cuenca del Río Madre de Dios, Puerto Maldonado, Región Madre de Dios.",
        originImg: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80",
        
        materialText: "Nueces silvestres de Bertholletia excelsa recolectadas de árboles ancestrales no cultivados de más de 300 años de edad.",
        materialImg: "https://images.unsplash.com/photo-1543208541-005c31278153?auto=format&fit=crop&w=400&q=80",
        
        processText: "1. Recolección forestal sostenible. 2. Quiebre manual y pelado térmico. 3. Deshidratado a 4.5% de humedad. 4. Selección por calibrado y envasado al vacío.",
        processImg: "https://images.unsplash.com/photo-1509358271058-acd05cc93898?auto=format&fit=crop&w=400&q=80",
        
        supplierText: "Asociación de Castañeros de Madre de Dios (108 familias recolectoras en convenio de manejo forestal sostenible con OSINFOR y Candela Perú).",
        supplierImg: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=400&q=80",
        
        certs: ["OSINFOR Legalidad Garantizada", "Fair Trade Certified", "Orgánico EU", "Sello Biocomercio Perú"],
        certImg: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        
        views: 2150,
        purchases: 512,
        qrUrl: "https://candelaorganic.com/trazabilidad/PROD-CAS-03"
    },
    {
        id: "PROD-SAC-04",
        name: "Aceite Orgánico de Sacha Inchi Extra Virgen",
        batch: "LOTE-SI-2026-08",
        productImg: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80",
        
        originText: "Provincia de Lamas y Valles del Bajo Huallaga, Región San Martín (Bosque Alto Amazónico).",
        originImg: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80",
        
        materialText: "Semillas seleccionadas de Plukenetia volubilis de cultivos agroforestales que reemplazaron cultivos de hoja de coca.",
        materialImg: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=400&q=80",
        
        processText: "1. Prensado mecánico en frío a menos de 45°C sin solventes. 2. Decantación natural por gravedad. 3. Microfiltrado de precisión y envasado en vidrio oscuro protector.",
        processImg: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=400&q=80",
        
        supplierText: "Comité de Pequeños Agricultores Sostenibles de San Martín (42 familias aliadas bajo principios de biocomercio).",
        supplierImg: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=400&q=80",
        
        certs: ["Fair Trade Certified", "Orgánico USDA", "EU Organic", "Non-GMO Verified"],
        certImg: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        
        views: 1100,
        purchases: 230,
        qrUrl: "https://candelaorganic.com/trazabilidad/PROD-SAC-04"
    }
];

let isAdminLoggedIn = false;
let viewsChartInstance = null;
let shareChartInstance = null;
let qrCodeGenerator = null;

document.addEventListener("DOMContentLoaded", () => {
    populateProductSelect();
    loadProductDetails();
});

function populateProductSelect() {
    const select = document.getElementById("productSelect");
    select.innerHTML = "";
    
    productsDatabase.forEach((p, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.textContent = `${p.name} (${p.batch})`;
        select.appendChild(option);
    });
}

function loadProductDetails() {
    const select = document.getElementById("productSelect");
    const p = productsDatabase[select.value];

    p.views++;

    document.getElementById("pName").textContent = p.name;
    document.getElementById("pBatch").textContent = p.batch;
    
    document.getElementById("pImg").src = p.productImg;
    document.getElementById("pOriginText").textContent = p.originText;
    document.getElementById("pOriginImg").src = p.originImg;

    document.getElementById("pMaterialText").textContent = p.materialText;
    document.getElementById("pMaterialImg").src = p.materialImg;

    document.getElementById("pProcessText").textContent = p.processText;
    document.getElementById("pProcessImg").src = p.processImg;

    document.getElementById("pSupplierText").textContent = p.supplierText;
    document.getElementById("pSupplierImg").src = p.supplierImg;

    const certTagsContainer = document.getElementById("pCertTags");
    certTagsContainer.innerHTML = "";
    p.certs.forEach(cert => {
        const tag = document.createElement("span");
        tag.className = "cert-pill";
        tag.textContent = cert;
        certTagsContainer.appendChild(tag);
    });
    document.getElementById("pCertImg").src = p.certImg;

    const qrContainer = document.getElementById("qrcode");
    qrContainer.innerHTML = "";
    qrCodeGenerator = new QRCode(qrContainer, {
        text: p.qrUrl,
        width: 120,
        height: 120,
        colorDark: "#2C1A1D",
        colorLight: "#FFFFFF",
        correctLevel: QRCode.CorrectLevel.H
    });

    if (isAdminLoggedIn) {
        updateAdminDashboard();
    }
}

function switchView(viewName) {
    if (viewName === 'admin' && !isAdminLoggedIn) {
        toggleAdminModal();
        return;
    }

    document.getElementById("publicView").classList.remove("active");
    document.getElementById("adminView").classList.remove("active");
    document.getElementById("tabPublic").classList.remove("active");
    document.getElementById("tabAdmin").classList.remove("active");

    if (viewName === 'public') {
        document.getElementById("publicView").classList.add("active");
        document.getElementById("tabPublic").classList.add("active");
    } else if (viewName === 'admin') {
        document.getElementById("adminView").classList.add("active");
        document.getElementById("tabAdmin").classList.add("active");
        updateAdminDashboard();
    }
}

function toggleAdminModal() {
    if (isAdminLoggedIn) {
        switchView('admin');
        return;
    }
    document.getElementById("loginModal").style.display = "flex";
    document.getElementById("adminPassword").value = "";
    document.getElementById("loginError").textContent = "";
}

function closeAdminModal() {
    document.getElementById("loginModal").style.display = "none";
}

function checkAdminPassword() {
    const pass = document.getElementById("adminPassword").value;
    if (pass === "admin2026") {
        isAdminLoggedIn = true;
        closeAdminModal();
        document.getElementById("btnAdminAccess").textContent = "Modo Admin (Activo)";
        switchView('admin');
    } else {
        document.getElementById("loginError").textContent = "Clave incorrecta. Intente con: admin2026";
    }
}

function updateAdminDashboard() {
    let totalViews = 0;
    let totalPurchases = 0;
    let topProduct = productsDatabase[0];

    const tableBody = document.getElementById("adminTableBody");
    tableBody.innerHTML = "";

    productsDatabase.forEach(p => {
        totalViews += p.views;
        totalPurchases += p.purchases;

        if (p.views > topProduct.views) {
            topProduct = p;
        }

        const convRate = ((p.purchases / p.views) * 100).toFixed(1);

        const row = document.createElement("tr");
        row.innerHTML = `
            <td><strong>${p.batch}</strong></td>
            <td>${p.name}</td>
            <td>${p.originText.split(',')[0]}</td>
            <td>${p.views.toLocaleString()}</td>
            <td>${p.purchases.toLocaleString()}</td>
            <td><strong>${convRate}%</strong></td>
            <td><span class="status-badge">VERIFICADO</span></td>
        `;
        tableBody.appendChild(row);
    });

    document.getElementById("kpiTotalViews").textContent = totalViews.toLocaleString();
    document.getElementById("kpiTotalPurchases").textContent = totalPurchases.toLocaleString();
    document.getElementById("kpiTopProduct").textContent = topProduct.name;
    
    const avgConvRate = totalViews > 0 ? ((totalPurchases / totalViews) * 100).toFixed(1) : 0;
    document.getElementById("kpiConversionRate").textContent = `${avgConvRate}%`;

    renderAdminCharts();
}

function renderAdminCharts() {
    const labels = productsDatabase.map(p => p.name.split(' ')[0] + ' ' + p.name.split(' ')[1]);
    const viewsData = productsDatabase.map(p => p.views);
    const purchasesData = productsDatabase.map(p => p.purchases);

    if (viewsChartInstance) viewsChartInstance.destroy();
    if (shareChartInstance) shareChartInstance.destroy();

    const ctx1 = document.getElementById("viewsPurchaseChart").getContext("2d");
    viewsChartInstance = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Consultas Trazabilidad QR',
                    data: viewsData,
                    backgroundColor: '#F4A221',
                    borderRadius: 6
                },
                {
                    label: 'Compras Realizadas',
                    data: purchasesData,
                    backgroundColor: '#1E3E20',
                    borderRadius: 6
                }
            ]
        },
        options: {
            responsive: true,
            plugins: { legend: { position: 'top' } }
        }
    });

    const ctx2 = document.getElementById("productShareChart").getContext("2d");
    shareChartInstance = new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: viewsData,
                backgroundColor: ['#2C1A1D', '#1E3E20', '#F4A221', '#43703B']
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { position: 'bottom' } }
        }
    });
}

/* Chatbot con Personaje Elvispera */
function toggleChatbot() {
    const windowEl = document.getElementById("chatbotWindow");
    windowEl.style.display = windowEl.style.display === "flex" ? "none" : "flex";
}

function askElvispera(opt) {
    const body = document.getElementById("chatBody");

    let questionText = "";
    let answerText = "";

    if (opt === 1) {
        questionText = "¿Qué información me da el QR?";
        answerText = "Al escanear el QR accedes al historial transparente del lote: origen en Perú, familias recolectoras, procesos sostenibles y certificaciones de calidad.";
    } else if (opt === 2) {
        questionText = "¿De dónde provienen los insumos?";
        answerText = "Nuestros productos provienen de la biodiversidad peruana: Chanchamayo (Café), Huánuco (Chocolate), Madre de Dios (Castaña) y San Martín (Sacha Inchi).";
    } else if (opt === 3) {
        questionText = "¿Cómo ingresar como Administrador?";
        answerText = "Presiona el botón 'Modo Administrador' arriba e ingresa la clave asignada para este proyecto: admin2026.";
    }

    // Mensaje Usuario
    const userDiv = document.createElement("div");
    userDiv.className = "msg-bubble user";
    userDiv.textContent = questionText;
    body.appendChild(userDiv);

    // Respuesta Bot con delay suave
    setTimeout(() => {
        const botDiv = document.createElement("div");
        botDiv.className = "msg-bubble bot";
        botDiv.textContent = answerText;
        body.appendChild(botDiv);
        body.scrollTop = body.scrollHeight;
    }, 350);

    body.scrollTop = body.scrollHeight;
}