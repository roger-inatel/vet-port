# Portfólio — Dra. Rayssa (React + Vite)

Este repositório contém uma Single Page Application (SPA) desenvolvida com React e empacotada com Vite. A aplicação é uma landing page profissional destinada a uma médica veterinária que oferece atendimento domiciliar. O foco é um site estático, responsivo e otimizado para performance, com seções para serviços, sobre e contato.

## Visão técnica (resumo)
- Arquitetura: SPA (apenas uma entrada HTML). A navegação entre seções é feita no cliente via âncoras e componentes React. Não há roteamento multi-página configurado neste estágio.
- Bundler: Vite — HMR em desenvolvimento e build otimizada em produção (assets com hashing).
- Stack: React 19.x, Vite 7.x, plugin oficial `@vitejs/plugin-react`.

## Organização do repositório (relevante)
- `src/`
	- `assets/` — imagens e ícones processáveis pelo bundler
		- `images/` — fotos, ilustrações (usar WebP quando possível)
		- `icons/` — SVGs de ícones (podem ser importados como URLs ou transformados em componentes via plugin)
	- `components/` — componentes React reutilizáveis (ex.: `Header/`, `Sections/`)
	- `styles/` — estilos globais e variáveis (`globals.css`, `variables.css`)
	- `App.jsx` — ponto de composição dos componentes
	- `main.jsx` — ponto de entrada (mount do React e imports globais de CSS)
- `index.html` — entry HTML (carrega fonts e monta `#root`)
- `public/` — assets estáticos copiados sem processamento (usar apenas quando path absoluto fixo for necessário)

## Funcionalidade esperada (produto final)
- Landing page responsiva com seções:
	- Serviços: cards para Consultas, Vacinação, Cirurgias, Emergências, Orientação Nutricional e Exames.
	- Sobre: biografia profissional (texto fornecido) e foto profissional.
	- Contato: formulário com validação (integração via serviço externo ou endpoint próprio).
- Performance: imagens otimizadas, lazy-loading e assets hashed no build.

## Como rodar localmente
1. Instale dependências:

```powershell
npm install
```

2. Rodar em modo desenvolvimento (HMR):

```powershell
npm run dev
```

3. Gerar build de produção:

```powershell
npm run build
```

4. Visualizar build localmente (preview):

```powershell
npm run preview
```

## Boas práticas e observações técnicas
- Assets em `src/assets` devem ser importados nos componentes para que o Vite faça hash e otimizações. Use `public/` somente para arquivos que precisam de um caminho absoluto fixo.
- SVGs: para usá-los como componentes React, recomendamos instalar `vite-plugin-svgr` e configurá-lo em `vite.config.js`.
- Otimização: converter imagens para WebP, gerar variantes responsivas e usar `srcset`. Plugins úteis: `vite-plugin-imagemin`, `vite-imagetools`.
- Se for publicar em um subdiretório (ex.: GitHub Pages), ajuste `base` em `vite.config.js` para o caminho correto.

## Deploy recomendado
- Plataformas fáceis: Vercel, Netlify ou GitHub Pages. Vercel/Netlify detectam automaticamente o `build` (comando `npm run build`) e servem o `dist/`.

## Próximos passos 
1. Substituir imagens placeholder por fotos reais em `src/assets/images/`.
2. Adicionar `vite-plugin-svgr` se desejar SVGs como componentes.
3. Implementar integração do formulário de contato (Formspree, Netlify Forms ou endpoint próprio).
4. Rodar Lighthouse e otimizar conforme resultados (imagens, fonts, critical CSS).

## Contato / Nota
Esse projeto é uma landing page SPA para a Dra. Rayssa — médica veterinária que atende a domicílio. 