# Postorama 

## What i tried to do:

* Implamenting the task given as close to the original as could be, with some changes to insure this project will look great and have a strong UX.

## Technologies used:
- [ Next.js ] - Front end SSR
- [ Tailwind ]- CSS Library
- Python + [ FastAPI ] - Back end
- MYSQL - Database
 
## 🔗 Project link
[![github](https://img.shields.io/badge/Postorama-000?style=for-the-badge&logo=github&logoColor=white)]( https://github.com/eladayal/Postorama)

## Instructions:
1. First lets clone the project to a local folder using:
```sh
git clone https://github.com/eladayal/Postorama.git
```
After cloning the project lets navigate to the folder
```sh
cd Postorama
```
Then connect to mysql and lets create our database and use it - (asuming you already have MYSQL installed)
```shyour
CREATE DATABASE postorama;
```
   exit mysql shell, Navigate to the directory where your MySQL dump file is located, and import our dump posts file to our new database (The file is inside the root project folder as posts.sql)
```sh
mysql -u your_username -p your_database_name < poats.sql
```
 2. now lets run our backend (after making sure your in the root project directory) run command: 
```sh
python3 -m uvicorn main:app --reload 
```
** plaese make sure to change your local mysql credentials inside the main.py file if its not the deafult root user and password. **
 3. At the same directory open another terminal and now run our front end with:
```sh
npm i
npm run dev
```
## Screenshots

![App Screenshot](https://res.cloudinary.com/dbt4olgrj/image/upload/v1691004832/Screenshot_2023-08-02_at_22.33.44_mzflkr.png)


   [Next.js]: <https://nextjs.org/>
   [Tailwind]: <https://tailwindcss.com/>
  [ FastAPI ]: <https://fastapi.tiangolo.com/>
