# NEWS DOCS

### Setup

##### Prerequisites

Install [polymer-cli](https://github.com/Polymer/polymer-cli):

    npm install -g polymer-cli


##### Setup

    git clone https://github.com/polymer/news-docs.git
    cd news-docs
    npm install
    bower install

### Running the site

Run gulp to convert markdown files to html:

    gulp

Then start the development server:

    polymer serve

All the markdown files are in `docs/` folder.  If you make any changes to `docs/*.md` you have to run `gulp` again to generate the pages.

### Build

    polymer build

### Test the build

This command serves the minified version of the app in an unbundled state, as it would be served by a push-compatible server:

    polymer serve build/unbundled

This command serves the minified version of the app generated using fragment bundling:

    polymer serve build/bundled

### Deploy to Google App Engine

Install [Google App Engine SDK](https://cloud.google.com/appengine/downloads)

#### Test locally

    dev_appserver.py build/bundled

#### Deploy

    gcloud app deploy build/bundled/app.yaml --project [YOUR_PROJECT_ID]
