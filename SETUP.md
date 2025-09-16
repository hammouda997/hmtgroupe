# HMT Group CMS Setup Guide

This guide will help you set up the complete content management system for HMT Group website.

## System Overview

The CMS consists of:
- **Backend API** (Node.js + Express + MongoDB)
- **Admin Dashboard** (React + TypeScript)
- **Frontend Website** (Existing React website - will be integrated)

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud)
- Git

## Quick Start

### 1. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp env.example .env

# Edit .env file with your configuration
# At minimum, set:
# MONGODB_URI=mongodb://localhost:27017/hmt_cms
# JWT_SECRET=your-super-secret-jwt-key-here

# Initialize database with default data
npm run init-db

# Start development server
npm run dev
```

The backend API will be available at `http://localhost:5000`

### 2. Admin Dashboard Setup

```bash
# Navigate to admin directory
cd admin

# Install dependencies
npm install

# Create environment file
echo "VITE_API_URL=http://localhost:5000/api" > .env

# Start development server
npm run dev
```

The admin dashboard will be available at `http://localhost:3001`

### 3. Default Login Credentials

- **Email**: admin@hmt.tn
- **Password**: admin123

## Environment Configuration

### Backend (.env)
```env
# Database
MONGODB_URI=mongodb://localhost:27017/hmt_cms

# Server
PORT=5000
NODE_ENV=development

# JWT
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRE=7d

# Admin Credentials (for initial setup)
ADMIN_EMAIL=admin@hmt.tn
ADMIN_PASSWORD=admin123

# File Upload
UPLOAD_PATH=./uploads
MAX_FILE_SIZE=5242880
```

### Admin Dashboard (.env)
```env
VITE_API_URL=http://localhost:5000/api
```

## Features Overview

### Admin Dashboard Features

1. **Dashboard**
   - System overview and statistics
   - Recent activities
   - Quick actions

2. **Products Management**
   - Add/edit/delete products
   - Manage product categories
   - Upload product images
   - Set product specifications and features

3. **Services Management**
   - Manage service offerings
   - Create maintenance plans
   - Set pricing and features

4. **Pages Management**
   - Create and edit website pages
   - Manage page content and metadata

5. **Company Information**
   - Update company details
   - Manage contact information
   - Add milestones and achievements
   - Manage partners and certifications

6. **Media Library**
   - Upload and manage images/videos
   - Organize files by category
   - Manage file metadata

### Backend API Features

- **Authentication**: JWT-based auth with role management
- **CRUD Operations**: Full CRUD for all content types
- **File Upload**: Secure file upload with validation
- **Data Validation**: Input validation and sanitization
- **Security**: Rate limiting, CORS, helmet protection

## Database Schema

The system uses MongoDB with the following collections:

- **users**: Admin users and authentication
- **pages**: Website pages content
- **products**: Product catalog
- **services**: Service offerings
- **company**: Company information
- **media**: File metadata and references

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `POST /api/auth/change-password` - Change password

### Content Management
- `GET/POST/PUT/DELETE /api/products` - Product management
- `GET/POST/PUT/DELETE /api/services` - Service management
- `GET/POST/PUT/DELETE /api/pages` - Page management
- `GET/PUT /api/company` - Company information
- `GET/POST/PUT/DELETE /api/media` - Media management

## Production Deployment

### Backend Deployment

1. Set up MongoDB Atlas or local MongoDB
2. Configure environment variables for production
3. Deploy to your preferred hosting service (Heroku, DigitalOcean, AWS, etc.)
4. Set up file storage (AWS S3, Cloudinary, etc.)

### Admin Dashboard Deployment

1. Build the admin dashboard:
   ```bash
   cd admin
   npm run build
   ```
2. Deploy the `dist` folder to your hosting service
3. Update the API URL in environment variables

### Frontend Integration

To integrate the CMS with your existing website:

1. Install the API client in your main website
2. Replace static content with API calls
3. Use the same API endpoints to fetch content

## Security Considerations

- Change default admin credentials
- Use strong JWT secrets
- Enable HTTPS in production
- Set up proper CORS policies
- Implement rate limiting
- Regular security updates

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Check MongoDB is running
   - Verify connection string in .env
   - Check network connectivity

2. **Authentication Issues**
   - Verify JWT_SECRET is set
   - Check token expiration
   - Clear browser storage

3. **File Upload Issues**
   - Check upload directory permissions
   - Verify file size limits
   - Check file type restrictions

### Support

For issues or questions:
1. Check the logs in both backend and admin dashboard
2. Verify environment configuration
3. Check network connectivity between services

## Next Steps

1. **Customize Content**: Update company information and add your products/services
2. **Upload Media**: Add product images and company assets
3. **Integrate Frontend**: Connect your main website to the API
4. **Deploy**: Set up production environment
5. **Train Users**: Provide training for content managers

## File Structure

```
HMT-GROUPE/
├── backend/                 # Node.js API server
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── middleware/         # Auth and upload middleware
│   ├── scripts/            # Database initialization
│   └── uploads/            # File uploads directory
├── admin/                  # React admin dashboard
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Admin pages
│   │   ├── hooks/          # Custom hooks
│   │   └── lib/            # API client
│   └── dist/               # Built admin dashboard
└── src/                    # Main website (existing)
```

This CMS provides a complete solution for managing your HMT Group website content with a user-friendly interface and robust backend API.
