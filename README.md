# README

## New projects
Clone the repo: `git clone git@github.com:crsrusl/dawn.git`

Install associated dependencies: `npm install`

## Creating pages and associated assets
To create a new page and its associated assets, execute the following command: `grunt create --name=page` (where _page_ is the name of the page you want to create).

## eDetail app.js
Dawn uses [Flexslider](http://www.woothemes.com/flexslider/) for its slider capabilities. All of flexsliders properties are made available through the global `eDetail` object. 

You can extend the `eDetail` object by adding to [Flexsliders callback API](http://www.woothemes.com/flexslider/). Your new capabilities will then be available through the `eDetail` object.