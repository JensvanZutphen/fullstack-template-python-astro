# Backend Dockerfile
FROM python:3.10-slim

# Set working directory
WORKDIR /usr/src/app

# Copy and install dependencies
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy the app code
COPY . .

# Expose backend port
EXPOSE 8000
EXPOSE 5678

# Command to run FastAPI
CMD ["python", "-m", "debugpy", "--listen", "0.0.0.0:5678", "--wait-for-client", "-m", "uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
