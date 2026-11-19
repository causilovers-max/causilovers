import { defineConfig } from 'astro/config';

// Dirección automática para GitHub Pages.
// En GitHub Actions, GITHUB_REPOSITORY vale "usuario/repositorio".
const repoCompleto = process.env.GITHUB_REPOSITORY;
let site;
let base;

if (repoCompleto) {
  const [usuario, repo] = repoCompleto.split('/');
  site = `https://${usuario.toLowerCase()}.github.io`;
  const esSitioDeUsuario = repo.toLowerCase() === `${usuario.toLowerCase()}.github.io`;
  base = esSitioDeUsuario ? '/' : `/${repo}`;
}

export default defineConfig({ site, base });
