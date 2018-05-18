# Contributing

This branch/folder contains the sources of the REScala website:
[www.rescala-lang.com](http://www.rescala-lang.com/)

Sources in this folder are converted automatically on the server side to web
pages, by [Github Pages](https://pages.github.com/).

## Editing and Deploying Pages

The processing tool used by Github Pages is [Jekyll](https://jekyllrb.com/) which
converts each markdown (.md) file in this directory structure to HTML pages
using the template in `_layouts/default.html`. Deployment of the website
happens automatically when new content is pushed to this branch (may take a
couple of minutes to update).

A file called `contact.md` generates a `contact.html` and a file called
`manual/index.md` generates `manual.html`.

Only files that contain a header separated with `---` are processed, the rest
is published as is.


## Navigation at the top

Each processed markdown file has a header separated with `---` which specifies
the title of the pages, as well as the order in which that page is displayed
in the navigation menu at the top of the page.

Some additional navigation elements are defined directly in `_includes/navbar.html`.
