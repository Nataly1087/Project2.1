# Project2.1

## Image Hosting with PostgreSQL

## Application for downloading and storing images in .jpg, .jpeg, .png, .gif formats

## The system consists of two main components:
- Python backend:
Responsible for processing HTTP requests, uploading images, validating data, and logging.
Executes the application's business logic related to managing uploaded files.
Works inside a Docker container, listening for requests on port 8000.
Metadata is stored in PostgreSQL in the following format:
- unique image identifier;
- generated file name;
- original file name from the user;
- file size in bytes;
- date and time of upload;
- file format.
PostgreSQL database backups are being created.
The backup is automated using a shell script and is saved with the date and time.

- Nginx server:
Serves static files and uploaded images via the /images/ route.
Proxies requests to the Python backend for other routes.
Runs in a separate Docker container, listening for requests on port 80.

The components communicate via a local network created using Docker Compose.

## Requirements:
- Docker
- Docker Compose
- Loguru
- PostgreSQL

## Launch:
To launch the system, you need to:
- Install Docker and Docker Compose.
- Run the command: docker-compose up --build

## Stop and delete:
- To stop and delete, run the command: docker-compose down

## Restore a database from a backup copy:
- To restore a database from a backup copy, use the command: docker exec -i postgres_container psql -U postgres images_db < backup.sql
