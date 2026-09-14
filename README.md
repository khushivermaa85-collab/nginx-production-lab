# Nginx Production Infrastructure Lab

A production-style containerized web infrastructure project built to practice real-world DevOps concepts.

## Architecture

```
User → Nginx → Frontend
             ↘ Backend-1 / Backend-2
```

## Technologies

- Docker
- Docker Compose
- Nginx
- Node.js
- Git & GitHub

## Features

- Nginx reverse proxy
- Backend load balancing
- Backend health checks
- Failure recovery
- Rate limiting
- Security headers
- Custom error page
- Docker restart policies
- Internal Docker networking
- Frontend isolated from direct host access

## Run the Project

```bash
docker compose up -d --build
```

Application: http://localhost:8080

API: http://localhost:8080/api/

## Verify Services

```bash
docker compose ps
```

## Project Purpose

This project demonstrates how multiple application services can be containerized and placed behind Nginx to create a reliable and maintainable web infrastructure.
