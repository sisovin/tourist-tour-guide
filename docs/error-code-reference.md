# Error Code Reference

This document provides a reference for error codes used in the Tourist Tour Guides Website project. Each error code is associated with a specific error message and description to help developers understand and resolve issues.

## Error Codes

### Authentication Errors
- **AUTH001**: Invalid credentials provided.
  - Description: The user has provided incorrect username or password.
- **AUTH002**: User not found.
  - Description: The specified user does not exist in the database.
- **AUTH003**: Token expired.
  - Description: The authentication token has expired and needs to be refreshed.

### Database Errors
- **DB001**: Connection failed.
  - Description: Unable to establish a connection to the database.
- **DB002**: Query failed.
  - Description: The database query execution failed.

### User Errors
- **USER001**: User already exists.
  - Description: The user with the specified username already exists.
- **USER002**: User creation failed.
  - Description: An error occurred while creating the user.

### General Errors
- **GEN001**: Unknown error.
  - Description: An unknown error has occurred.
