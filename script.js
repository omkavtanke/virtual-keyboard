const keys = [
{key: '`', modKey: '~', data: 'Backquote'},
{key: '1', modKey: '!', data: 'Digit1'},
{key: '2', modKey: '@', data: 'Digit2'},
{key: '3', modKey: '#', data: 'Digit3'},
{key: '4', modKey: '$', data: 'Digit4'},
{key: '5', modKey: '%', data: 'Digit5'},
{key: '6', modKey: '^', data: 'Digit6'},
{key: '7', modKey: '&', data: 'Digit7'},
{key: '8', modKey: '*', data: 'Digit8'},
{key: '9', modKey: '(', data: 'Digit9'},
{key: '0', modKey: ')', data: 'Digit0'},
{key: '-', modKey: '_', data: 'Minus'},
{key: '=', modKey: '+', data: 'Equal'},
{key: 'Backspace', value: ' ', data: 'Backspace'},
{key: 'Tab', value: '   ', data: 'Tab'},
{key: 'q', modKey: 'Q', data: 'KeyQ'},
{key: 'w', modKey: 'W', data: 'KeyW'},
{key: 'e', modKey: 'E', data: 'KeyE'},
{key: 'r', modKey: 'R', data: 'KeyR'},
{key: 't', modKey: 'T', data: 'KeyT'},
{key: 'y', modKey: 'Y', data: 'KeyY'},
{key: 'u', modKey: 'U', data: 'KeyU'},
{key: 'i', modKey: 'I', data: 'KeyI'},
{key: 'o', modKey: 'O', data: 'KeyO'},
{key: 'p', modKey: 'P', data: 'KeyP'},
{key: '[', modKey: '{', data: 'BracketLeft'},
{key: ']', modKey: '}', data: 'BracketRight'},
{key: '|', class: 'vertical-symbol', data: 'Backslash'},
{key: 'Caps', value: '', data: 'CapsLock'},
{key: 'a', modKey: 'A', data: 'KeyA'},
{key: 's', modKey: 'S', data: 'KeyS'},
{key: 'd', modKey: 'D', data: 'KeyD'},
{key: 'f', modKey: 'F', data: 'KeyF'},
{key: 'g', modKey: 'G', data: 'KeyG'},
{key: 'h', modKey: 'H', data: 'KeyH'},
{key: 'j', modKey: 'J', data: 'KeyJ'},
{key: 'k', modKey: 'K', data: 'KeyK'},
{key: 'l', modKey: 'L', data: 'KeyL'},
{key: ';', modKey: ':', data: 'Semicolon'},
{key: "'", modKey: '"', data: 'Quote'},
{key: 'Enter', value: '\n', data: 'Enter'},
{key: 'Shift', class: 'Lshift', value: ' ', data: 'ShiftLeft'},
{key: 'z', modKey: 'Z', data: 'KeyZ'},
{key: 'x', modKey: 'X', data: 'KeyX'},
{key: 'c', modKey: 'C', data: 'KeyC'},
{key: 'v', modKey: 'V', data: 'KeyV'},
{key: 'b', modKey: 'B', data: 'KeyB'},
{key: 'n', modKey: 'N', data: 'KeyN'},
{key: 'm', modKey: 'M', data: 'KeyM'},
{key: ',', modKey: '<', data: 'Comma'},
{key: '.', modKey: '>', data: 'Period'},
{key: '/', modKey: '?', data: 'Slash'},
{key: 'Shift', class: 'Rshift', value: ' ', data: ''},
{key: 'Ctrl', value: ' ', data: 'ControlLeft'},
{key: 'Windows', value: '', data: 'MetaLeft'},
{key: 'Alt', value: ' ', data: 'AltLeft'},
{key: 'Space', value: ' ', data: 'Space'},
{key: 'Alt', value: ' ', data: 'AltRight'},
{key: 'Ctrl', value: ' ', data: 'ControlRight'},
{key: 'Left', value: ' ', data: 'ArrowLeft'},
{key: 'Up', value: ' ', data: 'ArrowUp'},
{key: 'Down', value: ' ', data: 'ArrowDown'},
{key: 'Right', value: ' ', data: 'ArrowRight'}
];
const BODY  = document.getElementById('page');


function generateInput(){
  const textArea = document.createElement('textarea');
  const inputWrapper = document.createElement('div');
  textArea.className = "textarea";
  textArea.cols = 60;
  textArea.rows = 5;
  textArea.autofocus = true;
  inputWrapper.className = "input-wrapper";
  inputWrapper.appendChild(textArea)
  BODY.appendChild(inputWrapper)
}

function generateKeys(keyType) {
  const keyboardSection = document.createElement('section');
  const keyboardWrapper = document.createElement('div');
  keyboardWrapper.className = "keyboard";
  for (let i = 0; i < keys.length; i++) {
    //create element button and add class
    const key = document.createElement('button');
    keys[i].class ? key.className = `key ${keys[i].class}` : key.className = `key ${keys[i].key}`;

    //add data for value of key
    keys[i].value ? key.dataset.value = keys[i].value : key.dataset.value = keys[i].key;

    //add data for code of key
    key.dataset.code = keys[i].data;

    if(keyType === "key"){
      key.innerText = keys[i].key;
    }else if(keyType === "modKey"){
      keys[i].modKey ? key.innerText = keys[i].modKey : key.innerText = keys[i].key;
    }else{
      console.log("function key need argument")
    }
    keyboardWrapper.appendChild(key)
  }
  keyboardSection.appendChild(keyboardWrapper);
  BODY.appendChild(keyboardSection);
}
function init(){
  generateInput();
  generateKeys("key");
  document.querySelector(".Backspace").insertAdjacentHTML("afterend", "<br>");
  document.querySelector(".vertical-symbol").insertAdjacentHTML("afterend", "<br>");
  document.querySelector(".Enter").insertAdjacentHTML("afterend", "<br>");
  document.querySelector(".Rshift").insertAdjacentHTML("afterend", "<br>");

//  add listener to keys
  const key = document.querySelectorAll('.key');
  key.forEach(elem => {
    elem.addEventListener("click", () => {
      document.querySelector('.textarea').value += elem.dataset.value;
      elem.classList.toggle("pressed");
    })
  })


//  add listener for textarea (in addition to keep area focused)
  const textarea = document.querySelector('.textarea');
  textarea.addEventListener("blur", () => {
    textarea.focus()
  })


//  add listener to document (in addition to get clicked key on keyboard)
  document.addEventListener("keydown", event => {
    const pressedKey = document.querySelector(`[data-code="${event.code}"]`);
    console.log(event)
    pressedKey.classList.add('pressed');
  })
  document.addEventListener("keyup", event => {
    const pressedKey = document.querySelector(`[data-code="${event.code}"]`);
    pressedKey.classList.remove('pressed');
  })
}
init()


