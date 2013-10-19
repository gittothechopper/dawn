# Dawn.
###A frontend development framework for creating eDetails. 


Featuring handlebars templating, automatic offline app generation, css preprocessor support, html/css/js tidying, automatic scaffolding of javascript/css/html via commandline, image, css, html and javascript compression and removal of unused assets.

----

### Start here.
Clone the repo: `git clone git@github.com:crsrusl/dawn.git`

Install associated dependencies: `npm install`

----

### Creating a page.
To create a new page and its associated assets, execute the following command: 

`grunt create --name=page`* 

*where _page_ is the name of the page you want to create.

----

### Build on the fly with Livereload.
To build projects on the fly along with livereload, execute the following command:

`grunt server`

---

### Validate your source.
To validate your source files, execute the following command (note: this will trigger a build)

`grunt validate`

---

### Going offline.
To create an offline version of your application, execute the following command:

`grunt offline`

Dawn will create a cache manifest and attach the manifest link to your HTML pages.

----

### Building your project.
To build your project, execute the following command:

`grunt build`

Dawn will build your project out to the 'app' folder and remove any development specific code. This process also includes image, css, html and javascript compression.

----

### Developer tools.
Dawn has developer tools built in. The developer tools are only available when in `grunt server` state. 

#### Tools available.

_Cursor pixel coordinates:_ Hold shift and click to console log out css coorindates relative to your cursor position. Very useful for targeting reference and overlay hit points. 

----

### Removing unused assets

Dawn will automatically remove assets not in use on your project. It searches HTML, CSS and Javascript for asset links, if it finds an asset which is not called upon, it will remove it.
----

### The app.js
Dawn uses [Flexslider](http://www.woothemes.com/flexslider/) for its slider capabilities. All of flexsliders properties are made available through the global `eDetail` object. 

You can extend the `eDetail` object by adding to [Flexsliders callback API](http://www.woothemes.com/flexslider/). Your new capabilities will then be available through the `eDetail` object.

----