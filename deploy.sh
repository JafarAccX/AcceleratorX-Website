#!/bin/bash

# AcceleratorX SSR Deployment Script

echo "🚀 Starting AcceleratorX SSR Deployment..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the application for production
echo "🔨 Building application..."
npm run build

# Stop the existing PM2 process
echo "🛑 Stopping existing PM2 process..."
pm2 stop acceleratorx-ssr || true

# Start the new PM2 process
echo "▶️ Starting new PM2 process..."
pm2 start ecosystem.config.json

# Save PM2 configuration
echo "💾 Saving PM2 configuration..."
pm2 save

# Restart nginx
echo "🔄 Restarting nginx..."
sudo systemctl restart nginx

# Show PM2 status
echo "📊 PM2 Status:"
pm2 status

echo "✅ Deployment completed successfully!"
echo "🌐 Your SSR application should now be running at your domain"