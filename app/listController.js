(function() {
    
    var ListController = function ($scope) {
         //A model holding tasks
     
      $scope.taskList = [
            
          ];

    //Function for adding task to the task list
      $scope.addTask = function(task) {
        
        //I'm pushing a new task to the task list
          var randomId = Math.random();
              $scope.taskList.push({
          id: randomId,
          task: task
        });
      };

      //Function for adding task to the task list
      $scope.deleteTask = function(id) {
          
          for (var i=0,len=$scope.taskList.length;i<len;i++) {
                            if ($scope.taskList[i].id === id) {
                               $scope.taskList.splice(i,1);
                               break;
                            }
                        }  
        
        //I'm pushing a new task to the task list
       
      };
    };
    
    
    ListController.$inject = ['$scope'];

    angular.module('toDoListApp')
      .controller('ListController', ListController);
    
}());