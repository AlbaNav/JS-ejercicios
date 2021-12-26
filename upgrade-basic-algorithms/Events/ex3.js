
    function clickAqui(event) {
      console.log(event);
      console.log(event.target.innerHTML)
  };
  
let btntoClick = document.body.querySelector('#btnToClick');
btntoClick.addEventListener("click",function () { console.log(btntoClick)  
});

let focus$$ = document.body.querySelector('.focus');
focus$$.addEventListener("focus", function () {
  console.log(focus$$.value)
});

  let input$$ = document.body.querySelector('.value');
  input$$.addEventListener('input', function () {
    console.log(input$$.value)
  });