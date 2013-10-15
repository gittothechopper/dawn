# Dawn.
###A frontend development framework for creating eDetails. 


Featuring handlebars templating, automatic offline app generation, css preprocessor support, html/css/js tidying, automatic scaffolding of javascript/css/html via commandline and more.

----

### Start here.
Clone the repo: `git clone git@github.com:crsrusl/dawn.git`

Install associated dependencies: `npm install`

---

### Creating a page.
To create a new page and its associated assets, execute the following command: 

`grunt create --name=page`* 

*where _page_ is the name of the page you want to create.

---

### Going offline.
To create an offline version of your application, execute the following command:

`grunt offline`

Dawn will create a chache manifest and attach the manifest link to your HTML pages.

---

### The app.js
Dawn uses [Flexslider](http://www.woothemes.com/flexslider/) for its slider capabilities. All of flexsliders properties are made available through the global `eDetail` object. 

You can extend the `eDetail` object by adding to [Flexsliders callback API](http://www.woothemes.com/flexslider/). Your new capabilities will then be available through the `eDetail` object.

---