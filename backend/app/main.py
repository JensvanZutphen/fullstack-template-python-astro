from fastapi import FastAPI
from app.routes import example

app = FastAPI()

# Include the example routes
app.include_router(example.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the FastAPI backend!"}
