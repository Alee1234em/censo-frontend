const BASE_URL = "http://localhost:3000/api/censo";

export const getDepartamentos = async () => {
    const res = await fetch(BASE_URL);
    return res.json();
};

export const crearDepartamento = async (data) => {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    return res.json();
};

export const actualizarDepartamento = async (id, data) => {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    return res.json();
};

export const eliminarDepartamento = async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
    return res.json();
};
