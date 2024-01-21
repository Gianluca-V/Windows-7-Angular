import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calculator-app.component.html',
  styleUrl: './calculator-app.component.scss'
})
export class CalculatorAppComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    let numKeyReset: boolean = false;
    let lgQueue: string = "0";
    let smQueue: string = "";
    let query: string = "";
    let memory: string = "";

    const numRegEx: RegExp = /^[0-9|.]+$/;
    const operRegEx: RegExp = /[+\-*/%]/;

    document.querySelectorAll('button').forEach(button => {
      button.addEventListener('click', function () {
        const key: string = this.getAttribute("value")!;
        if (numRegEx.test(key)) {
          if (numKeyReset) {
            clear();
            numKeyReset = false;
          }

          if (lgQueue[0] === "0" && lgQueue.length === 1) {
            if (query.length !== 0) {
              lgQueue = key;
              query += key;
            } else {
              lgQueue = key;
              query = key;
            }
            sync();
          } else {
            lgQueue += key;
            query += key;
            sync();
          }
        }
        numKeyReset = false;

        if (operRegEx.test(key)) {
          if (operRegEx.test(query[query.length - 1])) {
            smQueue = smQueue.slice(0, -1) + key;
            query = query.slice(0, -1) + key;
            lgQueue = document.querySelector('.lg-text')?.innerHTML || "";
          } else {
            smQueue += lgQueue;
            if (operRegEx.test(query)) {
              query = lgQueue = evalStr(smQueue);
            }
            smQueue += key;
            query += key;
          }
          sync();
          lgQueue = "";
        }

        if (key === '=') {
          smQueue = "";
          lgQueue = evalStr(query);
          query = lgQueue;
          sync();
          numKeyReset = true;
        }

        if (key === 'backspace') {
          if (lgQueue.length > 1) {
            lgQueue = lgQueue.slice(0, -1);
          } else if (lgQueue.length === 1) {
            lgQueue = "0";
          }
          query = query.slice(0, -1);
          sync();
        }

        if (key === 'sign') {
          if (lgQueue.length !== 0) {
            if (lgQueue[0] !== '-') {
              const temp = query.slice(0, -lgQueue.length);
              lgQueue = '-' + lgQueue;
              query = temp + lgQueue;
            } else {
              const temp = query.slice(0, -lgQueue.length);
              lgQueue = lgQueue.substring(1);
              query = temp + lgQueue;
            }
            sync();
          }
        }

        if (key === 'reciprocal') {
          const temp = query.slice(0, -lgQueue.length);
          lgQueue = evalStr("1/" + lgQueue);
          query = temp + lgQueue;
          sync();
        }

        if (key === 'sqrt') {
          const temp = query.slice(0, -lgQueue.length);
          lgQueue = evalStr(Math.sqrt(parseFloat(lgQueue)) + "");
          query = temp + lgQueue;
          sync();
        }

        if (key === 'ms') {
          memory = lgQueue;
          numKeyReset = true;
          document.querySelector('.m-icon')?.classList.add('show');
        }

        if (key === 'mc') {
          memory = "";
          document.querySelector('.m-icon')?.classList.remove('show');
        }

        if (key === 'mr') {
          const temp = query.slice(0, -lgQueue.length);
          lgQueue = memory;
          query = temp + memory;
          sync();
          numKeyReset = true;
        }

        if (key === 'mPlus') {
          if (memory.length === 0) {
            memory = lgQueue;
            document.querySelector('.m-icon')?.classList.add('show');
          } else {
            memory = evalStr(memory + "+" + lgQueue);
          }
          numKeyReset = true;
        }

        if (key === 'mMinus') {
          if (memory.length === 0) {
            memory = "-" + lgQueue;
            document.querySelector('.m-icon')?.classList.add('show');
          } else {
            memory = evalStr(memory + "-" + lgQueue);
          }
          numKeyReset = true;
        }

        if (memory === '0') {
          memory = "";
          document.querySelector('.m-icon')?.classList.remove('show');
        }

        if (key === 'c') {
          clear();
          sync();
        }

        if (key === 'ce') {
          query = query.slice(0, -lgQueue.length);
          lgQueue = "0";
          sync();
        }

        console.log(query);
      });
    });

    function evalStr(str: string): string {
      str = str + "";
      str = str.replace(/^\-/, '0-');
      str = str.replace(/\-\-/, '+');

      let result: string = eval(str) + "";

      if (result.indexOf('Infinity') !== -1) {
        document.querySelector('.error')!.innerHTML = 'Cannot divide by zero';
        return "0";
      }

      if (result.indexOf('NaN') !== -1) {
        document.querySelector('.error')!.innerHTML = 'Invalid input';
        return "0";
      }

      if (result.length > 12) {
        result = parseFloat(result).toFixed(12);
      }

      return result;
    }

    function clear() {
      lgQueue = "0";
      smQueue = "";
      query = "";
      document.querySelector('.error')!.innerHTML = "";
    }

    function sync() {
      document.querySelector('.lg-text')!.innerHTML = lgQueue;
      document.querySelector('.sm-text')!.innerHTML = smQueue;
    }
  }

}
