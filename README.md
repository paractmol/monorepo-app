# Monorepo app

Backend and frontend that can be deployed to a render.com as static and web app.

## Backend

```
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 10000
```

### CORS middleware

**CORSMiddleware** allows you to specify which origins are permitted to access resources on your server, what methods are allowed, and which headers can be used. This is essential when your frontend and backend are hosted on different domains.

```py
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins, change to specific origins in production
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)
```

## Frontend

Make sure to define environment variable **REACT_APP_BACKEND_URL**


```
yarn install && yarn start
```

* Backend: https://monorepo-app.onrender.com/docs
* Frontend: https://monorepo-app-frontend.onrender.com

Deploy static react app:
https://render.com/docs/deploy-create-react-app

## How to deploy it to render.com:
https://youtu.be/888vl8K_rNM