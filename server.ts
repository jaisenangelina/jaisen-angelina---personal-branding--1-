import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import Database from "better-sqlite3";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database("portfolio.db");

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    image_url TEXT,
    category TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// Seed initial data if empty or using old placeholders
const rowCount = db.prepare("SELECT COUNT(*) as count FROM projects").get() as { count: number };
if (rowCount.count === 0) {
  const insert = db.prepare("INSERT INTO projects (title, description, image_url, category) VALUES (?, ?, ?, ?)");
  insert.run("Puri cup - basketball 2026", "A thrilling basketball tournament experience.", "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop", "Basketball");
  insert.run("Nextgen 3x3 2024, 2025", "Competing in the Nextgen 3x3 series.", "https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=800&auto=format&fit=crop", "Basketball");
  insert.run("DBL 3x3 2025", "The prestigious DBL 3x3 competition.", "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=800&auto=format&fit=crop", "Basketball");
  insert.run("Team Leadership 2026", "Leading the school team to victory through synergy.", "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop", "Leadership");
} else {
  // Update existing seed data if they use picsum placeholders to provide better images
  const update = db.prepare("UPDATE projects SET image_url = ? WHERE title = ? AND image_url LIKE '%picsum.photos%'");
  update.run("https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop", "Puri cup - basketball 2026");
  update.run("https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=800&auto=format&fit=crop", "Nextgen 3x3 2024, 2025");
  update.run("https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=800&auto=format&fit=crop", "DBL 3x3 2025");
  
  // Ensure the 4th project exists if it was added later
  const checkExtra = db.prepare("SELECT id FROM projects WHERE title = ?").get("Team Leadership 2026");
  if (!checkExtra) {
    const insert = db.prepare("INSERT INTO projects (title, description, image_url, category) VALUES (?, ?, ?, ?)");
    insert.run("Team Leadership 2026", "Leading the school team to victory through synergy.", "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop", "Leadership");
  }
}

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// API Routes
app.get("/api/projects", (req, res) => {
  const projects = db.prepare("SELECT * FROM projects ORDER BY created_at DESC").all();
  res.json(projects);
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
