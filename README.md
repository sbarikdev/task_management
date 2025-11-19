
# Task Management Application

A full-stack **Task Management** web application with a **FastAPI** backend providing REST APIs and a **React** frontend for a responsive UI.  
Users can create, read, update, and delete tasks, with data stored using **SQLAlchemy** and **SQLite**.


---

## 🖼️ Screenshots

### 🏠 Home Page

![WhatsApp Image 2025-11-18 at 7 00 12 PM](https://github.com/user-attachments/assets/f90953b1-3dce-4d23-9edd-504386594f45)

![WhatsApp Image 2025-11-18 at 7 00 16 PM](https://github.com/user-attachments/assets/4e3fd0b9-20eb-49e8-ba3e-cc9d56b02df7)



## 1\. 🏗️ Project Structure

```plaintext
project/
│── backend/
│   └── app/
│       ├── main.py
│       ├── models.py
│       ├── schemas.py
│       ├── crud.py
│       ├── database.py
│       └── __init__.py
│
│── frontend/
│   ├── src/
│   └── package.json
│
└── README.md



Here is the content converted into well-structured Markdown:

## 💻 Backend (FastAPI)

### 1\. Navigate to Backend Folder

```bash
cd backend
```

-----

### 2\. Create Virtual Environment

```bash
python -m venv venv
```

-----

### 3\. Activate Virtual Environment

  * **Windows:**
    ```bash
    venv\Scripts\activate
    ```
  * **macOS / Linux:**
    ```bash
    source venv/bin/activate
    ```

-----

### 4\. Install Dependencies

```bash
pip install fastapi uvicorn sqlalchemy pydantic
```

-----

### 5\. Run FastAPI Server

```bash
uvicorn app.main:app --reload
```

### 6\. API Documentation

  * **Swagger UI** $\rightarrow$ `http://localhost:8000/docs`
  * **ReDoc UI** $\rightarrow$ `http://localhost:8000/redoc`

-----

-----

## 🌐 Frontend (React)

### 1\. Navigate to Frontend Folder

```bash
cd frontend
```

-----

### 2\. Install Dependencies

```bash
npm install
```

-----

### 3\. Run React Development Server

  * **For Create React App (CRA):**
    ```bash
    npm start
    ```
  * **For Vite:**
    ```bash
    npm run dev
    ```

-----

### 4\. Access React App

  * **CRA:** `http://localhost:3000`
  * **Vite:** `http://localhost:5173`
