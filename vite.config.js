import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

// Vite dev server plugin to handle /api/contact via Nodemailer without requiring a separate backend process
function contactApiPlugin() {
  return {
    name: 'contact-api-plugin',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res, next) => {
        if (req.method !== 'POST') {
          return next();
        }

        let body = '';
        req.on('data', (chunk) => {
          body += chunk;
        });

        req.on('end', async () => {
          try {
            const data = JSON.parse(body || '{}');
            const { handleContactSubmission } = await import('./api/contactHandler.js');
            const result = await handleContactSubmission(data);
            res.setHeader('Content-Type', 'application/json');
            if (result.error) {
              res.statusCode = result.status || 400;
              res.end(JSON.stringify({ error: result.error }));
            } else {
              res.statusCode = 200;
              res.end(JSON.stringify(result));
            }
          } catch (err) {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 500;
            res.end(JSON.stringify({ error: err.message || 'Server error processing request' }));
          }
        });
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), contactApiPlugin()],
  server: {
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  resolve: {
    alias: {
      '@designcodeio/threeui/style.css': path.resolve(import.meta.dirname, 'src/shaders/threeui.css'),
      '@designcodeio/threeui': path.resolve(import.meta.dirname, 'src/shaders/sylva-living-world/SylvaLivingWorldScene.tsx'),
    },
  },
})
