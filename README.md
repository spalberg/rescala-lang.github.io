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
`manual/index.md` generates `manual/index.html`. The `html` is optional when
accessing the pages, and `index.html` will be displayed when the folder is requested,
i.e., `manual/` will display the contents of `manual/index.html`.

Only files that contain a header separated with `---` are processed, the rest
is published as is.

### Gotaches with hyperlinks in local vs. deployed documents

Note that the site deployed on GH Pages will add an additional `REScala` as
part of the URL, e.g., `manual/` becomes `REScala/manual`. As such it is
necesseray to only use relative links when linking to other pages, to make
both local and deployed pages work.

Also note that there is a difference between a folder `manual/` and a file
`manual`, if the file version is requested by the web browser, the server will
serve the folder version (or more specifically `manual/index.html`), but if
the folder is requested any potential existing file is ignored.

## Navigation at the top

Each processed markdown file has a header separated with `---` which specifies
the title of the pages, as well as the order in which that page is displayed
in the navigation menu at the top of the page.

Some additional navigation elements are defined directly in `_includes/navbar.html`.


## TODOs

- Remove the ECOOP banner
- Add all recent publications, e.g., <Programming> publications and OOPSLA publications.

- Some pages have a strange empy margin on the left, for example compare:
http://guidosalva.github.io/REScala/projects/
and 
http://guidosalva.github.io/REScala/publications.html

- How can useres access features associated to certain papers?
For example, let's say I want to play with the fault tolerant stuff.
Where do I start? Is there a code example?
Same for the concurrency stuff.

- Add a page with third party users?



