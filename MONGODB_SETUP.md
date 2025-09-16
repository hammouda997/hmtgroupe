# MongoDB Setup Guide

## Option 1: Local MongoDB Installation

### Windows:
1. Download MongoDB Community Server from: https://www.mongodb.com/try/download/community
2. Install MongoDB with default settings
3. Start MongoDB service:
   ```bash
   # Open Command Prompt as Administrator
   net start MongoDB
   ```

### macOS:
```bash
# Install using Homebrew
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb/brew/mongodb-community
```

### Linux (Ubuntu/Debian):
```bash
# Import MongoDB public key
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -

# Create list file
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list

# Install MongoDB
sudo apt-get update
sudo apt-get install -y mongodb-org

# Start MongoDB
sudo systemctl start mongod
sudo systemctl enable mongod
```

## Option 2: MongoDB Atlas (Cloud - Recommended)

1. Go to https://www.mongodb.com/atlas
2. Create a free account
3. Create a new cluster (free tier available)
4. Get your connection string
5. Update your `.env` file:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/hmt_cms
```

## Option 3: Docker (Quick Setup)

```bash
# Run MongoDB in Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest

# Or with persistent data
docker run -d -p 27017:27017 --name mongodb -v mongodb_data:/data/db mongo:latest
```

## Verify MongoDB is Running

```bash
# Check if MongoDB is running
mongosh

# Or test connection
mongo --eval "db.adminCommand('ismaster')"
```

## Update Backend Configuration

Once MongoDB is running, update your backend `.env` file:

```env
# For local MongoDB
MONGODB_URI=mongodb://localhost:27017/hmt_cms

# For MongoDB Atlas
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/hmt_cms
```

## Initialize Database

After MongoDB is running, initialize the database:

```bash
cd backend
npm run init-db
```

This will create the admin user and default data.

## Troubleshooting

### Connection Refused Error
- Make sure MongoDB service is running
- Check if port 27017 is available
- Verify connection string in `.env`

### Authentication Error
- Check username/password in connection string
- Ensure database user has proper permissions

### Windows Service Issues
```bash
# Restart MongoDB service
net stop MongoDB
net start MongoDB
```
