import mysql.connector
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI

app = FastAPI()

# Set up database connection
conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="12345678",
    database="postorama"
)

# Add CORS Middleware
origins = ["*", "http://localhost:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/get_posts")
async def get_posts():

    mycursor = conn.cursor()

    mycursor.execute("SELECT * FROM posts")

    data = mycursor.fetchall()

    mycursor.close()

    posts = []
    for row in data:
        post = {
            "id": row[0],
            "title": row[1],
            "content": row[2]
        }
        posts.append(post)

    return {"res": "OK", "data": posts}


@app.get("/get_post/{post_id}")
async def read_post(post_id: int):

    mycursor = conn.cursor()

    mycursor.execute("SELECT * FROM posts WHERE id = %s", (post_id,))

    row = mycursor.fetchone()

    mycursor.close()

    if row:

        post = {
            "id": row[0],
            "title": row[1],
            "content": row[2]
        }
        return {"res": "OK", "data": post}
    else:
        return {"res": "Error", "message": "Post not found"}


@app.get("/get_hp_data")
async def read_root():
    return {
        "res": "OK",
        "data": {
            "headline": "<h1>Welcome</h1>"
        }
    }
