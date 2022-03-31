





// export const focusDirective = {
//   mounted: (el) => {
//     el.focus()
//   },
// }

// export const closeDirevtive = {
//   mounted: function (el, expression, context) {
//     console.log({ expression }, { context });
//     el.ClickOutSide = ({ clientX, clientY }) => {
//       var { left, top, width, height } = el.getBoundingClientRect()
//       if (!(clientX > left && clientX < left + width && clientY > top && clientY < top + height)) {
//         console.log('hi');
//         console.log(expression);
//         console.log(context);
//         context.expression()
//       }
//     }
//     setTimeout(() => {
//       document.addEventListener('click', el.ClickOutSide)
//     }, 0)
//   },

//   unmounted: (el) => {
//     document.removeEventListener('click', el.ClickOutSide)
//   }
// }




// export const clickOutside = {
//   beforeMount: (el, binding) => {
//     el.clickOutsideEvent = event => {
//       // here I check that click was outside the el and his children
//       if (!(el == event.target || el.contains(event.target))) {
//         // and if it did, call method provided in attribute value
//         binding.value();
//       }
//     };
//     document.addEventListener("click", el.clickOutsideEvent);
//   },
//   unmounted: el => {
//     document.removeEventListener("click", el.clickOutsideEvent);
//   },
// };

// createApp(App)
//   .directive("click-outside", clickOutside)
//   .mount("#app");