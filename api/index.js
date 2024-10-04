const fastify = require("fastify")();
const cors = require("@fastify/cors");

// Habilita CORS para todas as origens
fastify.register(cors, {
	origin: true, // Permite todas as origens
	methods: ["GET"], // Define os métodos permitidos (GET neste caso)
});

// Exemplo de dados de tênis Air Jordan
const tenisAirJordan = [
	{
		id: 1,
		nome: "Air Jordan 1 Mid Dutch Green",
		preco: 150,
		categoria: "Basketball",
		imagem: "https://imgbox.com/eCxBaABi",
	},
	{
		id: 2,
		nome: "Air Jordan 1 Mid Chicago Black Toe",
		preco: 200,
		categoria: "Basketball",
		imagem: "https://imgbox.com/odbxvxyt",
	},
	{
		id: 3,
		nome: "Air Jordan 1 Mid Se Lightbulb",
		preco: 220,
		categoria: "Basketball",
		imagem: "https://imgbox.com/X9yP6kBe",
	},
	{
		id: 4,
		nome: "Air Jordan 1 Retro High Tie Dye",
		preco: 180,
		categoria: "Basketball",
		imagem: "https://imgbox.com/rTlTVW0q",
	},
	{
		id: 5,
		nome: "Air Jordan 1 Mid Hyper Royal Tumbled Leather",
		preco: 210,
		categoria: "Basketball",
		imagem: "https://imgbox.com/NI46K1WM",
	},
	{
		id: 6,
		nome: "Air Jordan 1 Retro High Tokyo Bio Hack",
		preco: 190,
		categoria: "Casual",
		imagem: "https://imgbox.com/sNW9WzDz",
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
