angular.module('dwikiApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/404.html',
    "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "  <head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <title>Page Not Found :(</title>\n" +
    "    <style>\n" +
    "      ::-moz-selection {\n" +
    "        background: #b3d4fc;\n" +
    "        text-shadow: none;\n" +
    "      }\n" +
    "\n" +
    "      ::selection {\n" +
    "        background: #b3d4fc;\n" +
    "        text-shadow: none;\n" +
    "      }\n" +
    "\n" +
    "      html {\n" +
    "        padding: 30px 10px;\n" +
    "        font-size: 20px;\n" +
    "        line-height: 1.4;\n" +
    "        color: #737373;\n" +
    "        background: #f0f0f0;\n" +
    "        -webkit-text-size-adjust: 100%;\n" +
    "        -ms-text-size-adjust: 100%;\n" +
    "      }\n" +
    "\n" +
    "      html,\n" +
    "      input {\n" +
    "        font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n" +
    "      }\n" +
    "\n" +
    "      body {\n" +
    "        max-width: 500px;\n" +
    "        _width: 500px;\n" +
    "        padding: 30px 20px 50px;\n" +
    "        border: 1px solid #b3b3b3;\n" +
    "        border-radius: 4px;\n" +
    "        margin: 0 auto;\n" +
    "        box-shadow: 0 1px 10px #a7a7a7, inset 0 1px 0 #fff;\n" +
    "        background: #fcfcfc;\n" +
    "      }\n" +
    "\n" +
    "      h1 {\n" +
    "        margin: 0 10px;\n" +
    "        font-size: 50px;\n" +
    "        text-align: center;\n" +
    "      }\n" +
    "\n" +
    "      h1 span {\n" +
    "        color: #bbb;\n" +
    "      }\n" +
    "\n" +
    "      h3 {\n" +
    "        margin: 1.5em 0 0.5em;\n" +
    "      }\n" +
    "\n" +
    "      p {\n" +
    "        margin: 1em 0;\n" +
    "      }\n" +
    "\n" +
    "      ul {\n" +
    "        padding: 0 0 0 40px;\n" +
    "        margin: 1em 0;\n" +
    "      }\n" +
    "\n" +
    "      .container {\n" +
    "        max-width: 380px;\n" +
    "        _width: 380px;\n" +
    "        margin: 0 auto;\n" +
    "      }\n" +
    "\n" +
    "      /* google search */\n" +
    "\n" +
    "      #goog-fixurl ul {\n" +
    "        list-style: none;\n" +
    "        padding: 0;\n" +
    "        margin: 0;\n" +
    "      }\n" +
    "\n" +
    "      #goog-fixurl form {\n" +
    "        margin: 0;\n" +
    "      }\n" +
    "\n" +
    "      #goog-wm-qt,\n" +
    "      #goog-wm-sb {\n" +
    "        border: 1px solid #bbb;\n" +
    "        font-size: 16px;\n" +
    "        line-height: normal;\n" +
    "        vertical-align: top;\n" +
    "        color: #444;\n" +
    "        border-radius: 2px;\n" +
    "      }\n" +
    "\n" +
    "      #goog-wm-qt {\n" +
    "        width: 220px;\n" +
    "        height: 20px;\n" +
    "        padding: 5px;\n" +
    "        margin: 5px 10px 0 0;\n" +
    "        box-shadow: inset 0 1px 1px #ccc;\n" +
    "      }\n" +
    "\n" +
    "      #goog-wm-sb {\n" +
    "        display: inline-block;\n" +
    "        height: 32px;\n" +
    "        padding: 0 10px;\n" +
    "        margin: 5px 0 0;\n" +
    "        white-space: nowrap;\n" +
    "        cursor: pointer;\n" +
    "        background-color: #f5f5f5;\n" +
    "        background-image: -webkit-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n" +
    "        background-image: -moz-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n" +
    "        background-image: -ms-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n" +
    "        background-image: -o-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n" +
    "        -webkit-appearance: none;\n" +
    "        -moz-appearance: none;\n" +
    "        appearance: none;\n" +
    "        *overflow: visible;\n" +
    "        *display: inline;\n" +
    "        *zoom: 1;\n" +
    "      }\n" +
    "\n" +
    "      #goog-wm-sb:hover,\n" +
    "      #goog-wm-sb:focus {\n" +
    "        border-color: #aaa;\n" +
    "        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n" +
    "        background-color: #f8f8f8;\n" +
    "      }\n" +
    "\n" +
    "      #goog-wm-qt:hover,\n" +
    "      #goog-wm-qt:focus {\n" +
    "        border-color: #105cb6;\n" +
    "        outline: 0;\n" +
    "        color: #222;\n" +
    "      }\n" +
    "\n" +
    "      input::-moz-focus-inner {\n" +
    "        padding: 0;\n" +
    "        border: 0;\n" +
    "      }\n" +
    "    </style>\n" +
    "  </head>\n" +
    "  <body>\n" +
    "    <div class=\"container\">\n" +
    "      <h1>Not found <span>:(</span></h1>\n" +
    "      <p>Sorry, but the page you were trying to view does not exist.</p>\n" +
    "      <p>It looks like this was the result of either:</p>\n" +
    "      <ul>\n" +
    "        <li>a mistyped address</li>\n" +
    "        <li>an out-of-date link</li>\n" +
    "      </ul>\n" +
    "      <script>\n" +
    "        var GOOG_FIXURL_LANG = (navigator.language || '').slice(0,2),GOOG_FIXURL_SITE = location.host;\n" +
    "      </script>\n" +
    "      <script src=\"//linkhelp.clients.google.com/tbproxy/lh/wm/fixurl.js\"></script>\n" +
    "    </div>\n" +
    "  </body>\n" +
    "</html>\n"
  );


  $templateCache.put('views/index.html',
    "<!doctype html>\n" +
    "<!--[if lt IE 7]>      <html class=\"no-js lt-ie9 lt-ie8 lt-ie7\"> <![endif]-->\n" +
    "<!--[if IE 7]>         <html class=\"no-js lt-ie9 lt-ie8\"> <![endif]-->\n" +
    "<!--[if IE 8]>         <html class=\"no-js lt-ie9\"> <![endif]-->\n" +
    "<!--[if gt IE 8]><!-->\n" +
    "<html class=\"no-js\">\n" +
    "<!--<![endif]-->\n" +
    "\n" +
    "<head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
    "    <base href=\"/\">\n" +
    "    <title>DEV -- 德佑地产</title>\n" +
    "    <meta name=\"description\" content=\"\">\n" +
    "    <meta name=\"viewport\" content=\"width=device-width\">\n" +
    "    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->\n" +
    "    <!-- build:css(app) styles/vendor.css -->\n" +
    "    <!-- bower:css -->\n" +
    "    <!-- endbower -->\n" +
    "    <!-- endbuild -->\n" +
    "    <!-- build:css({.tmp,app}) styles/main.css -->\n" +
    "    <link rel=\"stylesheet\" href=\"vendor/bootstrap/assets/stylesheets/bootstrap.css\"/>\n" +
    "    <link rel=\"stylesheet\" href=\"vendor/simditor-1.0.5/styles/simditor.css\">\n" +
    "    <link rel=\"stylesheet\" href=\"vendor/simditor-1.0.5/styles/font-awesome.css\">\n" +
    "    <link rel=\"stylesheet\" href=\"dist/app.css\">\n" +
    "    <link rel=\"stylesheet\" href=\"dist/tomorrow.css\">\n" +
    "    <link rel=\"stylesheet\" href=\"vendor/default.min.css\">\n" +
    "    <!-- endbuild -->\n" +
    "</head>\n" +
    "\n" +
    "<body ng-app=\"dwikiApp\">\n" +
    "    <!--[if lt IE 7]>\n" +
    "      <p class=\"browsehappy\">You are using an <strong>outdated</strong> browser. Please <a href=\"http://browsehappy.com/\">upgrade your browser</a> to improve your experience.</p>\n" +
    "    <![endif]-->\n" +
    "\n" +
    "    <!-- Add your site or application content here -->\n" +
    "    <ng-view></ng-view>\n" +
    "\n" +
    "    <!--[if lt IE 9]>\n" +
    "    <script src=\"bower_components/es5-shim/es5-shim.js\"></script>\n" +
    "    <script src=\"bower_components/json3/lib/json3.min.js\"></script>\n" +
    "    <![endif]-->\n" +
    "\n" +
    "    <!-- build:js(app) scripts/vendor.js -->\n" +
    "    <!-- bower:js -->\n" +
    "    <script src=\"vendor/jquery/dist/jquery.js\"></script>\n" +
    "    <script src=\"bower_components/angular/angular.js\"></script>\n" +
    "    <script src=\"bower_components/angular-resource/angular-resource.js\"></script>\n" +
    "    <script src=\"bower_components/angular-cookies/angular-cookies.js\"></script>\n" +
    "    <script src=\"bower_components/angular-sanitize/angular-sanitize.js\"></script>\n" +
    "    <script src=\"bower_components/angular-route/angular-route.js\"></script>\n" +
    "    <script src=\"bower_components/angular-bootstrap/ui-bootstrap.js\"></script>\n" +
    "    <!-- endbower -->\n" +
    "    <script src=\"vendor/simditor-1.0.5/scripts/js/simditor-all.js\"></script>\n" +
    "    <script src=\"vendor/simditor-markdown.js\"></script>\n" +
    "    <script src=\"vendor/highlight.min.js\"></script>\n" +
    "    <script src=\"vendor/marked.js\"></script>\n" +
    "\n" +
    "    <script src=\"vendor/toc.js\"></script>\n" +
    "    <!--<script src=\"/socket.io/socket.io.js\"></script>-->\n" +
    "\n" +
    "    <!-- endbuild -->\n" +
    "\n" +
    "    <!-- build:js({.tmp,app}) scripts/scripts.js -->\n" +
    "    <script src=\"scripts/app.js\"></script>\n" +
    "\n" +
    "    <script src=\"scripts/controllers/main.js\"></script>\n" +
    "    <script src=\"scripts/controllers/navbar.js\"></script>\n" +
    "    <script src=\"scripts/controllers/login.js\"></script>\n" +
    "    <script src=\"scripts/controllers/signup.js\"></script>\n" +
    "    <script src=\"scripts/controllers/settings.js\"></script>\n" +
    "    <script src=\"scripts/controllers/article.js\"></script>\n" +
    "    <script src=\"scripts/controllers/people.js\"></script>\n" +
    "    <script src=\"scripts/controllers/category.js\"></script>\n" +
    "    <script src=\"scripts/controllers/new.js\"></script>\n" +
    "    <script src=\"scripts/controllers/edit.js\"></script>\n" +
    "    <script src=\"scripts/controllers/doc.js\"></script>\n" +
    "    <script src=\"scripts/controllers/dui.js\"></script>\n" +
    "    <script src=\"scripts/controllers/search.js\"></script>\n" +
    "\n" +
    "    <script src=\"scripts/services/auth.js\"></script>\n" +
    "    <script src=\"scripts/services/session.js\"></script>\n" +
    "    <script src=\"scripts/services/user.js\"></script>\n" +
    "\n" +
    "    <script src=\"scripts/directives/pagination.js\"></script>\n" +
    "    <script src=\"scripts/directives/dropdown.js\"></script>\n" +
    "    <script src=\"scripts/directives/demoshow.js\"></script>\n" +
    "    <script src=\"scripts/directives/mongooseError.js\"></script>\n" +
    "\n" +
    "    <script src=\"scripts/filters/catename.js\"></script>\n" +
    "    <script src=\"scripts/filters/surfix.js\"></script>\n" +
    "    <!-- endbuild -->\n" +
    "</body>\n" +
    "\n" +
    "</html>\n"
  );

}]);
