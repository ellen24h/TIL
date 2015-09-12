# AngularJS

###Directives

Here's an AngularJS app for a mobile app store:

- In the controller MainController.js, there are three objects $scope.move, $scope.shutterbugg, and $scope.gameboard that each contain info about an app, like its title and price.
- In the view index.html in the .main section, each app is displayed inside a .card div.

But looking at the view, the same code is written over and over again to display each app. This is repetitive and error-prone. Let's fix this.

What did we just do? We wrote code to teach the browser a new HTML element <app-info>, and used it in the view to display each app's details.

First in js/directives/appInfo.js, we made a new directive. We used app.directive to create a new directive named 'appInfo'. It returns an object with three options:

1. restrict specifies how the directive will be used in the view. The 'E' means it will be used as a new HTML element.

2. scope specifies that we will pass information into this directive through an attribute named info. The = tells the directive to look for an attribute named info in the <app-info> element, like this:

	 <app-info info="shutterbugg"></app-info>

The data in info becomes available to use in the template given by templateURL.

3. templateUrl specifies the HTML to use in order to display the data in scope.info. Here we use the HTML in js/directives/appInfo.html.

Looking at js/directives/appInfo.html, we define the HTML to display details about an app, like its title and price. We use expressions and filters to display the data.

Then in index.html we use the new directive as the HTML element <app-info>. We pass in objects from the controller's scope ($scope.shutterbugg) into the <app-info> element's info attribute so that it displays.

Why is creating your own directives useful?

`Readability` Directives let you write expressive HTML. Looking at `index.html` you can understand the app's behavior just by reading the HTML.

`Reusability` Directives let you create self-contained units of functionality. We could easily plug in this directive into another AngularJS app and avoid writing a lot of repetitive HTML.

We know that AngularJS comes with a few built-in directives like `ng-repeat` and `ng-click`.

We've seen that AngularJS makes it possible to create your own custom directives, such as `<app-info>`.

We can use Angular's built-in directives together with custom directives to create more readable apps.

For reference, here's how to use `ng-repeat`:

	<div ng-repeat="product in products">
	  <img ng-src="{{ product.cover }}">
	  <p class="title">{{ product.name }}</p>
	</div>

Directives are a core feature of AngularJS. So far we've used custom directives to simply display static content, but they can do more than this. It's possible to bake interactivity into directives.

Let's start creating another directive that reacts to a user's click.

	app.directive('installApp', function() { 
	  return { 
	    restrict: 'E', 
	    scope: {
	    }, 
	    templateUrl: 'js/directives/installApp.html' 
	  }; 
	});

We used app.directive to create a new directive named 'installApp'.

- The directive contains the three options restrict, scope, and templateUrl that we saw before in the 'appInfo' directive.
- It also contains a fourth option link. The link is used to create interactive directives that respond to user actions.

The link function takes three inputs:

1. `scope` refers to the directive's scope. Any new properties attached to `$scope` will become available to use in the directive's template.
2. `element` refers to the directive's HTML element.
3. `attrs` contains the element's attributes.

Inside the `link` function, there are two properties `buttonText` and `installed`, and the function `download()`. We'll use these in the directive's template next.

The template uses Angular's built-in ng-click directive. When the button is clicked, ng-click will tell AngularJS to run the download() function in the directive.

The download() function uses the scope.installed property to check if an app is installed. When an app is installed, download() does three things:

- toggles the .btn-active class
- changes the button text to "Uninstall"
- changes scope.installed to true

Well done! An "Install" button now shows up under each app. When you click the button, it changes to an "Uninstall" button. When you click it again, it changes back to an "Install" button.

What can we generalize so far?

- Directives are a powerful way to create self-contained, interactive components. Unlike jQuery which adds interactivity as a layer on top of HTML, AngularJS treats interactivity as a native component of HTML.