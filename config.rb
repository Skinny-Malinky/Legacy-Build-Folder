###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

###
# Helpers
###

activate :blog do |blog|
  # This will add a prefix to all links, template references and source paths
  # blog.prefix = "blog"

  blog.permalink = "{permalink}"
  # Matcher for blog source files
  blog.sources = "posts/{year}/{title}.html"
  blog.taglink = "tags/{tag}.html"
  blog.layout = "post"
  # blog.summary_separator = /(READMORE)/
  # blog.summary_length = 250
  blog.year_link = "{year}.html"
  blog.month_link = "{month}/{year}.html"
  blog.day_link = "{day}/{month}/{year}.html"
  blog.default_extension = ".markdown.erb"

  blog.tag_template = "tag.html"
  blog.calendar_template = "calendar.html"

  # Enable pagination
  blog.paginate = true
  blog.per_page = 10
  blog.page_link = "page/{num}"
end

page "/feed.xml", layout: false

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
  config[:host] = "http://localhost:4567"
end

Time.zone = "London"

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

# Build-specific configuration

activate :directory_indexes
set :relative_links, false
activate :syntax, :line_numbers => true
set :markdown_engine, :redcarpet
set :markdown, :fenced_code_blocks => true, :smartypants => true
set :trailing_slash, false
# activate :asset_host, :host => 'http://struanfraser.co.uk'

configure :build do
  # Minify CSS on build
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript
  config[:host] = "https://struanfraser.co.uk"
end