# Quick Start Guide

## Prerequisites
- Node.js (v16 or higher)
- MongoDB (see MONGODB_SETUP.md for installation)

## Step 1: Install MongoDB

Choose one option:

### Option A: MongoDB Atlas (Cloud - Easiest)
1. Go to https://www.mongodb.com/atlas
2. Create free account and cluster
3. Get connection string
4. Skip to Step 3

### Option B: Local MongoDB
```bash
# Windows (using Chocolatey)
choco install mongodb

# macOS (using Homebrew)
brew install mongodb/brew/mongodb-community
brew services start mongodb/brew/mongodb-community

# Linux
sudo apt-get install mongodb
sudo systemctl start mongodb
```

## Step 2: Setup Backend

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Create environment file
cp env.example .env

# Edit .env file (set MongoDB URI)
# For local: MONGODB_URI=mongodb://localhost:27017/hmt_cms
# For Atlas: MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/hmt_cms

# Initialize database
npm run init-db

# Start backend server
npm run dev
```

Backend will be available at: http://localhost:5000

## Step 3: Setup Admin Dashboard

```bash
# Navigate to admin (in new terminal)
cd admin

# Install dependencies
npm install

# Create environment file
echo "VITE_API_URL=http://localhost:5000/api" > .env

# Start admin dashboard
npm run dev
```

Admin dashboard will be available at: http://localhost:3001

## Step 4: Login to Admin

- URL: http://localhost:3001
- Email: admin@hmt.tn
- Password: admin123

## Step 5: Test the System

1. Login to admin dashboard
2. Go to Products → Add a new product
3. Go to Company → Update company information
4. Go to Media → Upload some images

## Troubleshooting

### MongoDB Connection Error
- Make sure MongoDB is running
- Check connection string in .env
- See MONGODB_SETUP.md for detailed setup

### Admin Dashboard Won't Start
- Check if backend is running on port 5000
- Verify VITE_API_URL in admin/.env

### Backend Won't Start
- Check if MongoDB is running
- Verify MONGODB_URI in backend/.env
- Check if port 5000 is available

## Next Steps

1. **Customize Content**: Update company info, add products/services
2. **Upload Media**: Add product images and company assets
3. **Integrate Frontend**: Connect your main website to the API
4. **Deploy**: Set up production environment

## Production Deployment

For production deployment:

1. **Backend**: Deploy to Heroku, DigitalOcean, or AWS
2. **Database**: Use MongoDB Atlas (cloud)
3. **Admin**: Build and deploy to any static hosting
4. **Frontend**: Update API URL and deploy

See SETUP.md for detailed deployment instructions.
