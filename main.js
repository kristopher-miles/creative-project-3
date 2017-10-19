(function() {
    var app = angular.module('main', []);
    app.controller('GameController',[
        '$scope',
        function($scope) {
           $scope.data=gameData;
            $scope.buyMouse = function(){
            console.log("entered function to buy a mouse.");
            if($scope.data.candy>=$scope.data.mousePrice){
                $scope.data.candy-=$scope.data.mousePrice;
                $scope.data.mice++;
                $scope.data.mousePrice+= $scope.data.mousePrice*.25;
                $scope.data.candyPerSecond+= $scope.data.mouseCandy;
                $scope.data.score+=$scope.data.mousePrice;
            }
            else{
                cantAfford();
            }
            };
            $scope.buyKid = function(){
            console.log("entered function to buy a kid.");
            if($scope.data.candy>=$scope.data.kidPrice){
                $scope.data.candy-=$scope.data.kidPrice;
                $scope.data.kids++;
                $scope.data.kidPrice+= $scope.data.kidPrice*.45;
                $scope.data.candyPerSecond+= $scope.data.kidCandy;
                $scope.data.score+=$scope.data.kidPrice;
            }
            else{
                cantAfford();
            }
            };
            $scope.buyVoid = function(){
            console.log("entered function to buy a void.");
            if($scope.data.candy>=$scope.data.voidPrice){
                $scope.data.candy-=$scope.data.voidPrice;
                $scope.data.voids++;
                $scope.data.voidPrice+= $scope.data.voidPrice*.8;
                $scope.data.candyPerSecond+= $scope.data.voidCandy;
                $scope.data.score+=$scope.data.voidPrice;
            }
            else{
                cantAfford();
            }
            };
            
            $scope.addCandy=function(amount){
              $scope.data.candy+=amount;
                $scope.data.score+=(amount*.5);
                $scope.$apply();
            };
            
            $scope.cheatCandy=function(){
                $scope.addCandy(100);
                $scope.data.score-= 1050;
            }
            
            $scope.clickCandy= function(){
              $scope.addCandy(1);  
            };
            
            $scope.earnCandy=function(){
                $scope.addCandy($scope.data.candyPerSecond*.25);
                
            }
        
        var cantAfford=function(){
            alert("You can't afford to buy this!");
        };
            
        setInterval(function(){
            $scope.earnCandy();
        }, 250);
        
        
    }]);

    var gameData={        
        candy:0,
        candyPerSecond:0.0,
        kids:0,
        voids:0,
        mice:0,
        mousePrice:10,
        kidPrice:500,
        voidPrice:10000,
        totalCandyMade:0.0,
        score:0.0,
        mouseCandy:.25,
        kidCandy:10,
        voidCandy:100
        };
})();