const todoApp = angular.module('todoApp', []);

todoApp.controller('TodoController', ($scope) => {
  $scope.todos = [
    { name: "Learn AngularJS", done: false },
    { name: "Build todo app", done: false }
  ];

  $scope.getTotalTodos = () => {
    const todosNotDone = 
      $scope.todos.filter((todo) => !todo.done);
    return todosNotDone.length;
  }

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
})

// .directive('todoHeader', () => {
//   return {
//     scope: {
//       testVar: 'test string',
//       templateUrl: 'templates/header.html'
//     }
//   }
// });
