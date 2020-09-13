function newCalculator() {
    let display;
    function draw() {
        let box = document.createElement('div');
        box.classList.add('box');
        document.body.append(box)

         display = document.createElement('div');
         display.classList.add('display');
         display.textContent=" "; // delete value after
         box.append(display);

         let box_button = document.createElement('div');
         box_button.classList.add('box_button');
         box.append(box_button);

         let deleteAll = document.createElement('div');
         deleteAll.classList.add('button_ce');
         deleteAll.classList.add('button_main');
         deleteAll.textContent="CE";
         box_button.append(deleteAll);

         let deleteOne = document.createElement('div');
            deleteOne.classList.add('button_c');
            deleteOne.classList.add('button_main');
            deleteOne.textContent="C";
            box_button.append(deleteOne);

         let division= document.createElement('div');
         division.classList.add('button');
         division.classList.add('button_main');
         division.textContent=" / ";
         box_button.append(division);

         let multiply = document.createElement('div');
         multiply.classList.add('button');
         multiply.classList.add('button_main');
         multiply.textContent=" * ";
         box_button.append(multiply);

         let seven = document.createElement('div');
         seven.classList.add('button');
         seven.textContent="7";
         box_button.append(seven);

         let eight = document.createElement('div');
         eight.classList.add('button');
         eight.textContent="8";
         box_button.append(eight);

         let nine = document.createElement('div');
         nine.classList.add('button');
         nine.textContent="9";
         box_button.append(nine);

         let minus = document.createElement('div');
         minus.classList.add('button');
         minus.classList.add('button_main');
         minus.textContent=" - ";
         box_button.append(minus);

         let four = document.createElement('div');
         four.classList.add('button');
         four.textContent="4";
         box_button.append(four);

         let five = document.createElement('div');
         five.classList.add('button');
         five.textContent="5";
         box_button.append(five);

         let six = document.createElement('div');
         six.classList.add('button');
         six.textContent="6";
         box_button.append(six);

         let sum = document.createElement('div');
         sum.classList.add('button');
         sum.classList.add('button_main');
         sum.textContent=" + ";
         box_button.append(sum);

         let one = document.createElement('div');
         one.classList.add('button');
         one.textContent="1";
         box_button.append(one);

         let two = document.createElement('div');
         two.classList.add('button');
         two.textContent="2";
         box_button.append(two);

         let three = document.createElement('div');
         three.classList.add('button');
         three.textContent="3";
         box_button.append(three);

         let result = document.createElement('div');
         result.classList.add('button_res');
         result.classList.add('button_main');
         result.textContent=" = ";
         box_button.append(result);

         let zero = document.createElement('div');
         zero.classList.add('button');
         zero.textContent="0";
         box_button.append(zero);

         let dot = document.createElement('div');
         dot.classList.add('button');
         dot.textContent=".";
         box_button.append(dot);

         let open = document.createElement('div');
         open.classList.add('button');
         open.textContent="(";
         box_button.append(open);

         let close = document.createElement('div');
         close.classList.add('button');
         close.textContent=")";
         box_button.append(close);
        
    }
    draw()

   let button = document.querySelectorAll('.button');
        button.forEach( item => item.addEventListener('click', function() {
            display.textContent += item.textContent;
        }))

    let result = document.querySelector('.button_res');
        result.addEventListener('click', function() {
           try {
           display.textContent = eval(display.textContent)
           } catch {
               alert('Выражение неверно составлено!')
           }
        })

    let deleteAll = document.querySelector('.button_ce');
        deleteAll.addEventListener('click', function() {
           display.textContent = ' '
        })

    let deleteOne = document.querySelector('.button_c');
        deleteOne.addEventListener('click', function() {
           display.textContent = display.textContent.slice(0, -1)
        })


}

newCalculator()