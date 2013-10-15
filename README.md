# Dawn.
###A frontend development framework for creating eDetails. 


Featuring handlebars templating, automatic offline app generation, css preprocessor support, html/css/js tidying, automatic scaffolding of javascript/css/html via commandline, image and css compression and more.

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

Dawn will build your project out to the 'app' folder and remove any development specific code. This process also includes image and css compression.

----

### The app.js
Dawn uses [Flexslider](http://www.woothemes.com/flexslider/) for its slider capabilities. All of flexsliders properties are made available through the global `eDetail` object. 

You can extend the `eDetail` object by adding to [Flexsliders callback API](http://www.woothemes.com/flexslider/). Your new capabilities will then be available through the `eDetail` object.

----