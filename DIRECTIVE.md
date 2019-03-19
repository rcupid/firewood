```javascript
//只能输入正整数
//只能输入正整数
let reg = /\d/;

export const enterNumber = {
  inserted(el) {
    el.addEventListener('keypress', ev => {
      ev = ev || window.event;
      let charcode = typeof ev.charCode == 'number' ? ev.charCode : ev.keyCode;

      if (
        !reg.test(String.fromCharCode(charcode)) &&
        charcode > 9 &&
        !ev.ctrlKey
      ) {
        if (ev.preventDefault) {
          ev.preventDefault();
        } else {
          ev.returnValue = false;
        }
      }
    });
  }
};

//只能输入小数
export const enterFloat = {
  inserted(el) {
    el.addEventListener('keypress', e => {
      e = e || window.event;
      let charcode = typeof e.charCode == 'number' ? e.charCode : e.keyCode;
      console.log(charcode);
      if (charcode == 46) {
        if (!e.target.value || e.target.value.includes('.')) {
          e.preventDefault();
        }
      } else if (
        !reg.test(String.fromCharCode(charcode)) &&
        charcode > 9 &&
        !e.ctrlKey
      ) {
        if (e.preventDefault) {
          e.preventDefault();
        } else {
          e.returnValue = false;
        }
      }
    });
  }
};
```
