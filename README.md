
# Django Portfolio (DTL) Setup and Guide

This document explains how to set up and run the Django project and create an admin user. I have included an overview of Django's template language (DTL).

----------

### Project Structure Overview

The structure of the Django portfolio is divided into two main components: the **project directory** and the **app directory**. This organization follows Django's default project structure, which is designed to promote modularity and maintainability.

#### Project Directory

The **project directory** (e.g., `portfolio/`) contains global configurations for the entire project, including key files that set up the Django framework:

-   `settings.py`: This file holds the global configurations for the Django project (database, apps, middleware, etc.).
-   `urls.py`: This is the routing file for the entire project. It connects URL paths to views.
-   `wsgi.py` / `asgi.py`: These files are used for deploying the project, handling asynchronous and synchronous communication.

#### App Directory

The **app directory** (e.g., `main/`) holds the core functionality of your portfolio, like models, views, templates, and static files:

-   `models.py`: Defines the data models (e.g., portfolio projects, contact messages).
-   `views.py`: Contains the views, which define the logic for rendering templates or processing requests.
-   `urls.py`: Manages URL patterns specific to the app.
-   `templates/`: Stores the HTML templates for the app.
-   `static/`: Contains static assets such as CSS, JavaScript, and images used by the app.

----------

## Prerequisites

-   Python 3.8 or later installed on your system.
-   A virtual environment tool like `venv` or `virtualenv`.
-   Django installed (instructions provided below).

----------

## Setup and Installation

1.  **Clone the Repository**
    
    ```bash
    git clone <repository-url>
    cd <project-directory>
    
    ```
    
2.  **Create and Activate a Virtual Environment**
    
    -   Create a virtual environment:
        
        ```bash
        python -m venv venv
        
        ```
        
    -   Activate the virtual environment:
        -   **Windows:**
            
            ```bash
            venv\Scripts\activate
            
            ```
            
        -   **Mac/Linux:**
            
            ```bash
            source venv/bin/activate
            
            ```
            
3.  **Install Dependencies** If a `requirements.txt` file exists:
    
    ```bash
    pip install -r requirements.txt
    
    ```
    
    Otherwise, install Django manually:
    
    ```bash
    pip install django
    
    ```
    
4.  **Run Database Migrations** Apply database migrations to set up the database schema:
    
    ```bash
    python manage.py migrate
    
    ```
    
5.  **Create a Superuser (Admin User)** To create an admin user who can access the Django admin panel:
    
    ```bash
    python manage.py createsuperuser
    
    ```
    
    You will be prompted to provide the following:
    
    -   **Username**: The username for the admin account.
    -   **Email address**: The admin's email address.
    -   **Password**: A secure password for the admin account.
6.  **Run the Development Server** Start the Django development server:
    
    ```bash
    python manage.py runserver
    
    ```
    
7.  **Access the Application**
    
    -   Go to the application in your browser:
        
        ```
        http://127.0.0.1:8000/
        
        ```
        
    -   Access the Django admin panel:
        
        ```
        http://127.0.0.1:8000/admin/
        
        ```
        
    
    Log in using the admin credentials you created earlier.
    

----------

## Django's Template Language

Django's template language is a powerful tool for rendering dynamic HTML content. It allows developers to mix Python-like syntax within HTML to dynamically update web pages.

### Key Features:

1.  **Variables** Insert dynamic data using `{{ variable }}`:
    
    ```html
    <p>Welcome, {{ user.username }}!</p>
    
    ```
    
2.  **Tags** Use `{% ... %}` for control flow logic (loops, conditions, etc.):
    
    ```html
    {% if user.is_authenticated %}
        <p>Hello, {{ user.username }}!</p>
    {% else %}
        <p>Please log in.</p>
    {% endif %}
    
    ```
    
3.  **Filters** Modify variable output using filters:
    
    ```html
    <p>{{ post.content|truncatewords:20 }}</p>
    
    ```
    
4.  **Template Inheritance** Reuse common layouts with base templates:
    
    ```html
    <!-- base.html -->
    <html>
    <head>
        <title>{% block title %}My Site{% endblock %}</title>
    </head>
    <body>
        {% block content %}{% endblock %}
    </body>
    </html>
    
    ```
    
    ```html
    <!-- child.html -->
    {% extends 'base.html' %}
    {% block title %}Home Page{% endblock %}
    {% block content %}
        <h1>Welcome to the Home Page</h1>
    {% endblock %}
    
    ```
    
5.  **Security** Django automatically escapes variables to prevent XSS. Use the `safe` filter for trusted HTML:
    
    ```html
    <p>{{ content|safe }}</p>
    
    ```
    

----------

## Additional Commands

-   **Start a New App**
    
    ```bash
    python manage.py startapp <app_name>
    
    ```
    
-   **Collect Static Files** Collect static files for production:
    
    ```bash
    python manage.py collectstatic
    
    ```
