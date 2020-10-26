// 第一种方块
let Square1 = function () {
  Square.call(this);
  // 旋转数组
  this.rotates = [
    [
      [0, 2, 0, 0],
      [0, 2, 0, 0],
      [0, 2, 0, 0],
      [0, 2, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [2, 2, 2, 2],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 2, 0, 0],
      [0, 2, 0, 0],
      [0, 2, 0, 0],
      [0, 2, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [2, 2, 2, 2],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]
  ]
}
Square1.prototype = Square.prototype;
// 第二种方块
let Square2 = function () {
  Square.call(this);
  // 旋转数组
  this.rotates = [
    [
      [0, 2, 0, 0],
      [2, 2, 0, 0],
      [0, 2, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 2, 0, 0],
      [2, 2, 2, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 2, 0, 0],
      [0, 2, 2, 0],
      [0, 2, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [2, 2, 2, 0],
      [0, 2, 0, 0],
      [0, 0, 0, 0]
    ]
  ]
  // 定义是否可以旋转和旋转函数
}
Square2.prototype = Square.prototype;
// 第三种方块
let Square3 = function () {
  Square.call(this);
  // 旋转数组
  this.rotates = [
    [
      [2, 0, 0, 0],
      [2, 2, 2, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [2, 2, 0, 0],
      [2, 0, 0, 0],
      [2, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [2, 2, 2, 0],
      [0, 0, 2, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 2, 0, 0],
      [0, 2, 0, 0],
      [2, 2, 0, 0],
      [0, 0, 0, 0]
    ]
  ]
  // 定义是否可以旋转和旋转函数
}
Square3.prototype = Square.prototype;
// 第四种方块
let Square4 = function () {
  Square.call(this);
  // 旋转数组
  this.rotates = [
    [
      [2, 2, 0, 0],
      [0, 2, 2, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 2, 0, 0],
      [2, 2, 0, 0],
      [2, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [2, 2, 0, 0],
      [0, 2, 2, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 2, 0, 0],
      [2, 2, 0, 0],
      [2, 0, 0, 0],
      [0, 0, 0, 0]
    ]
  ]
  // 定义是否可以旋转和旋转函数
}
Square4.prototype = Square.prototype;
// 第五种方块
let Square5 = function () {
  Square.call(this);
  // 旋转数组
  this.rotates = [
    [
      [0, 2, 2, 0],
      [2, 2, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [2, 0, 0, 0],
      [2, 2, 0, 0],
      [0, 2, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 2, 2, 0],
      [2, 2, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [2, 0, 0, 0],
      [2, 2, 0, 0],
      [0, 2, 0, 0],
      [0, 0, 0, 0]
    ]
  ]
  // 定义是否可以旋转和旋转函数
}
Square5.prototype = Square.prototype;
// 第六种方块
let Square6 = function () {
  Square.call(this);
  // 旋转数组
  this.rotates = [
    [
      [2, 2, 2, 0],
      [2, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [2, 2, 0, 0],
      [0, 2, 0, 0],
      [0, 2, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 2, 0],
      [2, 2, 2, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [2, 0, 0, 0],
      [2, 0, 0, 0],
      [2, 2, 0, 0],
      [0, 0, 0, 0]
    ]
  ]
  // 定义是否可以旋转和旋转函数
}
Square6.prototype = Square.prototype;
// 第七种方块
let Square7 = function () {
  Square.call(this);
  // 旋转数组
  this.rotates = [
    [
      [2, 2, 0, 0],
      [2, 2, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [2, 2, 0, 0],
      [2, 2, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [2, 2, 0, 0],
      [2, 2, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [2, 2, 0, 0],
      [2, 2, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]
  ]
  // 定义是否可以旋转和旋转函数
}
Square7.prototype = Square.prototype;


// 定义方块工厂函数
let SquareFactory = function () {

}

SquareFactory.prototype.make = function (index, dir) {
  let s;

  index += 1;
  switch (index) {
    case 1:
      s = new Square1();
      break;
    case 2:
      s = new Square2();
      break;
    case 3:
      s = new Square3();
      break;
    case 4:
      s = new Square4();
      break;
    case 5:
      s = new Square5();
      break;
    case 6:
      s = new Square6();
      break;
    case 7:
      s = new Square7();
      break;
    default:
      break;
  }

  s.origin.x = 0;
  s.origin.y = 3;
  s.rotate(dir);
  
  return s;
}