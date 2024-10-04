// Importa o Fastify
const fastify = require("fastify")();

// Exemplo de dados de tênis Air Jordan
const tenisAirJordan = [
	{
		id: 1,
		nome: "Air Jordan 1 Retro High OG",
		preco: 150,
		categoria: "Casual",
		imagem: "https://example.com/air-jordan-1.jpg",
	},
	{
		id: 2,
		nome: "Air Jordan 4 Retro",
		preco: 200,
		categoria: "Basketball",
		imagem: "https://example.com/air-jordan-4.jpg",
	},
	{
		id: 3,
		nome: "Air Jordan 11 Retro",
		preco: 220,
		categoria: "Basketball",
		imagem: "https://example.com/air-jordan-11.jpg",
	},
	{
		id: 4,
		nome: "Air Jordan 3 Retro",
		preco: 180,
		categoria: "Casual",
		imagem: "https://example.com/air-jordan-3.jpg",
	},
	{
		id: 5,
		nome: "Air Jordan 6 Retro",
		preco: 210,
		categoria: "Basketball",
		imagem: "https://example.com/air-jordan-6.jpg",
	},
	{
		id: 6,
		nome: "Air Jordan 5 Retro",
		preco: 190,
		categoria: "Casual",
		imagem: "https://example.com/air-jordan-5.jpg",
	},
];

// Rota que retorna os tênis Air Jordan
fastify.get("/air-jordan", async (request, reply) => {
	return { tenis: tenisAirJordan };
});

// Exporta uma função que lida com as requisições
module.exports = (req, res) => {
	fastify.ready((err) => {
		if (err) throw err;
		fastify.server.emit("request", req, res);
	});
};
