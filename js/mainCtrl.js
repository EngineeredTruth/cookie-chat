angular.module('chatroom')
.controller('mainCtrl', function($scope, messageService){

$scope.getMessages = function (){
  messageService.x().then(function(response){
    $scope.messages = response.data.chats;
  });
};

$scope.postMessage = function (message){
  messageService.postMessage(message);
};

$scope.cookieCount = function (){
  messageService.getCoookie().then(function(response){
    $scope.cookie = response.data.cookies['Tasty Macaroon Cookie'];
  });
};

$scope.addCookie = function() {
  messageService.postCookie();
}

  setInterval(function(){
    $scope.getMessages();
    $scope.cookieCount();
    console.log($scope.cookie);
  }, 2000);
});
