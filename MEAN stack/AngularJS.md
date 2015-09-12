AngularJS 공부하기


1. In app.js, we created a new module named MyApp. A module contains the different components of an AngularJS app.

2. Then, in index.html we added <body ng-app="myApp">. The ng-app is called a directive. It tells AngularJS that the MyApp module will live within the <body> element, termed the application's scope. In other words, we used the ng-app directive to define the application scope.

3. In MainController.js we created a new controller named MainController. A controller manages the app's data. Here we use the property title to store a string, and attach it to $scope.

4. Then, in index.html, we added <div class="main" ng-controller="MainController">. Like ng-app, ng-controller is a directive that defines the controller scope. This means that properties attached to $scope in MainController become available to use within <div class="main">.

5. Inside <div class="main"> we accessed $scope.title using {{ title }}. This is called an expression. Expressions are used to display values on the page.

6. The value of title showed up when we viewed the a6.pp in the browser.

So far this is our typical workflow when making an AngularJS app:

1. Create a module, and use ng-app in the view to define the application scope.

2. Create a controller, and use ng-controller in the view to define the controller scope.

3. Add data to $scope in the controller so they can be displayed with expressions in the view.

Well done! In the controller, you used an object to group together related data about a product. Then in the view, you used dot notation to display the values.

Great! The product price changed from a number to a formatted currency. How does it work?

1. AngularJS gets the value of product.price.

2. It sends this number into the currency filter. The pipe symbol (|) takes the output on the left and "pipes" it to the right.

3. The filter outputs a formatted currency with the dollar sign and the correct decimal places.

In this way, filters help to separate the content in the controller from its presentation in the view.