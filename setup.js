#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 HMT Group CMS Setup Script');
console.log('==============================\n');

// Check if Node.js version is compatible
const nodeVersion = process.version;
const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);

if (majorVersion < 16) {
  console.error('❌ Node.js version 16 or higher is required');
  console.error(`   Current version: ${nodeVersion}`);
  process.exit(1);
}

console.log(`✅ Node.js version: ${nodeVersion}`);

// Check if MongoDB is running
console.log('\n📊 Checking MongoDB connection...');
try {
  execSync('mongosh --eval "db.adminCommand(\'ismaster\')" --quiet', { stdio: 'pipe' });
  console.log('✅ MongoDB is running');
} catch (error) {
  console.log('❌ MongoDB is not running or not installed');
  console.log('   Please install and start MongoDB first');
  console.log('   See MONGODB_SETUP.md for instructions');
  process.exit(1);
}

// Setup backend
console.log('\n🔧 Setting up backend...');
try {
  process.chdir('backend');
  
  // Install dependencies
  console.log('   Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  
  // Create .env file if it doesn't exist
  if (!fs.existsSync('.env')) {
    console.log('   Creating .env file...');
    fs.copyFileSync('env.example', '.env');
    console.log('   ✅ .env file created');
  } else {
    console.log('   ✅ .env file already exists');
  }
  
  // Initialize database
  console.log('   Initializing database...');
  execSync('npm run init-db', { stdio: 'inherit' });
  
  console.log('✅ Backend setup complete');
} catch (error) {
  console.error('❌ Backend setup failed:', error.message);
  process.exit(1);
}

// Setup admin dashboard
console.log('\n🎨 Setting up admin dashboard...');
try {
  process.chdir('../admin');
  
  // Install dependencies
  console.log('   Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  
  // Create .env file if it doesn't exist
  if (!fs.existsSync('.env')) {
    console.log('   Creating .env file...');
    fs.writeFileSync('.env', 'VITE_API_URL=http://localhost:5000/api\n');
    console.log('   ✅ .env file created');
  } else {
    console.log('   ✅ .env file already exists');
  }
  
  console.log('✅ Admin dashboard setup complete');
} catch (error) {
  console.error('❌ Admin dashboard setup failed:', error.message);
  process.exit(1);
}

console.log('\n🎉 Setup Complete!');
console.log('==================');
console.log('');
console.log('To start the system:');
console.log('');
console.log('1. Start backend:');
console.log('   cd backend && npm run dev');
console.log('');
console.log('2. Start admin dashboard (in new terminal):');
console.log('   cd admin && npm run dev');
console.log('');
console.log('3. Access admin dashboard:');
console.log('   http://localhost:3001');
console.log('   Email: admin@hmt.tn');
console.log('   Password: admin123');
console.log('');
console.log('📚 See QUICK_START.md for more details');
