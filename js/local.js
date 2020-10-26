function Local () {
  // 游戏对象
  var game;
  var timer;
  // 绑定键盘事件
  // 方块下落速度

  let INTERVAL = 300;
  // 定时器

  function bindKeyEvents (e) {
    document.onkeydown = function (e) {
      if (e.keyCode === 38) {  // up
        game.rotate();
      } else if (e.keyCode === 39) { // right
        game.right();
      } else if (e.keyCode === 40) { // down
        game.down();
      } else if (e.keyCode === 37) { // left
        game.left();
      } else if (e.keyCode === 32) { // space
        game.fall();
      }
    }
  }

  // 移动函数
  function move () {
    if (!game.down()) {
      game.fixed();
      // 检测消除行
      if (INTERVAL > 100) {
        INTERVAL--;
      }
      setTime(INTERVAL);
      game.checkClear();
      // 检测gameover
      if(game.checkGameOver()) {
        stop();
        let result = confirm(`Your score is: ${score}.
Do You want to try again?`);
        if (result) {
          start();
        } else {
          isStart = false;
        }
      } else {
        game.performNext(generateType(), generateNext());
      }
    }
  }

  // 随机生成方块
  function generateType () {
    return Math.ceil(Math.random() * 7) - 1;
  }

  // 随机生成旋转次数
  function generateNext () {
    return Math.ceil(Math.random() * 4) - 1;
  }

  // 开始
  function start () {
    let doms = {
      gameDiv: document.getElementById('game'),
      nextDiv: document.getElementById('next'),
    }
    game = new Game();
    game.init(doms);
    bindKeyEvents();
    // timer = setInterval(move, INTERVAL);
    setTime(INTERVAL);
  }

  // 结束函数stop的定义
  function stop () {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    document.onkeydown = null;
  }

  function setTime (time) {
    if (timer) {
      clearInterval(timer);
    }
    timer = setInterval(move, time);
  }
  
  // 导出API
  this.start = start;
};