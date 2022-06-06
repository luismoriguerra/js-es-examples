// 1. Class Fields
// 2. Ergonomic brand checks for private Fields
// 3. Class Static Block
// 4. RegExp Match Indices
// 5. Top-level await
// 6. .at()
// 7. Accessible Object.prototype.hasOwnProperty



// 1. Class Fields
class ButtonToggle extends HTMLElement {
   
  color = 'green';
  #value = true;

  toggle(){
      this.#value = !this.#value;
  }
}
const button = new ButtonToggle();
console.log(button.color);
// green - public fields are accessible from outside classes

// SyntaxError - cannot be accessed or modified from outside the class
console.log(button.#value); 
button.#value = false;


class ButtonToggle extends HTMLElement {
   
  color = 'green'
  #value = true;

  #toggle(){
      this.#value = !this.#value
  }

  set #setFalseValue(){
      this.#value = false;
  }
}
const button = new ButtonToggle();
// SyntaxError - cannot be accessed or modified from outside the class
button.#toggle();
// SyntaxError - cannot be accessed or modified from outside the class
button.#setFalseValue;


class ButtonToggle extends HTMLElement {
   
  #value = true;

  static toggle(){
      this.#value = !this.#value
  }
}
// this will work
ButtonToggle.toggle();

// SyntaxError - private static field
const button = new ButtonToggle();
button.toggle();




// 2. Ergonomic brand checks for private Fields
class ButtonToggle extends HTMLElement {
   
  // initialised as null
   value = null;

   get #getValue(){
       if(!this.#value){
           throw new Error('no value');
       } 
       return this.#value;
   }

   static isButtonToggle(obj){
      return #value in obj && #getValue in obj
   }

}



// method defined outside of the class body
let initVal;

class ButtonToggle{
    #value = false;

    get getValue(){
        if(!this.#value){
            throw new Error('no value');
        } 
        return this.#value
    }

    static {
        initVal = () => {
            this.#value = this.getValue;
        }
    }
}

initVal();




// 4. RegExp Match Indices
const fruits = 'Fruits: mango, mangosteen, orange'
// /gd instead of the previous /g
const regex = /(mango)/gd;

const matches = [...fruits.matchAll(regex)];
matches[0];

// [
// "mango",
// "mango",
// groups: undefined
// index: 8
// indices:[]
//  [8, 13],
//  [8, 13]
// ]
// groups: undefined


// 5. Top-level await
// we need to get the appropriate translation keys based on the language
const translationKeys = await import(`/i18n/${navigator.language}`);

let jQuery;
try {
  jQuery = await import('https://cdn-a.com/jQuery');
} catch {
  jQuery = await import('https://cdn-b.com/jQuery');
}



// 6. .at()
const arr = [10,20,30,40];

// same -> 10
arr[1];
arr.at(1);

// same -> 40
arr[arr.length -1];
arr.at(-1);


// 7. Accessible Object.prototype.hasOwnProperty
const student = {
  name: 'Mark',
  age: 18
}

Object.hasOwn(student,'age'); // true
Object.hasOwn(student,'grade'); // false