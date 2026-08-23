# Kit Completo de Alfabetização - Landing Page

Landing page responsiva e otimizada de alta conversão para o **Kit Completo de Alfabetização**, desenvolvida com **React**, **TypeScript**, **Tailwind CSS** e empacotada com **Vite**.

Pronta para deploy automático na **Vercel** e versionamento no **GitHub**.

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- `npm` ou `bun`

### Instalação

1. Clone o repositório ou baixe os arquivos:
```bash
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
cd SEU_REPOSITORIO
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
Acesse no navegador: `http://localhost:3000` (ou a porta indicada no terminal).

---

## 📦 Como Gerar o Build de Produção

```bash
npm run build
```
Os arquivos estáticos otimizados serão gerados na pasta `dist/`.

---

## 🐙 Como Subir para o GitHub

1. No diretório raiz do projeto:
```bash
git init
git add .
git commit -m "feat: landing page completa kit de alfabetizacao"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
git push -u origin main
```

---

## ⚡ Como Publicar na Vercel

1. Acesse [vercel.com](https://vercel.com) e conecte sua conta do GitHub.
2. Clique em **Add New... > Project**.
3. Selecione o repositório do projeto.
4. As configurações já estão predefinidas pelo arquivo `vercel.json`:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Clique em **Deploy**.
