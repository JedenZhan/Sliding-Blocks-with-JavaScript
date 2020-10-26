let score = 0;

function Game () {
	// dom
	// let不能重复定义
	// 游戏矩阵
	let gameData = [
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	];
	// 当前方块
	let cur;
	// 下一个方块
	let next;
	// divs
	let nextDivs = [];
	let gameDivs = [];

	// 初始化div
	function initDiv (container, data, divs) {
		for (let i = 0; i < data.length; i++) {
			let div = [];
			for (let j = 0; j < data[0].length; j++) {
				let newNode = document.createElement('div');
				newNode.className = 'none';
				newNode.style.top = (i * 20) + 'px';
				newNode.style.left = (j * 20) + 'px';
				container.appendChild(newNode);
				div.push(newNode);
			}
			divs.push(div)
		}
	}
	// 刷新页面
	function refreshDiv (data, divs) {
		for (let i = 0; i < data.length; i++) {
			for (let j = 0; j < data[0].length; j++) {
				if (data[i][j] == 0) {
					divs[i][j].className = 'none';
				} else if (data[i][j] == 1) {
					divs[i][j].className = 'done';
				} else if (data[i][j] == 2) {
					divs[i][j].className = 'current';
				}
			}
		}
	}

	// 初始化


	// 检测点是否合法
	let check = function (pos, x, y) {
		if (pos.x + x < 0) {
			return false;
		} else if (pos.x + x >= gameData.length) {
			return false;
		} else if (pos.y + y < 0) {
			return false;
		} else if (pos.y + y >= gameData[0].length) {
			return false;
		} else if (gameData[pos.x + x][pos.y + y] === 1) {
			return false;
		} else {
			return true;
		}
	}

	// 检测数据是否合法 
	let isValid = function (pos, data) {
		for (let i = 0; i < data.length; i++) {
			for (let j = 0; j < data[0].length; j++) {
				if (data[i][j] != 0) {
					if (!check(pos, i, j)) {
						return false;
					}
				}
			}
		}
		return true;
	}
	// 清除数据
	let clearData = function () {
		for (let i = 0; i < cur.data.length; i++) {
			for (let j = 0; j < cur.data[0].length; j++) {
				if (check(cur.origin, i, j)) {
					gameData[cur.origin.x + i][cur.origin.y + j] = 0;
				} else {
					continue;
				}
			}
		}
	}
	// 设置数据
	let setData = function () {
		for (let i = 0; i < cur.data.length; i++) {
			for (let j = 0; j < cur.data[0].length; j++) {
				if (check(cur.origin, i, j)) {
					gameData[cur.origin.x + i][cur.origin.y + j] = cur.data[i][j];
				} else {
					continue;
				}
			}
		}
	}
	// 方块左移
	let left = function () {
		if (cur.canLeft(isValid)) {
			clearData();
			cur.left();
			setData();
			refreshDiv(gameData, gameDivs);
		}
	}
	// 方块右移
	let right = function () {
		if (cur.canRight(isValid)) {
			clearData();
			cur.right();
			setData();
			refreshDiv(gameData, gameDivs);
		}
	}
	// 方块下降
	let down = function () {
		if (cur.canDown(isValid)) {
			clearData();
			cur.down();
			setData();
			refreshDiv(gameData, gameDivs);
			return true;
		} else {
			return false;
		}
	}
	// 方块旋转
	let rotate = function () {
		if (cur.canRotate(isValid)) {
			clearData();
			cur.rotate();
			setData();
			refreshDiv(gameData, gameDivs);
		}
	}

	let init = function (doms) {
		gameDiv = doms.gameDiv;
		nextDiv = doms.nextDiv;
		cur = SquareFactory.prototype.make(2, 2);
		next = SquareFactory.prototype.make(3, 2);
		initDiv(gameDiv, gameData, gameDivs);
		initDiv(nextDiv, next.data, nextDivs);
		setData();
		refreshDiv(gameData, gameDivs);
		refreshDiv(next.data, nextDivs);
	}
	// 固定方块
	let fixed = function () {
		for (let i = 0; i < cur.data.length; i ++) {
			for (let j = 0; j < cur.data[0].length; j ++) {
				if (check(cur.origin, i, j)) {
					if (gameData[cur.origin.x + i][cur.origin.y + j] == 2) {
						gameData[cur.origin.x + i][cur.origin.y + j] = 1;
					}
				}
			}
		}
		refreshDiv(gameData, gameDivs);
	}
	// 加载下一个方块以及生成下一个方块
	let performNext = function (type, dir) {
		cur = next;
		setData();
		next = SquareFactory.prototype.make(type, dir);
		refreshDiv(gameData, gameDivs);
		refreshDiv(next.data, nextDivs);
	}
	// 消除一行
	let checkClear = function () {
		for (var i = gameData.length - 1; i >= 0; i --) {
			var clear = true;
			for (var j = 0; j < gameData[0].length; j ++) {
				if (gameData[i][j] != 1) {
					clear = false;
					break;
				}
			}
			if (clear) {
				for (let m = i; m > 0; m --) {
					for (let n = 0; n < gameData[0].length; n ++) {
						gameData[m][n] = gameData[m - 1][n];
					}
				}
				for (let n = 0; n < gameData[0].length; n ++) {
					setTimeout(() => {
						gameData[0][n] = 0
					}, 1000)
				}
				i++;
				score++;
				document.getElementById('score').innerHTML = score;
			}
		}
	}
	// 游戏结束函数
	let checkGameOver = function () {
		let gameOver = false;

		for (let i = 0; i < gameData[0].length; i ++) {
			if (gameData[1][i] == 1) {
				gameOver = true;
				break;
			}
		}
		return gameOver;
	}
	// 导出API
	this.init = init;
	this.down = down;
	this.left = left;
	this.right = right;
	this.rotate = rotate;
	this.fixed = fixed;
	this.performNext = performNext;
	this.checkClear = checkClear;
	this.checkGameOver = checkGameOver;
	this.fall = function () {while(down());}
}