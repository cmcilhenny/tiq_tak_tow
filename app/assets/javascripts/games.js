GameController = function($scope) {
	$scope.hello = "hello";

	$scope.turn = "X";

	$scope.message = "Your turn X!";

	$scope.cellData = [ [null,null,null],
											[null,null,null],
											[null,null,null]];

	$scope.cellClick = function(row,column) {
		if($scope.cellData[row][column] != null) {
			$scope.message = "That cell is already taken. Pick another.";
			return;
		}
		$scope.cellData[row][column] = $scope.turn;
		if ($scope.checkWinner() === true) {
			return;
		}
		$scope.nextTurn();
		$scope.message = "Your turn "+$scope.turn+"!";
	}

	$scope.nextTurn = function() {
		if($scope.turn === "X") {
			$scope.turn = "O";
		}
		else {
			$scope.turn = "X";
		}
	}

	$scope.checkWinner = function() {
		for (i =0; i < 3; i++) {
			if ($scope.cellData[0][i] === $scope.cellData[1][i] && $scope.cellData[1][i] === $scope.cellData[2][i] && $scope.cellData[0][i] != null) {
				$scope.message = "You won " + $scope.turn + "!"
				return true;
			}
			if ($scope.cellData[i][0] === $scope.cellData[i][1] && $scope.cellData[i][1] === $scope.cellData[i][2] && $scope.cellData[i][0] != null) {
				$scope.message = "You won " + $scope.turn + "!"
				return true;
			}	
		}
		if ($scope.cellData[0][0] === $scope.cellData[1][1] && $scope.cellData[1][1] === $scope.cellData[2][2] && $scope.cellData[0][0] != null) {
			$scope.message = "You won " + $scope.turn + "!"
				return true;
		}
		if ($scope.cellData[0][2] === $scope.cellData[1][1] && $scope.cellData[1][1] === $scope.cellData[2][0] && $scope.cellData[2][0] != null) {
			$scope.message = "You won " + $scope.turn + "!"
				return true;
		}
		return false;
	}

	$scope.newGame = function() {
		$scope.nextTurn();
		$scope.cellData = [ [null,null,null],
											[null,null,null],
											[null,null,null]];
		$scope.message = "Your turn " + $scope.turn + "!";
	}
	
}

// TO DO:
// 1) Implement checkForWinner
// 2) Implement button and function to start new game