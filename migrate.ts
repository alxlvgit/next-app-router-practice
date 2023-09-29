import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import * as dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});

export const main = async () => {
  const migrationClient = postgres(process.env.DRIZZLE_DB_URL!, {
    ssl: "require",
    max: 1,
  });

  console.log(process.env.DRIZZLE_DB_URL!);

  try {
    await migrate(drizzle(migrationClient), {
      migrationsFolder: "drizzle",
    });
    console.log("Migration complete");
  } catch (error) {
    console.log(error);
  }
  process.exit(0);
};

main();
