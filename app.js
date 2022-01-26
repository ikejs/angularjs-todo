const todoApp = angular.module('todoApp', []);

todoApp.controller('TodoController', ($scope) => {
  $scope.todos = [
    { name: "Learn AngularJS", done: false },
    { name: "Build todo app", done: false }
  ];

  $scope.addTodo = () => {
    let { todos, inputValue } = $scope;
    todos.push({
      name: inputValue,
      done: false
    });
    $scope.inputValue = '';
  };

  $scope.change = () => {
    console.log($scope.todos);
  };
});
