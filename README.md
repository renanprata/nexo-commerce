# Nexo Commerce

Projeto de portfólio de Renan Pratavieira Santos. Empresa fictícia, produtos ilustrativos e pedidos sem cobrança ou entrega real.

## Fluxo para apresentação
1. Explore produtos, busca, filtros, ordenação e detalhes.
2. Entre com ChatGPT e salve um perfil com dados fictícios.
3. Favorite produtos, adicione ao carrinho e aplique NEXO10.
4. Escolha retirada/entrega e um método de pagamento demonstrativo; confirme o pedido.
5. Na conta administrativa autorizada, abra Gestão e clique em Carregar exemplos.
6. Filtre indicadores, exporte CSV, altere o status de pedidos e edite produtos.

## Implementação
Vinext/React, componentes Shadcn, Cloudflare Worker e D1. Tabelas: profiles, carts, favorites, orders, order_items e product_overrides. Dados pessoais por usuário e administração autorizada no servidor pela conta proprietária. O site começa privado.

As imagens foram geradas por IA para o catálogo fictício. Valores monetários são inteiros em centavos. O servidor recalcula o pedido e usa uma chave de idempotência para evitar duplicação ao repetir a mesma solicitação. O estoque é demonstrativo e não é reservado nem reduzido por pedido. A ação Carregar exemplos cria até 18 pedidos fictícios, uma vez por conta administrativa, e pode ser repetida sem duplicá-los.

O painel usa até 200 pedidos carregados, sem paginação nesta primeira versão. Receita demonstrativa soma totais de pedidos não cancelados, incluindo frete e descontos; não é receita contábil realizada. A aba Clientes agrupa por nome fictício, não substitui um cadastro mestre. Esta versão não está conectada ao laboratório PostgreSQL do portfólio.

## Verificação
- `node node_modules/typescript/bin/tsc --noEmit`
- `node tests/shop.mjs`
- `npm run build`

Os testes usam SQLite em memória e mocks para D1/identidade. Verificam totais, cupom, isolamento de clientes, autorização administrativa, origem de requisição, idempotência, exemplos e edição. Não substituem validação ponta a ponta do ambiente publicado.

WebMCP: ferramenta de busca com atualização da interface e validação de entrada. Registro condicionado ao suporte do navegador; validação em navegador compatível não esteve disponível neste ambiente.

## Desenvolvimento
Use o gerenciador e lockfile existentes. `pnpm install` e `pnpm dev` em um ambiente local configurado. Configuração de hospedagem em `.openai/hosting.json`; nunca inclua tokens em Git. Projeto desenvolvido com assistência de IA, para evolução e prática do autor.
