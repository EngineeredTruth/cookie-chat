angular.module('chatroom').service('messageService', function($http) {

    this.x = function() {
        return $http.get( "http://brackcarmony.com:8092/api/chats");
    };

    this.postMessage = function(x) {
        return $http({
            method: 'POST',
            url: "http://brackcarmony.com:8092/api/chats",
            data: {message: x}
        }, function errorCallback(response){
          console.log('This is an error: ' + response);
        });
    };

this.postCookie = function(){
  return $http({
    method: 'POST',
    url: 'http://brackcarmony.com:8092/api/cookies',
    data: {cookie: 10}
  });
};

this.getCoookie = function(){
  return $http({
    method: 'GET',
    url: 'http://brackcarmony.com:8092/api/cookies',
  });
};
});
