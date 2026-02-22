import { defineConfig } from '@prisma/config';

export default defineConfig({
  datasource: {
    url: process.env.DATABASE_URL || "postgresql://postgres:root@localhost:5432/avanti_db?schema=public",
  },
});