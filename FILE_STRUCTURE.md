# 🎬 MovieFlix - File Structure & Navigation Map

## 📦 Complete Project Structure

```
/workspaces/movies/
│
├── 📄 Documentation Files
│   ├── 00_START_HERE.md                    ← Start here first!
│   ├── README.md                           ← Project overview
│   ├── QUICK_REFERENCE.md                  ← Quick lookup guide
│   ├── THEME_DOCUMENTATION.md              ← Detailed theme info
│   ├── STREAMMIX_INTEGRATION_GUIDE.md      ← Technical details
│   ├── STREAMMIX_UPDATE.md                 ← What's new summary
│   ├── INTEGRATION_COMPLETE.md             ← Final summary
│   ├── PROJECT_OVERVIEW.md                 ← Full details
│   ├── DESIGN_SYSTEM.md                    ← Design guide
│   ├── IMPLEMENTATION_REPORT.md            ← Technical report
│   ├── INTEGRATION_SUMMARY.txt             ← Quick summary
│   ├── DESIGN_UPDATE.md                    ← Design changes
│   ├── QUICKSTART.md                       ← Quick setup
│   └── FILE_STRUCTURE.md                   ← This file
│
├── 📁 backend/                             ← Node.js Express API
│   ├── server.js                           ← Main API server
│   ├── seed.js                             ← Database seeding
│   ├── package.json                        ← Dependencies
│   └── .env.example                        ← Config template
│
├── 📁 frontend/                            ← React Application
│   │
│   ├── 📁 public/                          ← Static files
│   │   ├── index.html                      ← React entry
│   │   ├── index-netflix.html              ← Netflix standalone
│   │   └── index-streammix.html            ← StreamMix standalone
│   │
│   ├── 📁 src/
│   │   │
│   │   ├── App.js                          ← Main router
│   │   ├── index.js                        ← React root
│   │   │
│   │   ├── 📁 components/
│   │   │   │
│   │   │   ├── Header.js                   ← Netflix nav
│   │   │   ├── MovieGrid.js                ← Netflix grid
│   │   │   ├── FilterBar.js                ← Filter controls
│   │   │   │
│   │   │   └── 📁 streammix/               ← StreamMix components
│   │   │       ├── StreamMixSidebar.js     ← Sidebar nav
│   │   │       ├── StreamMixHeader.js      ← Top header
│   │   │       ├── StreamMixHero.js        ← Hero section
│   │   │       ├── MovieRow.js             ← Horiz. scroll
│   │   │       └── ShortsGrid.js           ← Shorts section
│   │   │
│   │   ├── 📁 pages/
│   │   │   ├── Home.js                     ← Netflix home
│   │   │   ├── MovieDetail.js              ← Movie details
│   │   │   └── StreamMix.js                ← StreamMix main
│   │   │
│   │   └── 📁 styles/
│   │       ├── App.css                     ← App styles
│   │       ├── index.css                   ← Global styles
│   │       ├── Home.css                    ← Netflix home
│   │       ├── MovieGrid.css               ← Netflix grid
│   │       ├── FilterBar.css               ← Filters
│   │       ├── MovieDetail.css             ← Details page
│   │       │
│   │       └── 📁 streammix/               ← StreamMix styles
│   │           └── StreamMix.css           ← All StreamMix CSS
│   │
│   └── package.json                        ← React dependencies
│
├── docker-compose.yml                      ← Docker setup
└── package.json                            ← Root package
```

---

## 🔗 Quick Navigation

### 📖 Documentation
```
Start Here
    ↓
00_START_HERE.md         (Getting started guide)
    ↓
├─→ QUICK_REFERENCE.md   (Common questions)
├─→ QUICKSTART.md        (Setup instructions)
├─→ README.md            (Project overview)
│
├─→ THEME_DOCUMENTATION.md        (Theme details)
├─→ STREAMMIX_INTEGRATION_GUIDE.md (Technical)
├─→ STREAMMIX_UPDATE.md           (What's new)
│
├─→ PROJECT_OVERVIEW.md    (Full breakdown)
├─→ INTEGRATION_COMPLETE.md (Final summary)
└─→ DESIGN_SYSTEM.md       (Design guide)
```

### 🎨 Design Files
```
Netflix Theme            StreamMix Theme
├─ Header.js            ├─ StreamMixSidebar.js
├─ MovieGrid.js         ├─ StreamMixHeader.js
├─ FilterBar.js         ├─ StreamMixHero.js
├─ Home.js              ├─ MovieRow.js
├─ MovieDetail.js       ├─ ShortsGrid.js
├─ *.css (6 files)      └─ StreamMix.css
└─ index-netflix.html   └─ index-streammix.html
```

### 🔄 Data Flow
```
Database (MongoDB)
    ↓ [5,000 Movies]
API Backend (Express)
    ↓ [REST endpoints]
Frontend (React)
    ├─ Netflix Theme
    │  ├─ Home.js
    │  ├─ MovieGrid.js
    │  └─ MovieDetail.js
    └─ StreamMix Theme
       ├─ StreamMixPage.js
       ├─ MovieRow.js
       └─ ShortsGrid.js
```

---

## 🎯 File Purpose Guide

### Backend Files

| File | Purpose | Lines |
|------|---------|-------|
| server.js | Express API with 7 endpoints | 159 |
| seed.js | Seed 5,000 movies to DB | 91 |
| package.json | Node dependencies | - |
| .env.example | Config template | - |

### Frontend - React Components

| File | Purpose | Lines | Props |
|------|---------|-------|-------|
| App.js | Main router | 23 | None |
| Header.js | Netflix nav bar | 50+ | apiBaseUrl |
| MovieGrid.js | Movie card grid | 40+ | movies, loading |
| FilterBar.js | Filter UI | 35+ | onFilter |
| Home.js | Netflix home | 60+ | apiBaseUrl |
| MovieDetail.js | Movie page | 80+ | apiBaseUrl |
| StreamMix.js | StreamMix main | 70 | None |
| StreamMixSidebar.js | Sidebar | 45 | None |
| StreamMixHeader.js | Header | 20 | searchTerm, setState |
| StreamMixHero.js | Hero section | 18 | None |
| MovieRow.js | Horiz. scroll | 40 | title, link, movies |
| ShortsGrid.js | Shorts grid | 25 | shorts |

### Frontend - Stylesheets

| File | Purpose | Size | Colors |
|------|---------|------|--------|
| index.css | Global styles | 50+ | CSS vars |
| App.css | App wrapper | 20+ | Generic |
| Home.css | Netflix home | 100+ | Red theme |
| MovieGrid.css | Netflix grid | 150+ | Red theme |
| FilterBar.css | Filters | 80+ | Red theme |
| MovieDetail.css | Detail page | 120+ | Red theme |
| streammix/StreamMix.css | All StreamMix | 600+ | Blue theme |

### Standalone HTML Files

| File | Purpose | Size | Tech |
|------|---------|------|------|
| index-netflix.html | Netflix demo | 300+ lines | Vanilla HTML/CSS |
| index-streammix.html | StreamMix demo | 400+ lines | Vanilla HTML/CSS |

---

## 🚀 Navigation by Use Case

### 👤 New User
1. Read `00_START_HERE.md`
2. Check `QUICK_REFERENCE.md`
3. Open `QUICKSTART.md`
4. Run backend & frontend
5. Navigate to themes

### 👨‍💻 Developer
1. Read `PROJECT_OVERVIEW.md`
2. Check `THEME_DOCUMENTATION.md`
3. Review `STREAMMIX_INTEGRATION_GUIDE.md`
4. Explore `/components` and `/styles` directories
5. Check API in `backend/server.js`

### 🎨 Designer
1. Check `DESIGN_SYSTEM.md`
2. Review `index-netflix.html` (standalone)
3. Review `index-streammix.html` (standalone)
4. View colors in CSS files
5. Check responsive breakpoints

### 📊 Project Manager
1. Read `INTEGRATION_COMPLETE.md`
2. Check `STREAMMIX_UPDATE.md`
3. Review `PROJECT_OVERVIEW.md`
4. Check checklist in documentation

### 🔧 DevOps
1. Read `QUICKSTART.md`
2. Check `docker-compose.yml`
3. Review `.env.example` files
4. Setup backend & frontend
5. Configure MongoDB

---

## 📱 Viewing Themes

### Netflix Theme
```
URL: http://localhost:3000/
├─ Component: Home.js
├─ Layout: Grid-based
├─ Color: Red (#e50914)
├─ Styles: 6 CSS files
└─ Standalone: index-netflix.html
```

### StreamMix Theme
```
URL: http://localhost:3000/streammix
├─ Component: StreamMix.js
├─ Layout: Sidebar + scrolling
├─ Color: Blue (#3ea6ff)
├─ Styles: StreamMix.css
└─ Standalone: index-streammix.html
```

---

## 🔍 Finding Specific Features

### Want to find...

**Colors & Theming?**
- Global: `frontend/src/styles/index.css` (CSS variables)
- Netflix: `frontend/src/styles/Home.css`
- StreamMix: `frontend/src/styles/streammix/StreamMix.css`

**Navigation?**
- Netflix: `frontend/src/components/Header.js`
- StreamMix: `frontend/src/components/streammix/StreamMixSidebar.js`

**Movie Display?**
- Netflix: `frontend/src/components/MovieGrid.js`
- StreamMix: `frontend/src/components/streammix/MovieRow.js`

**Search & Filters?**
- Netflix: `frontend/src/components/FilterBar.js`
- StreamMix: `frontend/src/components/streammix/StreamMixHeader.js`

**API Calls?**
- Backend endpoints: `backend/server.js`
- Frontend usage: `frontend/src/pages/Home.js` (Netflix)
- Frontend usage: `frontend/src/pages/StreamMix.js` (StreamMix)

**Database Schema?**
- Seeding: `backend/seed.js`
- Schema: Top of `backend/server.js`

**Responsive Design?**
- Breakpoints: `frontend/src/styles/streammix/StreamMix.css`
- Queries: Search for `@media` in CSS files

---

## 📚 Documentation Map

```
Documentation Files (12 total)
├─ Getting Started
│  ├─ 00_START_HERE.md
│  ├─ QUICKSTART.md
│  └─ QUICK_REFERENCE.md
│
├─ Design & Theme
│  ├─ DESIGN_SYSTEM.md
│  ├─ THEME_DOCUMENTATION.md
│  ├─ DESIGN_UPDATE.md
│  └─ FILE_STRUCTURE.md (this file)
│
├─ Integration & Implementation
│  ├─ STREAMMIX_INTEGRATION_GUIDE.md
│  ├─ STREAMMIX_UPDATE.md
│  ├─ IMPLEMENTATION_REPORT.md
│  └─ INTEGRATION_SUMMARY.txt
│
└─ Project Overview
   ├─ README.md
   ├─ PROJECT_OVERVIEW.md
   └─ INTEGRATION_COMPLETE.md
```

---

## 🎯 Directory Purposes

### `/frontend/src/components/`
Contains React components for Netflix theme
- UI pieces (Header, Grid, Filters)
- Movie display components
- Navigation elements

### `/frontend/src/components/streammix/`
Contains React components for StreamMix theme
- Alternative layout components
- Sidebar, header, hero
- Horizontal scroll & shorts

### `/frontend/src/pages/`
Contains full page components
- Home page (Netflix)
- Movie detail page
- StreamMix page

### `/frontend/src/styles/`
Contains CSS stylesheets
- Global styles
- Theme-specific styles
- Responsive breakpoints

### `/frontend/src/styles/streammix/`
Contains StreamMix-specific CSS
- Single comprehensive stylesheet
- All StreamMix component styles

### `/backend/`
Contains Node.js Express server
- API endpoints
- Database connection
- Seeding logic

### `/frontend/public/`
Contains static HTML files
- Main React entry (index.html)
- Netflix standalone (index-netflix.html)
- StreamMix standalone (index-streammix.html)

---

## ✨ Special Files

### Critical Files
- `App.js` - Controls routing between themes
- `backend/server.js` - Main API
- `backend/seed.js` - Database setup
- `StreamMix.css` - Complete StreamMix styling

### Standalone Demos
- `index-netflix.html` - Works without React/API
- `index-streammix.html` - Works without React/API

### Configuration
- `.env.example` - Template for config
- `docker-compose.yml` - Docker setup
- `package.json` - Dependencies

---

## 🔗 File Dependencies

```
App.js (main)
├─ Home.js
│  └─ MovieGrid.js, FilterBar.js
├─ MovieDetail.js
└─ StreamMix.js
   ├─ StreamMixSidebar.js
   ├─ StreamMixHeader.js
   ├─ StreamMixHero.js
   ├─ MovieRow.js
   └─ ShortsGrid.js

All components use:
├─ axios (HTTP calls)
├─ CSS from styles/
└─ Data from backend API
```

---

## 🎓 Learning Path

For someone new to the project:

```
1. Read 00_START_HERE.md        (5 min)
   ↓
2. Read QUICK_REFERENCE.md      (5 min)
   ↓
3. Follow QUICKSTART.md         (10 min)
   ↓
4. Explore standalone HTML      (5 min)
   ↓
5. Run backend & frontend       (5 min)
   ↓
6. Visit both themes            (5 min)
   ↓
7. Read THEME_DOCUMENTATION.md  (10 min)
   ↓
8. Review component files       (15 min)
   ↓
Total: ~60 minutes to full understanding
```

---

## 📞 Finding Help

**How do I...** → See `QUICK_REFERENCE.md`
**What files do I need?** → See this file
**How do I set it up?** → See `QUICKSTART.md`
**What's the architecture?** → See `PROJECT_OVERVIEW.md`
**How do themes work?** → See `THEME_DOCUMENTATION.md`
**Where's feature X?** → Use Ctrl+F in this file
**I have an error** → Check troubleshooting in `QUICK_REFERENCE.md`

---

## ✅ Verification Checklist

Verify your installation:

```
□ Backend running (port 5000)
□ Frontend running (port 3000)
□ MongoDB connected
□ 5,000 movies seeded
□ /api/health returns OK
□ Netflix theme loads (/)
□ StreamMix theme loads (/streammix)
□ Standalone HTML works
□ No console errors
□ All components render
□ API calls working
□ Responsive design works
```

---

**Last Updated:** 2024
**Version:** 2.0 Complete
**Total Documentation:** 12 files
**Total Code:** 1,200+ lines
