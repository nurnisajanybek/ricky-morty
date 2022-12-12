// Запросы, XMLHttpRequest, AJAX. Домашняя работа

/* Задание №1.1. 
Сделайте запрос на адрес 'https://rickandmortyapi.com/api/character'.
Используйте fetch или ajax. Отобразите на странице имена персонажей из 
Рика и Морти в list. 
let block1 = $('.block1');
let list = $('.list');
(Вы можете стилизовать страницу по желанию.)
*/

/* Задание №1.2. 
Рядом с именами отобразите все изображения
которые вы получили вместе с остальными данными из сервера.
*/

/* Задание №1.3. 
Создайте файл db.json и запустите локальный сервер.
Данные которые вы получили во втором задании, сохраните 
в локальном сервере db.json, в массиве под 
названием "characters".
Подсказка: как только ваши данные сохранились в db.json
функцию, которая отправляет запрос на db.json стоит закомментировать.
*/

/* Задание №1.4. 
А теперь сделайте запрос на локальный сервер.
Во второй блок с классом 'block-2', отобразите имена, которые 
вы получили (стянули) с db.json.


/* Задание №1.5. 
К именам добавьте картинки персонажей.
В итоге у вас должна получиться точная копия первых двух тасков.
Отличие которых лишь в базе данных.
*/

let ricky = "https://rickandmortyapi.com/api/character";
let API = "http://localhost:8000/characters";
let list = document.querySelector(".list");
let block2 = document.querySelector(".block-2");

async function info() {
  let response = await fetch(ricky).then((res) => res.json());
  let obj = response.results;
  console.log(obj);

  obj.forEach((item) => {
    list.innerHTML += `<li>${item.name}<img style="margin-left:10px; height="60px" width="60px" src ="${item.image}"</li>`;

    //    get(item)
  });
}
info();
// async function get(obj){

//    await fetch(API,{
//      method: "POST",
//      body: JSON.stringify(obj),
//      headers: {
//         "Content-type": "application/json; charset=utf-8",
//     },
//    })
//    }

async function final() {
  let finalObj = await fetch(API).then((res) => res.json());
  finalObj.forEach((item) => {
    block2.innerHTML += `<ul>
        <li>${item.name}<img style="margin-left:10px; height="60px" width="60px"  src ="${item.image}"</li>
        </ul>`;
  });
}
final();
