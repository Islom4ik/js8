const product = {
    plainBurger: {
        name: 'Гамбургер простой',
        price: 10000,
        kcall: 200,
        amount: 0,                                  
        get Sum() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.kcall * this.amount
        }
    },
    freshBurger: {
        name: 'Гамбургер FRESH',
        price: 20500,
        kcall: 300,
        amount: 0,
        get Sum() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.kcall * this.amount
        }
    },
    freshCombo: {
        name: 'FRESH COMBO',
        price: 31900,
        kcall: 350,
        amount: 0,
        get Sum() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.kcall * this.amount
        }
    }
}

const extraProduct = {
    doubleMayonnaise: {
        name: 'Двойной майонез',
        price: 1000,
        kcall: 50
    },
    lettuce: {
        name: 'Салатный лист',
        price: 500,
        kcall: 10
    },
    cheese: {
        name: 'Сыр',
        price: 1500,
        kcall: 30
    }
}

const btnPlusOrMinus = document.querySelectorAll('.main__product-btn');

btnPlusOrMinus.forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        plusOrMinus(this);
    })
})

function plusOrMinus(element) {
    /* 
        closest() - метод объекта. Который подключается и получает родителя элемента
        getAttribute() - получает значение аттрибута у элемента
    */

    const parent = element.closest('.main__product'),
        parentId = parent.getAttribute('id'),
        productAmount = parent.querySelector('.main__product-num'),
        price = parent.querySelector('.main__product-price span'),
        kcall = parent.querySelector('.main__product-kcall span'),
        symbol = element.getAttribute('data-symbol')

        if(symbol == '+') {
            product[parentId].amount++
        }else if(symbol == '-' && product[parentId].amount > 0) {
            product[parentId].amount--
        }
    

        productAmount.innerHTML = product[parentId].amount;
        price.innerHTML = product[parentId].Sum;
        kcall.innerHTML = product[parentId].Kcall;
}

const animation = document.querySelector('.header__timer-extra');

const time = 5000;
const add = 1;
const secondtime = 20000;


function outNum(num, elem) {
  n = 0;
  let t = Math.round(time / (num / add));
  let interval = setInterval(() => {
    n = n + add;
      if (n == num) {
        clearInterval(interval);
      }  
    animation.innerHTML = n;
  }, t);

  
}

function timer50(num, elem) {
        b = 50;
        let a = Math.round(secondtime / (num / add));
        let interval = setInterval(() => {
        b = b + add;
          if (b == num) {
            clearInterval(interval);
          }  
        animation.innerHTML = b;
      }, a);  
}

   



outNum(50);
timer50(100)
