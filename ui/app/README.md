# Overview

<pre>
app/
├── README.md
|   This file
├── coffee/
|   The source for our AngularJS code; compiled to javascript in js/
├── css/
|   Styling for the website
├── img/
|   Images
├── index-async.html
|   Index with asynchronous javascript loading
├── index-async.html.template
|   Template for generating index-async.html
├── index.html
|   The main page for the app
├── js/
|   AngularJS javascript; compiled from coffee/
├── lib/
|   Included javascript libaries
└── partials/
    HTML templates
</pre>

(file tree generated with `tree -F -L 1`)

## Why coffeescript?
Mostly because of [literate coffeescript](http://coffeescript.org/#literate).
Rather than putting comments in the code,
we have a markdown document with code snippets,
which then compiles to pure javascript.
It promotes a documentation-first approach.

## TODO
- Investigate css frameworks, e.g. SCSS
