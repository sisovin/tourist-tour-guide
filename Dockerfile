# Dockerfile for PostgreSQL setup

# Use the official PostgreSQL image from the Docker Hub
FROM postgres:13

# Set environment variables
ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=admin
ENV POSTGRES_DB=tourist_tour_guides

# Copy the initialization scripts
COPY ./initdb /docker-entrypoint-initdb.d/

# Expose the PostgreSQL port
EXPOSE 5432
