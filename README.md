  <h1>Fake API Air Jordan</h1>

  <p>Esta é uma <strong>API Fake de Tênis Air Jordan</strong> simples feita com Fastify Node JS e retorna dados como imagem, nome, categoria e preço de alguns modelos de tênis Air Jordan. 
    Projeto feito para prática de consumo de API com o segundo desafio da <a href="https://discord.gg/XPjUdArE">CodeLab</a>.</p>
  <p>É possível clonar este repósitorio e fazer deploy diretamente em seu Vercel graças ao arquivo vercel.json que permite que o Vercel entenda que você quer fazer deploy de uma API.
    Lembrando que o endpoint será a URL gerada pela Vercel + /air-jordan. Ex.: https://url-gerada.vercel.app/air-jordan .
   </p>

  <h2>Endpoint</h2>
  
  <h3><code>GET</code> <code>/air-jordan</code></h3>
  
  <p>Retorna uma lista de tênis Air Jordan com as seguintes informações:</p>
  <ul>
    <li><strong>id</strong>: Identificador único do tênis</li>
    <li><strong>nome</strong>: Nome do modelo Air Jordan</li>
    <li><strong>preco</strong>: Preço do modelo em dólares</li>
    <li><strong>categoria</strong>: Tipo de tênis</li>
    <li><strong>imagem</strong>: URL de uma imagem do tênis</li>
  </ul>

  <h3>Exemplo de Resposta</h3>
  <pre><code>{
  "tenis": [
    {
      "id": 1,
      "nome": "Air Jordan 1 Retro High OG",
      "preco": "1.050",
      "categoria": "Tênis Air Jordan",
      "imagem": "https://example.com/air-jordan-1.jpg"
    },
    {
      "id": 2,
      "nome": "Air Jordan 4 Retro",
      "preco": "1.100",
      "categoria": "Tênis Air Jordan",
      "imagem": "https://example.com/air-jordan-4.jpg"
    }
  ]
}
  </code></pre>

  <h2>Como Usar</h2>
  
  <p>Você pode consumir essa API facilmente em seus projetos front-end usando <strong>JavaScript</strong>, <strong>React</strong>, ou qualquer outra biblioteca/framework que suporte requisições HTTP.</p>

  <h3>Exemplo com JavaScript (Fetch API)</h3>
  <pre><code>fetch('https://sneakers-fake-api.vercel.app/air-jordan')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erro ao consumir a API:', error));
  </code></pre>
