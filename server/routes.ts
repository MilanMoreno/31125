import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Download website ZIP endpoint
  app.get('/api/get-full-project-zip', (req, res) => {
    try {
      const file = '/home/runner/workspace/attached_assets/MysraProductions-Website.zip';
      res.setHeader('Content-Type', 'application/zip');
      res.setHeader('Content-Disposition', 'attachment; filename="MysraProductions-Website.zip"');
      res.sendFile(file);
    } catch (err) {
      console.error('Error downloading file:', err);
      res.status(500).json({ error: 'Error downloading file' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
