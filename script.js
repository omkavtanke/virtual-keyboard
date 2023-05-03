const keys = [
  { key: '`', modKey: '~', data: 'Backquote' },
  { key: '1', modKey: '!', data: 'Digit1' },
  { key: '2', modKey: '@', data: 'Digit2' },
  { key: '3', modKey: '#', data: 'Digit3' },
  { key: '4', modKey: '$', data: 'Digit4' },
  { key: '5', modKey: '%', data: 'Digit5' },
  { key: '6', modKey: '^', data: 'Digit6' },
  { key: '7', modKey: '&', data: 'Digit7' },
  { key: '8', modKey: '*', data: 'Digit8' },
  { key: '9', modKey: '(', data: 'Digit9' },
  { key: '0', modKey: ')', data: 'Digit0' },
  { key: '-', modKey: '_', data: 'Minus' },
  { key: '=', modKey: '+', data: 'Equal' },
  { key: 'Backspace', value: ' ', data: 'Backspace' },
  { key: 'Tab', value: '\n', data: 'Tab' },
  { key: 'q', modKey: 'Q', data: 'KeyQ' },
  { key: 'w', modKey: 'W', data: 'KeyW' },
  { key: 'e', modKey: 'E', data: 'KeyE' },
  { key: 'r', modKey: 'R', data: 'KeyR' },
  { key: 't', modKey: 'T', data: 'KeyT' },
  { key: 'y', modKey: 'Y', data: 'KeyY' },
  { key: 'u', modKey: 'U', data: 'KeyU' },
  { key: 'i', modKey: 'I', data: 'KeyI' },
  { key: 'o', modKey: 'O', data: 'KeyO' },
  { key: 'p', modKey: 'P', data: 'KeyP' },
  { key: '[', modKey: '{', data: 'BracketLeft' },
  { key: ']', modKey: '}', data: 'BracketRight' },
  { key: '|', class: 'vertical-symbol', data: 'Backslash' },
  { key: 'Caps', value: ' ', data: 'CapsLock' },
  { key: 'a', modKey: 'A', data: 'KeyA' },
  { key: 's', modKey: 'S', data: 'KeyS' },
  { key: 'd', modKey: 'D', data: 'KeyD' },
  { key: 'f', modKey: 'F', data: 'KeyF' },
  { key: 'g', modKey: 'G', data: 'KeyG' },
  { key: 'h', modKey: 'H', data: 'KeyH' },
  { key: 'j', modKey: 'J', data: 'KeyJ' },
  { key: 'k', modKey: 'K', data: 'KeyK' },
  { key: 'l', modKey: 'L', data: 'KeyL' },
  { key: ';', modKey: ':', data: 'Semicolon' },
  { key: '\'', modKey: '"', data: 'Quote' },
  { key: 'Enter', value: '\n', data: 'Enter' },
  {
    key: 'Shift', class: 'Lshift', value: ' ', data: 'ShiftLeft',
  },
  { key: 'z', modKey: 'Z', data: 'KeyZ' },
  { key: 'x', modKey: 'X', data: 'KeyX' },
  { key: 'c', modKey: 'C', data: 'KeyC' },
  { key: 'v', modKey: 'V', data: 'KeyV' },
  { key: 'b', modKey: 'B', data: 'KeyB' },
  { key: 'n', modKey: 'N', data: 'KeyN' },
  { key: 'm', modKey: 'M', data: 'KeyM' },
  { key: ',', modKey: '<', data: 'Comma' },
  { key: '.', modKey: '>', data: 'Period' },
  { key: '/', modKey: '?', data: 'Slash' },
  {
    key: 'Shift', class: 'Rshift', value: ' ', data: '',
  },
  { key: 'Ctrl', value: ' ', data: 'ControlLeft' },
  { key: 'Alt', value: ' ', data: 'AltLeft' },
  { key: 'Space', value: ' ', data: 'Space' },
  { key: 'Alt', value: ' ', data: 'AltRight' },
  { key: 'Ctrl', value: ' ', data: 'ControlRight' },
  { key: 'Left', value: '', data: 'ArrowLeft' },
  { key: 'Up', value: ' ', data: 'ArrowUp' },
  { key: 'Down', value: ' ', data: 'ArrowDown' },
  { key: 'Right', value: ' ', data: 'ArrowRight' },
];
const BODY = document.getElementById('page');

function generateInput() {
  const textArea = document.createElement('textarea');
  const inputWrapper = document.createElement('div');
  textArea.className = 'textarea';
  textArea.cols = 60;
  textArea.rows = 5;
  textArea.autofocus = true;
  inputWrapper.className = 'input-wrapper';
  inputWrapper.appendChild(textArea);
  BODY.appendChild(inputWrapper);
}

function generateKeys(keyType) {
  const keyboardSection = document.querySelector('.keyboard-section');

  const newKeyboardSection = document.createElement('section');
  const keyboardWrapper = document.createElement('div');
  newKeyboardSection.className = 'keyboard-section';
  keyboardWrapper.className = 'keyboard';
  for (let i = 0; i < keys.length; i += 1) {
    //  create element button and add class

    const key = document.createElement('button');
    if (keys[i].class) {
      key.className = `key ${keys[i].class}`;
    } else {
      key.className = `key ${keys[i].key}`;
    }

    //  add data for code of key
    key.dataset.code = keys[i].data;

    if (keyType === 'key') {
      key.innerText = keys[i].key;

      //  add data for value of key
      if (keys[i].value) {
        key.dataset.value = keys[i].value;
      } else {
        key.dataset.value = keys[i].key;
      }
    } else if (keyType === 'modKey') {
      if (keys[i].modKey) {
        key.innerText = keys[i].modKey;
      } else {
        key.innerText = keys[i].key;
      }

      //  add data for value of key
      if (keys[i].value) {
        key.dataset.value = keys[i].value;
      } else {
        key.dataset.value = keys[i].modKey;
      }
    }
    keyboardWrapper.appendChild(key);
  }
  newKeyboardSection.appendChild(keyboardWrapper);
  if (keyboardSection) {
    keyboardSection.remove();
    const textareaWrapper = document.querySelector('.input-wrapper');
    textareaWrapper.insertAdjacentHTML('afterend', newKeyboardSection.outerHTML);
  } else {
    BODY.appendChild(newKeyboardSection);
  }
}

function addIcons() {
  const leftArrow = document.querySelector('.Left');
  const upArrow = document.querySelector('.Up');
  const downArrow = document.querySelector('.Down');
  const rightArrow = document.querySelector('.Right');

  leftArrow.innerHTML = '';
  leftArrow.insertAdjacentHTML('afterbegin', '&larr;');

  upArrow.innerHTML = '';
  upArrow.insertAdjacentHTML('afterbegin', '&uarr;');

  downArrow.innerHTML = '';
  downArrow.insertAdjacentHTML('afterbegin', '&darr;');

  rightArrow.innerHTML = '';
  rightArrow.insertAdjacentHTML('afterbegin', '&rarr;');
}

function setValue() {
  const keyValue = this.dataset.value;
  const textarea = document.querySelector('.textarea');
  const [start, end] = [textarea.selectionStart, textarea.selectionEnd];
  textarea.setRangeText(keyValue, start, end, 'end');
}

function moveCursorLeft() {
  const textarea = document.querySelector('.textarea');
  const currPos = textarea.selectionEnd;
  if (currPos !== 0) {
    const prePos = currPos - 1;
    textarea.setSelectionRange(prePos, prePos);
  }
}

function moveCursorRight() {
  const textarea = document.querySelector('.textarea');
  const currPos = textarea.selectionEnd;
  const nextPos = currPos + 1;
  textarea.setSelectionRange(nextPos, nextPos);
}

function moveCursorDown() {
  const textarea = document.querySelector('.textarea');
  const currPos = textarea.selectionEnd;
  const countOfSymbolsPerLine = 111;
  const nextPos = currPos + countOfSymbolsPerLine;
  textarea.setSelectionRange(nextPos, nextPos);
}

function moveCursorUp() {
  const textarea = document.querySelector('.textarea');
  const currPos = textarea.selectionEnd;
  const countOfSymbolsPerLine = 111;
  if (currPos >= 111) {
    const prevPos = currPos - countOfSymbolsPerLine;
    textarea.setSelectionRange(prevPos, prevPos);
  }
}

function addListenerClickShift() {
  const leftShift = document.querySelector('.Lshift');
  const rightShift = document.querySelector('.Rshift');
  const shift = [];
  shift.push(leftShift);
  shift.push(rightShift);

  shift.forEach((elem) => {
    elem.addEventListener('mousedown', () => {
      generateKeys('modKey');
      elem.classList.add('pressed');
      addIcons();
      //  add listener to keys
      const key = document.querySelectorAll('.key');
      key.forEach((el) => {
        el.addEventListener('click', setValue);
      });
      addListenerClickShift();
    });
  });

  shift.forEach((elem) => {
    elem.addEventListener('mouseup', () => {
      generateKeys('key');
      addIcons();
      //  add listener to keys
      const key = document.querySelectorAll('.key');
      key.forEach((el) => {
        el.addEventListener('click', setValue);
      });
      addListenerClickShift();
    });
  });
}

function addText() {
  const text = document.createElement('h3');
  text.innerText = 'сделано на windows. пока не добавил смену языка. \n ссылка на пул реквест :';
  text.className = 'comment';
  BODY.appendChild(text);
  document.querySelector('.comment').insertAdjacentHTML('beforeend', '<a href="https://github.com/omkavtanke/virtual-keyboard/pull/3">нажми</a>');
}

function init() {
  generateInput();
  generateKeys('key');
  document.querySelector('.Backspace').insertAdjacentHTML('afterend', '<br>');
  document.querySelector('.vertical-symbol').insertAdjacentHTML('afterend', '<br>');
  document.querySelector('.Enter').insertAdjacentHTML('afterend', '<br>');
  document.querySelector('.Rshift').insertAdjacentHTML('afterend', '<br>');
  addIcons();

  //  add listener to keys
  const key = document.querySelectorAll('.key');
  key.forEach((elem) => { elem.addEventListener('click', setValue); });

  key.forEach((elem) => {
    elem.addEventListener('mousedown', () => {
      elem.classList.add('pressed');
    });
  });

  key.forEach((elem) => {
    elem.addEventListener('mouseup', () => {
      elem.classList.remove('pressed');
    });
  });

  //  add listener for textarea (in addition to keep area focused)

  const textarea = document.querySelector('.textarea');
  textarea.addEventListener('blur', () => {
    textarea.focus();
  });

  //  add listener to document (in addition to get clicked key on keyboard)

  document.addEventListener('keydown', (event) => {
    const pressedKey = document.querySelector(`[data-code='${event.code}']`);
    pressedKey.classList.add('pressed');
  });
  document.addEventListener('keyup', (event) => {
    const pressedKey = document.querySelector(`[data-code='${event.code}']`);
    pressedKey.classList.remove('pressed');
  });

  //  add listener for arrows

  const leftArrow = document.querySelector('.Left');
  leftArrow.addEventListener('click', moveCursorLeft);
  leftArrow.removeEventListener('click', setValue);

  const rightArrow = document.querySelector('.Right');
  rightArrow.addEventListener('click', moveCursorRight);
  rightArrow.removeEventListener('click', setValue);

  const downArrow = document.querySelector('.Down');
  downArrow.addEventListener('click', moveCursorDown);
  downArrow.removeEventListener('click', setValue);

  const upArrow = document.querySelector('.Up');
  upArrow.addEventListener('click', moveCursorUp);
  upArrow.removeEventListener('click', setValue);

  // add listener to caps key(on keyboard click)
  document.addEventListener('keydown', (event) => {
    if (event.code === 'ShiftLeft' || event.code === '') {
      generateKeys('modKey');
      const pressedKey = document.querySelector(`[data-code='${event.code}']`);
      pressedKey.classList.add('pressed');
      addIcons();
      //  add listener to keys
      key.forEach((elem) => { elem.addEventListener('click', setValue); });
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code === 'ShiftLeft' || event.code === '') {
      generateKeys('key');
      addIcons();
      //  add listener to keys
      key.forEach((elem) => { elem.addEventListener('click', setValue); });
    }
  });

  //  add listener for (click on virtual keyboard)
  addListenerClickShift();

  addText();
}
init();
