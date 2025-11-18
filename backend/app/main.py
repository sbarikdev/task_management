from fastapi import FastAPI
from app.routers import tasks, categories
from app.database import engine
from app import models

# Create tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Routers
app.include_router(tasks.router, prefix="/api/tasks", tags=["Tasks"])
app.include_router(categories.router, prefix="/api/categories", tags=["Categories"])

@app.get("/")
def root():
    return {"message": "Task Manager API Running"}
