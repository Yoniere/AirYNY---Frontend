export const focusDirective = {
  mounted: (el) => {
    el.focus()
  },
}
export const closeDirevtive = {
  mounted: function (el , expression , context) {
    console.log({expression},{context});
    el.ClickOutSide = ({clientX,clientY}) =>{
      var{left ,top , width , height} = el.getBoundingClientRect()
      if(!(clientX > left && clientX < left + width && clientY >top && clientY < top + height)){
        console.log('hi');
        console.log(expression);
        console.log(context);
        context[expression]()
      }
    }
    setTimeout(()=>{
      document.addEventListener('click', el.ClickOutSide)
    },0)
  },

  unmounted: (el) => {
    document.removeEventListener('click', el.ClickOutSide)
  }
}




