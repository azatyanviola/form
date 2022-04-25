'use strict';

// const form = document.getElementById('form');
// form.onsubmit = function(e){
//     e.preventDefault();

//     const name = document.getElementById('name').value;
//        console.log(name);
//     const middlename = document.getElementById('middlename').value;
//        console.log(middlename);
//     const lastname = document.getElementById('lastname').value;
//        console.log(lastname);
//     const day = document.getElementById('day').value;
//        console.log(day);
//     const month = document.getElementById('month').value;
//        console.log(month);
//     const year = document.getElementById('year').value;
//        console.log(year);
//     const region = document.getElementById('region').value;
//        console.log(region);
//      if (document.getElementById('node').checked) {
//         console.log(document.getElementById('node').value);
//       }
//     if(document.getElementById('js').checked){
//         console.log(document.getElementById('js').value);
//       }
//     if(document.getElementById('male').checked){
//         console.log(document.getElementById('male').value);
//       }else if(document.getElementById('female').checked){
//         console.log(document.getElementById('female').value);
//       }
//     const phone = document.getElementById('phone').value;
//        console.log(phone);
//     const adress = document.getElementById('adress').value;
//        console.log(adress);
//     const email = document.getElementById('email').value;
//        console.log(email);
//        }
  


const form = document.getElementById('form');
form.onsubmit = function(e){
    e.preventDefault();

    const name = document.getElementById('name').value;
       localStorage.setItem('Name', name);
    const middlename = document.getElementById('middlename').value;
    localStorage.setItem('Middlename', middlename);
    const lastname = document.getElementById('lastname').value;
    localStorage.setItem('Lastname', lastname);
    const day = document.getElementById('day').value;
    localStorage.setItem('Day', day);
    const month = document.getElementById('month').value;
    localStorage.setItem('Month', month);
    const year = document.getElementById('year').value;
    localStorage.setItem('Year', year);
    const region = document.getElementById('region').value;
    localStorage.setItem('Region', region); 
     if (document.getElementById('node').checked) {
      localStorage.setItem('Course', document.getElementById('node').value);
      }
    if(document.getElementById('js').checked){
      localStorage.setItem('Course', document.getElementById('js').value);
      }
    if(document.getElementById('male').checked){
      localStorage.setItem('Gender', document.getElementById('male').value);
      }else if(document.getElementById('female').checked){
        localStorage.setItem('Gender', document.getElementById('female').value);
      }
    const phone = document.getElementById('phone').value;
    localStorage.setItem('Phone', phone);
    const adress = document.getElementById('adress').value;
    localStorage.setItem('Phone', adress);
    const email = document.getElementById('email').value;
    localStorage.setItem('Email', email);
       }
 
  //* And we can see the data in the 'Application -> localStorage' or with keys`

  console.log(localStorage.getItem('Name'));
  console.log(localStorage.getItem('Middlename'));
  console.log(localStorage.getItem('Lastame'));
  console.log(localStorage.getItem('Day'));
  console.log(localStorage.getItem('Month'));
  console.log(localStorage.getItem('Year'));
  console.log(localStorage.getItem('Region'));
  console.log(localStorage.getItem('Gender'));
  console.log(localStorage.getItem('Phone'));
  console.log(localStorage.getItem('Email'));
