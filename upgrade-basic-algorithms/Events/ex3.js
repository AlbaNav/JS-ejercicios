
    function clickAqui(event) {
      console.log(event);
      console.log(event.target.innerHTML)
  };
  
let btntoClick = document.body.querySelector('#btnToClick');
btntoClick.addEventListener("click",function () { console.log(Event)  
});

let focus$$ = document.body.querySelector('.focus');
focus$$.addEventListener("focus", function () {
  console.log(event1.target.value)
});

  let input$$ = document.body.querySelector('.input');
  input$$.addEventListener("input", function () {
    console.log(event2.target.value)
  });