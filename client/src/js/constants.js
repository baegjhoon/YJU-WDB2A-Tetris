// 기본설정
const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;
const USER_BLOCK_SIZE = 15;

const LINES_PER_LEVEL = 10;

const MINUS_PER_LEVEL = 80;

const HIDE_CN = 'hide';

// 조작키
const KEY = {
  LEFT: 'ArrowLeft',
  RIGHT: 'ArrowRight',
  DOWN: 'ArrowDown',
  UP: 'ArrowUp',
  SPACE: 'Space',
  PAUSE: 'KeyP',
};

//난이도
const LEVEL = {
  0: 800,
  1: 720,
  2: 630,
  3: 550,
  4: 470,
  5: 390
}

//점수
const POINTS = {
  SINGLE: 100,
  DOUBLE: 300,
  TRIPLE: 500,
  TETRIS: 800,
  SOFT_DROP: 1,
  HARD_DROP: 2,
};

//게임 상태
const STATUS = {
  PLAYING: 'playing',
  PAUSED: 'paused',
  GAMEOVER: 'gameover',
};

const COLORS = ['cyan', 'blue', 'orange', 'yellow', 'green', 'purple', 'red'];

const SHAPE = [
  // I
  [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],

  // J
  [
    [2, 0, 0],
    [2, 2, 2],
    [0, 0, 0],
  ],

  // L
  [
    [0, 0, 3],
    [3, 3, 3],
    [0, 0, 0],
  ],

  // O
  [
    [4, 4, 0],
    [4, 4, 0],
    [0, 0, 0],
  ],

  // S
  [
    [0, 5, 5],
    [5, 5, 0],
    [0, 0, 0],
  ],

  // T
  [
    [6, 6, 6],
    [0, 6, 0],
    [0, 0, 0],
  ],

  // Z
  [
    [7, 7, 0],
    [0, 7, 7],
    [0, 0, 0],
  ],
];

Object.freeze(KEY);
Object.freeze(COLORS);
Object.freeze(SHAPE);
Object.freeze(POINTS);
Object.freeze(LEVEL);