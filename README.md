# LOST and Found

Created a lost and found website. user can add item form home page.

## 🚀 Getting Started

###  Backend Setup (Django)

1. **Navigate to backend folder:**
   ```bash
   cd backend
    python3 -m venv venv
   source venv/bin/activate
   ```
2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```
3. **Apply migrations & run server:**
 ```bash
   python manage.py makemigrations
   python manage.py migrate
   python manage.py runserver
   ```
4. **Create admin user:**
```bash
python manage.py createsuperuser
```

###Frontend Setup (React)
1. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run development server:**
   ```bash
      npm run dev
   ```
##  Features

- Add details of found items: name, location, description, photo, and contact number
- Admin dashboard to verify/manage reported items
- Real-time UI updates (React frontend)
- RESTful APIs for smooth frontend-backend interaction

## About Files

1. /src/Components/ItemForm.jsx
   
	  •	A form for users to submit information about items.
   
	  •	Fields: item name, description, location, and optional image.
   
	  •	Sends a POST request to the backend when submitted.
2. /src/Components/ItemList.jsx
   
	  •	Displays a list of all items retrieved from the backend via a GET request.
   
	  •	Each item includes name, description, place, and image.
   
3. /src/index.css
   
	  •	Global CSS file that contains base styles, including layout, form styling, buttons, navbar, etc.
   
	  •	Provides consistent UI styling across all components.
5. /src/App.jsx
   
	  •	Main component that sets up navigation and routing using react-router-dom.
   
	  •	Displays the navigation bar and switches between Lost and Found pages.
7. /src/main.jsx
   
	  •	Entry point of the React application.
   
	  •	Wraps <App /> inside a <BrowserRouter> to enable routing.
   
	  •	Mounts the React app to the DOM element with id="root".
   
9. /src/Pages/FoundPage.jsx
	•	Combines FoundItemForm and FoundItemList.
	•	Used as the main view for users to report and browse found items.

