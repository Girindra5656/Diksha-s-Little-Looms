# Diksha's Little Looms — Handloom Saree Store

A complete, production-ready e-commerce website built with **Next.js**. It has a
public storefront (home, collections, product pages, about, contact), customer
accounts, and an admin dashboard. Customers order over **WhatsApp or email**, and
**all orders are prepaid** — no online payment gateway to set up or maintain.

- **WhatsApp:** +91 70110 24750
- **Email:** diksha11081993@gmail.com
- **Categories:** Banarasi Silk · Modal Silk · Cotton · Office Wear · Traditional · Wedding · Giftings

---

## Table of contents
1. [What you need first](#1-what-you-need-first)
2. [Push this code to your GitHub](#2-push-this-code-to-your-github) ← start here
3. [Run the website on your computer](#3-run-the-website-on-your-computer)
4. [Turn on accounts & the admin login](#4-turn-on-accounts--the-admin-login)
5. [Make it yours (products, brand, photos)](#5-make-it-yours-products-brand-photos)
6. [Put it online for free (deploy)](#6-put-it-online-for-free-deploy)
7. [Admin login details](#7-admin-login-details)
8. [Troubleshooting](#8-troubleshooting)

---

## 1. What you need first

Install these two free tools on your computer (one-time):

- **Node.js (version 18 or newer)** → https://nodejs.org (download the "LTS" version)
- **Git** → https://git-scm.com/downloads

To check they're installed, open **Terminal** (Mac) or **Command Prompt / PowerShell**
(Windows) and run:

```bash
node --version
git --version
```

You should see version numbers. If you do, you're ready.

---

## 2. Push this code to your GitHub

**Good news:** this project is already connected to your repository
`https://github.com/Girindra5656/Diksha-s-Little-Looms`. You only need to log in
and push. From inside the project folder, run these commands one by one:

```bash
# 1) Save all files as the first commit
git add -A
git commit -m "Diksha's Little Looms - initial website"

# 2) Send it to GitHub (you'll be asked to log in the first time)
git push -u origin main
```

### Logging in when it asks
When you run `git push`, Git asks for your GitHub username and password.
GitHub no longer accepts your normal password here — you need a **Personal Access
Token** instead (it works like a one-time password):

1. Go to https://github.com/settings/tokens → **Generate new token (classic)**
2. Give it a name, tick the **`repo`** checkbox, and click **Generate token**
3. Copy the token
4. Back in the terminal: enter your **username** = `Girindra5656`, and paste the
   **token** as the password

That's it — refresh your GitHub page and all the files will be there.

> Tip: On Windows, GitHub Desktop (https://desktop.github.com) can do this with
> buttons instead of commands if you prefer. Open the folder as a repository and
> click **Push origin**.

### Later, when you change something
Every time you edit the site, save your changes to GitHub with:

```bash
git add -A
git commit -m "describe what you changed"
git push
```

---

## 3. Run the website on your computer

From inside the project folder:

```bash
# install the building blocks (one-time, needs internet)
npm install

# start the website
npm run dev
```

Now open **http://localhost:3000** in your browser. You'll see the full storefront.
The shop works immediately — no database needed just to browse and take WhatsApp
orders.

Press `Ctrl + C` in the terminal to stop it.

---

## 4. Turn on accounts & the admin login

The storefront works without any setup. If you also want **customer sign-up/login**
and the **admin dashboard**, do this once:

**a) Create your settings file.** Copy `.env.example` to a new file named `.env`:

```bash
cp .env.example .env        # Mac/Linux
copy .env.example .env      # Windows
```

**b) Set a secret.** Open `.env` and set `AUTH_SECRET` to a long random string.
Generate one with:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Paste the result as the value of `AUTH_SECRET`. Also set your admin email and a
strong `ADMIN_PASSWORD` in the same file.

**c) Create the database** (uses a simple local file by default):

```bash
npm run db:push
```

**d) Create your admin account:**

```bash
npm run seed
```

Now restart `npm run dev`, go to **http://localhost:3000/admin/login**, and sign in
with the admin email/password from your `.env`. Customers can register at
**/signup**.

---

## 5. Make it yours (products, brand, photos)

Everything you'll want to change is in easy-to-find files.

### Add / edit / remove sarees
Open **`src/data/products.js`**. Each saree is a block like this:

```js
{
  id: "DLL-101",              // a unique code (also the photo file name)
  name: "Rani Zari Banarasi",
  category: "banarasi-silk",  // must match a category slug (see below)
  price: 12500,               // number only, in rupees
  fabric: "Pure Katan Silk",
  color: "Deep Wine",
  blurb: "One short line shown on the card.",
  details: "A longer description for the product page.",
  image: "/products/DLL-101.svg",
  featured: true,             // show on the home page
  // hidden: true,            // uncomment to hide from the shop
},
```

- **To add a saree:** copy a block, paste it, change the details, and give it a new `id`.
- **To remove one:** delete its block.
- **To hide one:** add `hidden: true,` to it.

Valid category slugs: `banarasi-silk`, `modal-silk`, `cotton`, `office-wear`,
`traditional`, `wedding`, `giftings`.

### Add real saree photos
The site ships with placeholder images. To use real photos:

1. Save each photo into the **`public/products/`** folder.
2. Name it after the saree's `id`, e.g. `DLL-101.jpg`.
3. In `products.js`, set `image: "/products/DLL-101.jpg"`.

(Square-ish "portrait" photos, about 800×1000 pixels, look best.)

### Change contact details, brand name, WhatsApp number
Open **`src/lib/constants.js`** and edit the `BRAND` section at the top. Change it
in this one place and it updates everywhere on the site.

---

## 6. Put it online for free (deploy)

The easiest host for Next.js is **Vercel** (free plan is plenty for a boutique).

1. Push your code to GitHub (Step 2).
2. Go to https://vercel.com and sign up **with your GitHub account**.
3. Click **Add New → Project**, choose your `Diksha-s-Little-Looms` repository, and
   click **Deploy**. Vercel detects Next.js automatically.
4. In a minute you get a live link like `https://diksha-s-little-looms.vercel.app`.
   You can add your own domain later in Vercel's settings.

Every time you `git push`, Vercel re-deploys automatically. 🎉

### If you want customer accounts online too
The local file-based database doesn't work on Vercel. Use a **free** cloud database:

1. Sign up at https://neon.tech and create a project — copy its connection string
   (starts with `postgresql://`).
2. In **`prisma/schema.prisma`**, change the provider line to:
   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }
   ```
3. In Vercel: **Project → Settings → Environment Variables**, add:
   - `DATABASE_URL` = your Neon connection string
   - `AUTH_SECRET` = a long random string
   - `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `ADMIN_NAME`
4. Commit and push. After it deploys, create the tables and admin once by running
   locally against the cloud database (put the Neon URL in your local `.env` first):
   ```bash
   npm run db:push
   npm run seed
   ```

The storefront works online with **no** database — you only need the above if you
want sign-up/login and the admin dashboard live.

---

## 7. Admin login details

The admin account is whatever you set in `.env` before running `npm run seed`.
The starter values in `.env.example` are:

- **Email:** `diksha11081993@gmail.com`
- **Password:** `Diksha@Looms2025`  ← **change this** in `.env`, then re-run `npm run seed`

Sign in at **`/admin/login`**. From the dashboard you can see every registered
customer and an overview of all your sarees.

---

## 8. Troubleshooting

- **`npm install` fails** — make sure you have internet and Node 18+ (`node --version`).
- **`git push` says "authentication failed"** — you must use a Personal Access Token
  as the password, not your GitHub password (see Step 2).
- **Sign-up/login shows a database error** — you haven't done Step 4 yet: create
  `.env`, then run `npm run db:push` and `npm run seed`.
- **Fonts/images look plain when offline** — the elegant fonts load from the
  internet; they appear once you're online.
- **Port 3000 is busy** — run `npm run dev -- -p 3001` and open http://localhost:3001.

---

Built with Next.js, Tailwind CSS, and Prisma. Handwoven in India. 🧵
