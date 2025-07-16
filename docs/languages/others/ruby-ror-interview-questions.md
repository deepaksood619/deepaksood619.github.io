# Ruby / RoR - Interview Questions

### 1. What is the difference between `includes`, `joins`, and `preload` in Rails ActiveRecord?

- `includes`: Eager loads associated records to avoid N+1 queries (uses `LEFT OUTER JOIN` or separate queries).
- `joins`: Performs SQL `INNER JOIN` but does not load associated data—useful for filtering.
- `preload`: Like `includes`, but always uses separate queries instead of joins.

Use `includes` when you want eager loading **and** potential filtering; use `preload` when you're sure filtering won't occur.

### 2. How does Rails manage database transactions, and how can you use them effectively?

Rails provides `ActiveRecord::Base.transaction` to wrap operations in a DB transaction. If an exception occurs, changes are rolled back.

```ruby
ActiveRecord::Base.transaction do
  user.save!
  order.save!
end
```

Use this to ensure **atomicity**—either all operations succeed, or none do.

### 3. Explain how Rails handles background jobs. What tools have you used?

Rails 5+ includes `ActiveJob`, an abstraction over background job frameworks. Common adapters: **Sidekiq**, **Resque**, **DelayedJob**.

Example with Sidekiq:

```ruby
class HardWorker
  include Sidekiq::Worker
  def perform(user_id)
    UserMailer.welcome_email(User.find(user_id)).deliver_now
  end
end
```

Use background jobs for **asynchronous**, **non-blocking** tasks—emailing, API calls, data processing.

### 4. What is a concern in Rails, and when should you use it?

A concern is a module used to share reusable code across models/controllers without inheritance.

```ruby
# app/models/concerns/trackable.rb
module Trackable
  extend ActiveSupport::Concern

  included do
    has_many :activities
  end
end
```

Use concerns to **extract logic** that cuts across models—avoid fat models/controllers.

### 5. How do you optimize performance in large Rails applications?

- Eager load associations to avoid N+1
- Use pagination (`kaminari`, `pagy`)
- Memoization (`@memoized ||= value`)
- Caching: fragment, Russian-doll, low-level
- Avoid unnecessary callbacks and validations
- Use indexes on DB columns
- Avoid heavy queries in views

### 6. What are service objects in Rails, and why would you use them?

Service objects encapsulate business logic outside controllers/models.

```ruby
class InvoiceGenerator
  def initialize(user)
    @user = user
  end

  def call
    Invoice.create(user: @user, total: calculate_total)
  end
end
```

Use them for **complex operations**, **fat controller/model avoidance**, and **testing isolation**.

### 7. What’s the difference between `before_save` and `before_create` callbacks?

- `before_save`: Runs on both `create` and `update`
- `before_create`: Runs **only** on `create`

Use `before_create` when logic should **not run during update**, e.g., setting UUIDs or default roles.

### 8. What is strong parameters and why is it important?

Strong parameters (`params.require(...).permit(...)`) protect against mass assignment vulnerabilities.

`params.require(:user).permit(:email, :name)`

Without it, malicious users could update protected attributes like `admin: true`.

### 9. How do you handle multi-environment secrets securely in Rails?

Use Rails credentials (`config/credentials.yml.enc`) or ENV variables with gems like `dotenv`.

For multiple environments:

`EDITOR="vim" bin/rails credentials:edit --environment production`

Avoid committing secrets to git. Use environment-based credential stores for CI/CD.

### 10. Explain the asset pipeline and how it works in Rails.

The asset pipeline:

- Combines and minifies assets
- Uses fingerprinting for cache-busting
- Allows use of preprocessors (Sass, CoffeeScript)
- Manifest file controls what gets compiled

Path: `app/assets`, `lib/assets`, `vendor/assets`

In Rails 7, asset management shifted toward **import maps**, **ESBuild**, or **Webpacker**.
