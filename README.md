# 📸 SnapFeed - Full-Stack Media Pipeline

A full-stack, single-page application (SPA) demonstrating a scalable media upload pipeline and real-time feed rendering. This project showcases how to efficiently handle `multipart/form-data`, process files in server memory, and utilize Cloud CDNs for optimized media delivery.

## 🚀 Tech Stack
- **Frontend:** React.js, React Router v6
- **Backend:** Node.js, Express.js
- **Middleware:** Multer (Memory Storage)
- **Database:** MongoDB, Mongoose
- **Cloud/CDN:** ImageKit

## ✨ Core Features
- **Scalable Image Uploading:** Uses Multer's `memoryStorage()` to handle incoming file buffers in RAM, preventing server disk-space exhaustion and improving upload speeds.
- **Cloud CDN Integration:** Streams media directly from the Node.js server to ImageKit via API, storing only the normalized CDN URLs in the database for optimized frontend rendering.
- **Reactive UI:** Built with React Hooks (`useState`, `useEffect`) to seamlessly fetch and render the media feed dynamically without page reloads.
- **RESTful API:** Clean separation of concerns with dedicated backend routes for media processing and data fetching.

## 🧠 System Architecture / Data Flow
1. **Client Request:** User selects an image in the React frontend; data is dispatched to the backend via a `multipart/form-data` POST request.
2. **Buffer Processing:** Express backend intercepts the request using `multer`. The file is temporarily held in the server's RAM as a Buffer.
3. **Cloud Upload:** The backend authenticates with ImageKit and streams the buffer directly to the cloud.
4. **Data Persistence:** ImageKit returns a secure CDN URL, which is then saved to MongoDB alongside the user data.
5. **Feed Generation:** React triggers a `useEffect` GET request on mount, retrieving all image URLs from MongoDB and mapping them to the UI feed.

## 🛠️ Local Setup & Installation

**1. Clone the repository**
```
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```
**2. Setup the Backend
cd backend
npm install

Create a .env file in the backend folder and add your credentials:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint
```

Start the backend server:
```npm start```
3. Setup the Frontend
```
cd frontend
npm install
npm start
```
**🔐 Security Note
This project uses a .gitignore file to ensure sensitive API keys and Database URIs are never pushed to the public repository.
code
***
### Instructions:
1. Copy all of that and put it in your `README.md`.
2. **Make sure you change the `git clone` link in the setup section to your actual GitHub link!**
3. Notice the "Security Note" at the bottom. Please, for the love of everything, make sure your `.env` file is actually inside your `.gitignore` before you push this.
