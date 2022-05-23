// Socket
const socket = io();

// Data
let userList = [];
let userBoards = [];

// 게임 초기화와 종료
let requestId = null;

const time = {
  start: 0,
  elapsed: 0,
  level: 1000,
};

// Account  
const accountValues = {
  score: 0,
  lines: 0,
  level: 0,
  username: '',
  ready: false,
  status: '',
};

//Proxy
const account = new Proxy(accountValues, {
  set: (target, key, value) => {
    target[key] = value;
    updateAccount(key, value);

    if (key === 'level') {
      const newLevel = Math.max(40, time.level - MINUS_PER_LEVEL * value);

      time.level = newLevel;
    } else if (key === 'ready') {
      const $target = document.getElementById('ready-btn');

      if (value) {
        $target.classList.add('ready');
      } else {
        $target.classList.remove('ready');
      }
    }

    return true;
  },
});

// Elements
const $greeting = document.getElementById('greeting');
const $main = document.getElementById('main');
const $userForm = document.getElementById('user-form');
const $userInput = document.getElementById('user-input');
const $userList = document.getElementById('user-list');
const $boardList = document.getElementById('board-list');

// Canvas
const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

const next = document.getElementById('next');
const ctxNext = next.getContext('2d');
ctxNext.canvas.width = 4 * BLOCK_SIZE;
ctxNext.canvas.height = 4 * BLOCK_SIZE;
ctxNext.scale(BLOCK_SIZE, BLOCK_SIZE);

// Board
const board = new Board({rows: ROWS, cols: COLS}, ctx, ctxNext, account);

// Socket on
socket.on('update-users', users => {
  userList = [...users];

  printUserList();
});

socket.on('play', isPlay => {
  if (isPlay) {
    play();
  }
});

socket.on('update-board', data => {
  updateBoard(data);
});

socket.on('access-denied', data => {
  alert(data.message);
});

socket.on('gameover', ({users}) => {
  console.log('게임이 종료되었습니다.');

  userList = [...users];
  account.status = '';
  printUserList();
});

// 키보드 입력 이벤트
document.addEventListener('keydown', event => {
  const {code} = event;

  if (moves[code]) {
    if (account.status !== STATUS.PLAYING) return;

    //이벤트 버블링 방지
    event.preventDefault();

    //조각의 새 상태 얻기
    let p = moves[code](board.piece);

    if (code === KEY.SPACE) {
      while (board.valid(p)) {
        account.score += POINTS.HARD_DROP;
        board.piece.move(p);
        p = moves[KEY.DOWN](board.piece);
      }

      //   그리기 전에 이전 좌표를 지운다.
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctxNext.clearRect(0, 0, ctxNext.canvas.width, ctxNext.canvas.height);

      board.draw();
      board.drop();
      emitUpdateBoard();
    } else if (board.valid(p)) {
      if (code === KEY.DOWN) {
        account.score += POINTS.SOFT_DROP;
      }

      // 이동이 가능한 상태라면 조각을 이동한다.
      board.piece.move(p);

      //   그리기 전에 이전 좌표를 지운다.
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctxNext.clearRect(0, 0, ctxNext.canvas.width, ctxNext.canvas.height);
      board.draw();
      emitUpdateBoard();
    } else {
      return false;
    }
  }

  if (code === KEY.PAUSE) {
    if (account.status === STATUS.PLAYING) {
      pause();
    } else if (account.status === STATUS.PAUSED) {
      account.status = STATUS.PLAYING;
      animate();
    }
  }
});

$userForm.addEventListener('submit', event => {
  event.preventDefault();

  const username = $userInput.value.trim();

  if (!username.length) {
    alert('1글자 이상 입력해주세요');
    return false;
  }

  account.username = username;
  $userInput.value = '';

  $greeting.classList.add(HIDE_CN);
  $main.classList.remove(HIDE_CN);

  emitUserEnter(account);
});

// Functions
function setupGame() {
  clearBoardList();
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctxNext.clearRect(0, 0, ctxNext.canvas.width, ctxNext.canvas.height);
  board.reset();
}

function clearTime() {
  time.start = 0;
  time.elapsed = 0;
  time.level = 1000;
}

function play() {
  account.status = STATUS.PLAYING;

  setupGame();
  setupBoardList();
  animate();
}

function animate(now = 0) {
  //지난 시간 업데이트
  const elapsed = now - time.start;

  if (elapsed > time.level) {
    const dropped = board.drop();

    if (!dropped) {
      gameOver();
      return;
    }

    emitUpdateBoard();

    time.start = now;
  }
  // 보드 지우기
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctxNext.clearRect(0, 0, ctxNext.canvas.width, ctxNext.canvas.height);

  board.draw();
  requestId = window.requestAnimationFrame(animate);
}

function gameOver() {
  window.cancelAnimationFrame(requestId);
  ctx.fillStyle = 'black';
  ctx.fillRect(1, 3, 8, 1.8);
  ctx.font = '1px MS Sans Serif';
  ctx.fillStyle = 'red';
  //ctx.textAlign = 'right';
  ctx.fillText('GAMEOVER', 2.4, 4.2);

  account.status = STATUS.GAMEOVER;
  account.ready = false;
  clearTime();
  emitUpdateBoard();
  emitGameOver();
}

function pause() {
  window.cancelAnimationFrame(requestId);
  account.status = STATUS.PAUSED;

  ctx.fillStyle = 'black';
  ctx.fillRect(1, 3, 8, 1.8);
  ctx.font = '1px MS Sans Serif';
  ctx.fillStyle = 'gray';
  //ctx.textAlign = 'center';
  ctx.fillText('Paused', 3.0, 4.2);
}

function updateAccount(key, value) {
  const $el = document.getElementById(key);

  if ($el) {
    $el.textContent = value;
  }
}

// 유저 목록 출력
function printUserList() {
  if (userList.length) {
    $userList.innerHTML = userList.map(u => printUserListItem(u)).join('');
  }
}

function printUserListItem(user) {
  return `<li>
    ${user.account.username} ${socket.id === user.id ? '(나)' : ''} ${
    user.account.ready ? '<strong>ready</strong>' : ''
  }
  </li>`;
}

function setupBoardList() {
  const otherUsers = userList.filter(u => u.id !== socket.id);

  if (!otherUsers.length) return;

  clearBoardList();

  otherUsers.forEach(u => {
    const canvas = document.createElement('canvas');
    const id = `${u.id}-board`;
    const ctx = canvas.getContext('2d');
    ctx.canvas.width = COLS * USER_BLOCK_SIZE;
    ctx.canvas.height = ROWS * USER_BLOCK_SIZE;
    ctx.scale(USER_BLOCK_SIZE, USER_BLOCK_SIZE);

    canvas.className = 'game-board';
    canvas.id = id;

    userBoards.push({
      id,
      ctx,
    });

    $boardList.appendChild(canvas);
  });
}

function clearBoardList() {
  $boardList.innerHTML = '';
  userBoards = [];
}

function updateBoard({id, board}) {
  const boardId = `${id}-board`;

  const boardItem = userBoards.find(b => b.id === boardId);

  if (!boardItem) return;

  drawUserBoard(boardItem.ctx, board);
}

function drawUserBoard(ctx, board) {
  const {grid, piece} = board;

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  if (grid.length) {
    grid.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          ctx.fillStyle = COLORS[value - 1];
          ctx.fillRect(x, y, 1, 1);
        }
      });
    });
  }

  if (piece?.shape?.length) {
    piece.shape.forEach((row, dy) => {
      row.forEach((value, dx) => {
        const x = piece.x + dx;
        const y = piece.y + dy;

        if (value > 0) {
          ctx.fillStyle = COLORS[value - 1];
          ctx.fillRect(x, y, 1, 1);
        }
      });
    });
  }
}

// Socket Events
function ready() {
  if (account.status === STATUS.PLAYING) return;

  account.ready = !account.ready;

  socket.emit('user-ready', {
    id: socket.id,
    account,
  });
}

function leave() {
  if (account.status === STATUS.PLAYING) return;

  setupGame();
  socket.emit('user-leave', {
    id: socket.id,
  });

  $greeting.classList.remove(HIDE_CN);
  $main.classList.add(HIDE_CN);
}

function emitUserEnter(account) {
  socket.emit('user-enter', {
    id: socket.id,
    account,
  });
}

function emitUpdateBoard() {
  socket.emit('update-board', {
    id: socket.id,
    board,
  });
}

function emitGameOver() {
  socket.emit('user-gameover', {
    id: socket.id,
    account,
  });
}
