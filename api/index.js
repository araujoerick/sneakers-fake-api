const fastify = require("fastify")();
const cors = require("@fastify/cors");
const rateLimit = require("@fastify/rate-limit");

fastify.register(cors, {
	origin: true, // Permite todas as origens
	methods: ["GET"],
});

fastify.register(rateLimit, {
	max: 5, // Número máximo de requisições permitidas
	timeWindow: "2 minute",
});

const tenisAirJordan = [
	{
		id: 1,
		nome: "Air Jordan 1 Mid Dutch Green",
		preco: "1.199.99",
		categoria: "Tênis Air Jordan",
		imagem: "https://images2.imgbox.com/9e/ae/eCxBaABi_o.png",
	},
	{
		id: 2,
		nome: "Air Jordan 1 Mid Chicago Black Toe",
		preco: "1.049,00",
		categoria: "Tênis Air Jordan",
		imagem: "https://images2.imgbox.com/03/c5/odbxvxyt_o.png",
	},
	{
		id: 3,
		nome: "Air Jordan 1 Mid Se Lightbulb",
		preco: "1.350,00",
		categoria: "Tênis Air Jordan",
		imagem: "https://images2.imgbox.com/3b/cf/X9yP6kBe_o.png",
	},
	{
		id: 4,
		nome: "Air Jordan 1 Retro High Tie Dye",
		preco: "1.585,00",
		categoria: "Tênis Air Jordan",
		imagem: "https://images2.imgbox.com/10/37/rTlTVW0q_o.png",
	},
	{
		id: 5,
		nome: "Air Jordan 1 Mid Hyper Royal Leather",
		preco: "949,99",
		categoria: "Tênis Air Jordan",
		imagem: "https://images2.imgbox.com/1f/0b/NI46K1WM_o.png",
	},
	{
		id: 6,
		nome: "Air Jordan 1 Retro High Tokyo Bio Hack",
		preco: "999,99",
		categoria: "Tênis Air Jordan",
		imagem: "https://images2.imgbox.com/ed/54/sNW9WzDz_o.png",
	},
];

fastify.get("/air-jordan", async (request, reply) => {
	return { tenis: tenisAirJordan };
});

module.exports = (req, res) => {
	fastify.ready((err) => {
		if (err) throw err;
		fastify.server.emit("request", req, res);
	});
};
