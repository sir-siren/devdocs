// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
 */
//= require_tree ./vendor

//= require lib/license
//= require_tree ./lib

//= require app/app
//= require app/config
//= require_tree ./app

//= require collections/collection
//= require_tree ./collections

//= require models/model
//= require_tree ./models

//= require views/view
//= require_tree ./views

//= require_tree ./templates

//= require tracking

var init = function () {
  document.removeEventListener("DOMContentLoaded", init, false);

  if (document.body) {
    return app.init();
  } else {
    return setTimeout(init, 42);
  }
};

document.addEventListener("DOMContentLoaded", init, false);
