# Alembic

Alembic is a lightweight, powerful database migration tool designed for Python, specifically working with the SQLAlchemy ORM. It manages database schema evolution by creating and running version-controlled migration scripts, allowing developers to upgrade or downgrade database structures safely.

**Key Features & Capabilities:**

- **Automatic Generation:** Detects changes in SQLAlchemy models and automatically generates migration scripts.
- **Database Compatibility:** Supports PostgreSQL, MySQL, SQLite, Oracle, and MS-SQL.
- **Migration Control:** Allows creating, applying, and rolling back database changes, including `ALTER` statements.
- **Environment Management:** Maintains a history of migration files, ensuring consistency across team members' environments.

**Commonly Used Commands:**

- `alembic init <directory>`: Initialize a new migration environment.
- `alembic revision --autogenerate -m "description"`: Create a new migration script based on model changes.
- `alembic upgrade head`: Apply all migrations to the database.
- `alembic downgrade -1`: Roll back the last applied migration.

[GitHub - sqlalchemy/alembic: A database migrations tool for SQLAlchemy.](https://github.com/sqlalchemy/alembic) ⭐ 4.0k

## Setting Up Alembic for Database Migrations

## Installation

```bash
uv add alembic
```

## Initialize Alembic

```bash
# In your project root
alembic init alembic
```

This creates:

- `alembic/` directory with migration scripts
- `alembic.ini` configuration file

## Configure Alembic

### 1. Edit `alembic.ini`

Change the database URL line to use your environment variable:

```ini
# sqlalchemy.url = driver://user:pass@localhost/dbname
# Comment out or remove the above, we'll use env.py instead
```

### 2. Edit `alembic/env.py`

Replace the file content with:

```python
from logging.config import fileConfig
from sqlalchemy import engine_from_config, pool
from alembic import context
import os

# Import your SQLModel metadata
from app.models.base import BaseModel
from app.models.user import User
from app.models.session import Session
from app.models.thread import Thread

# Alembic Config object
config = context.config

# Interpret the config file for Python logging
if config.config_file_name is not None:
    fileConfig(config.config_file_name)

# Set your metadata for autogenerate support
target_metadata = BaseModel.metadata

# Get database URL from environment
from app.core.config import settings

connection_url = (
    f"postgresql://{settings.POSTGRES_USER}:{settings.POSTGRES_PASSWORD}"
    f"@{settings.POSTGRES_HOST}:{settings.POSTGRES_PORT}/{settings.POSTGRES_DB}"
)

config.set_main_option("sqlalchemy.url", connection_url)


def run_migrations_offline() -> None:
    """Run migrations in 'offline' mode."""
    url = config.get_main_option("sqlalchemy.url")
    context.configure(
        url=url,
        target_metadata=target_metadata,
        literal_binds=True,
        dialect_opts={"paramstyle": "named"},
    )

    with context.begin_transaction():
        context.run_migrations()


def run_migrations_online() -> None:
    """Run migrations in 'online' mode."""
    connectable = engine_from_config(
        config.get_section(config.config_ini_section, {}),
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
    )

    with connectable.connect() as connection:
        context.configure(connection=connection, target_metadata=target_metadata)

        with context.begin_transaction():
            context.run_migrations()


if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()
```

### 3. Create Initial Migration

```bash
# Generate migration from current models
alembic revision --autogenerate -m "initial schema"

# Review the generated migration in alembic/versions/
# Then apply it:
alembic upgrade head
```

### 4. Update database.py

Replace the auto-create line:

```python
# OLD: app/services/database.py line 58
SQLModel.metadata.create_all(self.engine)

# NEW:
# Remove the auto-create - rely on Alembic migrations instead
# Tables will be created/updated via: alembic upgrade head
```

### 5. Add to Docker Entrypoint

Update your Docker entrypoint script to run migrations on startup:

```dockerfile
# In your Dockerfile or entrypoint script
CMD alembic upgrade head && uvicorn app.main:app --host 0.0.0.0 --port 8000
```

Or create `scripts/docker-entrypoint.sh`:

```bash
#!/bin/bash
set -e

# Run database migrations
alembic upgrade head

# Start the application
exec uvicorn app.main:app --host 0.0.0.0 --port 8000
```

## Usage

### Create a New Migration

When you change models:

```bash
# Auto-generate migration
alembic revision --autogenerate -m "add new column"

# Review the migration file in alembic/versions/

# Apply it
alembic upgrade head
```

### Other Useful Commands

```bash
# Check current version
alembic current

# See migration history
alembic history

# Rollback one migration
alembic downgrade -1

# Rollback to specific version
alembic downgrade <revision>

# Upgrade to specific version
alembic upgrade <revision>
```

## Only set up Alembic if

- You need to track schema changes over time
- You're working in a team and need reproducible migrations
- You need to support rollbacks
- You're deploying to production and want migration control

For development and small projects, SQLModel's auto-create is perfectly fine

## Links

[Enhance Your Flask Web Project With a Database – Real Python](https://realpython.com/flask-by-example-part-2-postgres-sqlalchemy-and-alembic)
