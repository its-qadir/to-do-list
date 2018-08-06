(function() {
    
    var ListController = function ($scope) {
         //A model holding tasks
     
      $scope.taskList = [{task: '1 task', id: 1}, {task: '2 task', id: 2}];

    //Function for adding task to the task list
      $scope.addTask = function(task) {
        
        //I'm pushing a new task to the task list
        $scope.taskList.push({
          done: false,
          task: task
        });
      };

      //Function for adding task to the task list
      $scope.deleteTask = function(task,id) {
        
        //I'm pushing a new task to the task list
        $scope.taskList.pop();
      };
    };
    
    
    ListController.$inject = ['$scope'];

    angular.module('toDoListApp')
      .controller('ListController', ListController);
    
}());