# Monorepo app

Backend and frontend that can be deployed to a render.com as static and web app.

## Backend

```
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 10000
```

## Frontend

Make sure to define environment variable REACT_APP_BACKEND_URL


```
yarn install && yarn start
```