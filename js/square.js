function Square () {
  this.data = [
    [0, 0, 2, 0],
    [0, 0, 2, 0],
    [0, 0, 2, 0],
    [0, 0, 2, 0]
  ];
  this.origin = {
    x: 0,
    y: 0
  }
  // 方向
  this.dir = 0;
  // 定义是否可以旋转和旋转函数
  Square.prototype.canRotate = function (isValid) {
    let d = (this.dir + 1) % 4;
    let test = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    for (let i = 0; i < this.data.length; i ++) {
      for (let j = 0; j < this.data[0].length; j ++) {
        test[i][j] = this.rotates[d][i][j];
      }
    }
    return isValid(this.origin, test);
  }
  
  Square.prototype.rotate = function (num) {
    if (!num) {
      num = 1;
    }
    this.dir = (this.dir + num) % 4;
    for (let i = 0; i < this.data.length; i ++) {
      for (let j = 0; j < this.data[0].length; j ++) {
        this.data[i][j] = this.rotates[this.dir][i][j];
      }
    }
  }
  // 定义是否可以下降和下降函数
  Square.prototype.canDown = function (isValid) {
    let test = {};
    test.x = this.origin.x + 1;
    test.y = this.origin.y;
    return isValid(test, this.data);
  }
  Square.prototype.down = function () {
    this.origin.x += 1;
  }
  // 定义是否可以左移和左移函数
  Square.prototype.canLeft = function (isValid) {
    let test = {};
    test.x = this.origin.x;
    test.y = this.origin.y - 1;
    return isValid(test, this.data);
  }
  Square.prototype.left = function () {
    this.origin.y -= 1;
  }
  // 定义是否可以右移和右移函数
  Square.prototype.canRight = function (isValid) {
    let test = {};
    test.x = this.origin.x;
    test.y = this.origin.y + 1;
    return isValid(test, this.data);
  }
  Square.prototype.right = function () {
    this.origin.y += 1;
  }
}