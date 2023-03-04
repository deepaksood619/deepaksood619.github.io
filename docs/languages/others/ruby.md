# Ruby

## Gems

A gem is code you can include in Ruby projects. It allows you to package up functionality and share it across other projects or with other people. Gems can perform functionality such as:

- Converting a Ruby object to JSON
- Pagination
- Interacting with APIs such as GitHub
- Jekyll itself is a gem as well as many Jekyll plugins including [jekyll-feed](https://github.com/jekyll/jekyll-feed), [jekyll-seo-tag](https://github.com/jekyll/jekyll-seo-tag) and [jekyll-archives](https://github.com/jekyll/jekyll-archives).

## Gemfile

A Gemfile is a list of gems required for your site. For a simple Jekyll site it might look something like this:

```bash
source "<https://rubygems.org>"

gem "jekyll"

group :jekyll_plugins do
gem "jekyll-feed"
gem "jekyll-seo-tag"
end
```

## Bundler

Bundler installs the gems in yourGemfile. It's not a requirement for you to use aGemfileandbundlerhowever it's highly recommended as it ensures you're running the same version of Jekyll and Jekyll plugins across different environments.

gem install bundler installs [Bundler](https://rubygems.org/gems/bundler). You only need to install it once - not every time you create a new Jekyll project. Here are some additional details:

If you're using aGemfileyou would first runbundle installto install the gems, thenbundle exec jekyll serveto build your site. This guarantees you're using the gem versions set in theGemfile. If you're not using a Gemfile you can just run jekyll serve.

```bash
# https://jekyllrb.com/tutorials/using-jekyll-with-bundler/
mkdir my-jekyll-website
cd my-jekyll-website
bundle init

bundle add jekyll

bundle exec jekyll new --force --skip-bundle .
bundle install

bundle exec jekyll serve

bundle exec jekyll serve --host 0.0.0.0 --port 8000 --incremental

```

<https://jekyllrb.com/docs/ruby-101>

## Quickstart

`irb - Interactive ruby`

### Commands

```ruby
irb(main):001:0> puts "Hello World"

def hi(name)
puts "Hello #{name}!"
end

hi("deepak")

test.rb |-
#!/usr/bin/env ruby
class MegaGreeter
attr_accessor :names
# Create the object
  def initialize(names = "World")
    @names = names
  end
  # Say hi to everybody
  def say_hi
    if @names.nil?
      puts "..."
    elsif @names.respond_to?("each")
      # @names is a list of some kind, iterate!
      @names.each do |name|
        puts "Hello #{name}!"
      end
    else
      puts "Hello #{@names}!"
    end
  end
  # Say bye to everybody
  def say_bye
    if @names.nil?
      puts "..."
    elsif @names.respond_to?("join")
      # Join the list elements with commas
      puts "Goodbye #{@names.join(", ")}.  Come back soon!"
    else
      puts "Goodbye #{@names}.  Come back soon!"
    end
  end
end

if __FILE__ == $0
  mg = MegaGreeter.new
  mg.say_hi
  mg.say_bye
  # Change name to be "Zeke"
  mg.names = "Zeke"
  mg.say_hi
  mg.say_bye
  # Change the name to an array of names
  mg.names = ["Albert", "Brenda", "Charles",
              "Dave", "Engelbert"]
  mg.say_hi
  mg.say_bye
  # Change to nil
  mg.names = nil
  mg.say_hi
  mg.say_bye
end

# Run - ruby test.rb
```

<https://www.ruby-lang.org/en/documentation/quickstart>

## Frameworks

<https://www.toptal.com/ruby/ruby-pattern-matching-tutorial>

### Ruby on rails

<https://www.toptal.com/ruby-on-rails/ruby-on-rails-ecommerce-tutorial>

### Sinatra

Sinatra is a DSL for quickly creating web applications in Ruby with minimal effort
<http://sinatrarb.com>

### RefineryCMS

An open source content management system for Rails 5.1+
[http://refinerycms.com](http://refinerycms.com/)

### Solidus

A free, open-source ecommerce platform that gives you complete control over your store.
[https://solidus.io](https://solidus.io/)
<https://github.com/solidusio/solidus>
