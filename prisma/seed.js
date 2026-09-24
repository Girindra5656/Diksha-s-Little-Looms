// Creates the first admin account so you can log into /admin.
// Run with:  npm run seed
//
// Reads ADMIN_EMAIL / ADMIN_PASSWORD / ADMIN_NAME from your .env file.

const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  const email = (process.env.ADMIN_EMAIL || "diksha11081993@gmail.com").toLowerCase();
  const password = process.env.ADMIN_PASSWORD || "Diksha@Looms2025";
  const name = process.env.ADMIN_NAME || "Diksha";

  const hashed = await bcrypt.hash(password, 10);

  const admin = await prisma.user.upsert({
    where: { email },
    update: { role: "admin", name, password: hashed },
    create: { email, name, password: hashed, role: "admin" },
  });

  console.log("\n✔ Admin account is ready.");
  console.log("  Email   :", admin.email);
  console.log("  Password:", password, "(change this in .env, then re-run the seed)");
  console.log("  Sign in at /admin/login\n");
}

main()
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
