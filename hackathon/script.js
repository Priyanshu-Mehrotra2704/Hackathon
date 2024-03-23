const spanElements = document.querySelectorAll('div span');

spanElements.forEach(span => {
  span.addEventListener('click', function() {
    spanElements.forEach(otherSpan => otherSpan.style.backgroundColor = 'white');  // Reset all spans to white
    this.style.backgroundColor = '#FFBC3B';                                        // Set clicked span to orange
  });
});
const recipe = document.querySelectorAll('.no1');
const recep = document.querySelector('.recep');
recep.addEventListener('click',() =>{
  recipe.style.backgroundColor = 'Pink';
})