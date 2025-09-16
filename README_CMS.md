# HMT Group Content Management System

A complete, user-friendly CMS solution for managing HMT Group website content.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- MongoDB (local or cloud)

### 1. Install MongoDB
```bash
# Option A: MongoDB Atlas (Cloud - Recommended)
# Go to https://www.mongodb.com/atlas and create free cluster

# Option B: Local MongoDB
# Windows: choco install mongodb
# macOS: brew install mongodb/brew/mongodb-community
# Linux: sudo apt-get install mongodb
```

### 2. Setup Everything
```bash
# Run the setup script
npm run setup

# Or setup manually:
npm run setup:backend
npm run setup:admin
```

### 3. Start the System
```bash
# Terminal 1: Start backend
npm run dev:backend

# Terminal 2: Start admin dashboard
npm run dev:admin
```

### 4. Access Admin Dashboard
- URL: http://localhost:3001
- Email: admin@hmt.tn
- Password: admin123

## 📁 Project Structure

```
HMT-GROUPE/
├── backend/                 # Node.js API server
│   ├── models/             # Database models
│   ├── routes/             # API endpoints
│   ├── middleware/         # Auth & upload middleware
│   └── scripts/            # Database initialization
├── admin/                  # React admin dashboard
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/          # Admin pages
│   │   └── hooks/          # Custom hooks
├── src/                    # Main website (existing)
│   ├── lib/cms-api.ts      # CMS API client
│   ├── hooks/useCMS.ts     # CMS hooks
│   └── components/         # CMS-enabled components
└── docs/                   # Documentation
```

## 🎯 Features

### Admin Dashboard
- **Dashboard**: System overview and statistics
- **Products**: Manage product catalog with images and specifications
- **Services**: Manage service offerings and maintenance plans
- **Pages**: Create and edit website pages
- **Company**: Update company information, contact details, milestones
- **Media**: Upload and manage images/videos

### Backend API
- **Authentication**: JWT-based secure login
- **CRUD Operations**: Full content management
- **File Upload**: Secure image/video upload
- **Data Validation**: Input validation and sanitization
- **Security**: Rate limiting, CORS, helmet protection

### Frontend Integration
- **CMS Components**: Drop-in replacements for static components
- **Fallback System**: Works even when CMS is unavailable
- **Performance**: Caching and optimized data fetching

## 🔧 Configuration

### Backend (.env)
```env
MONGODB_URI=mongodb://localhost:27017/hmt_cms
JWT_SECRET=your-super-secret-jwt-key
ADMIN_EMAIL=admin@hmt.tn
ADMIN_PASSWORD=admin123
```

### Admin Dashboard (.env)
```env
VITE_API_URL=http://localhost:5000/api
```

### Main Website (.env)
```env
VITE_CMS_API_URL=http://localhost:5000/api
```

## 📚 Documentation

- `QUICK_START.md` - Quick setup guide
- `SETUP.md` - Detailed setup instructions
- `MONGODB_SETUP.md` - MongoDB installation guide
- `INTEGRATION_GUIDE.md` - Frontend integration guide
- `backend/README.md` - Backend API documentation
- `admin/README.md` - Admin dashboard guide

## 🚀 Usage

### Managing Content

1. **Products**: Add/edit products with images, features, and specifications
2. **Services**: Manage service offerings and maintenance plans
3. **Company Info**: Update contact details, about section, leadership info
4. **Media**: Upload and organize images and videos
5. **Pages**: Create and edit website pages

### Frontend Integration

Replace static components with CMS-enabled versions:

```tsx
// Instead of
import Hero from "@/components/Hero";

// Use
import CMSHero from "@/components/CMSHero";
```

## 🔒 Security

- JWT authentication with role-based access
- Password hashing with bcrypt
- Input validation and sanitization
- Rate limiting and CORS protection
- File upload restrictions

## 🚀 Deployment

### Backend
- Deploy to Heroku, DigitalOcean, or AWS
- Use MongoDB Atlas for database
- Set production environment variables

### Admin Dashboard
- Build: `cd admin && npm run build`
- Deploy `dist` folder to any static hosting

### Frontend
- Update API URL for production
- Deploy as usual

## 🛠️ Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check connection string in .env
   - See MONGODB_SETUP.md

2. **Admin Dashboard Won't Start**
   - Check if backend is running on port 5000
   - Verify VITE_API_URL in admin/.env

3. **TypeScript Errors**
   - Ensure all dependencies are installed
   - Check Node.js version (16+)

### Getting Help

1. Check the logs in both backend and admin
2. Verify environment configuration
3. Check network connectivity
4. See documentation files for detailed guides

## 🎉 What's Next?

1. **Customize Content**: Update company info, add products/services
2. **Upload Media**: Add product images and company assets
3. **Integrate Frontend**: Connect your main website to the API
4. **Deploy**: Set up production environment
5. **Train Users**: Provide training for content managers

## 📞 Support

For issues or questions:
- Check the documentation files
- Verify environment configuration
- Check system logs
- Ensure all services are running

This CMS provides a complete solution for managing your HMT Group website content with a user-friendly interface and robust backend API.
