import React from 'react';


const App = () => {

  // const persons = ['ram', 'hari', 'shiva', 'vikky']

  // for (let per in persons) {
  //   console.log(per);
  // }

  // for (let per of persons) {
  //   console.log(per)
  // }

  // const greet = (name) => {
  //   console.log("Hello user " + name);
  // }

  // greet();

  // const val = prompt("what is your name");
  // console.log(val);

  // const greet = (a, ...somes) => {
  //   console.log(somes);

  // }
  // greet(7, 'ram', 'shyam', 'hari');


  // const findSums = (...nums) => {
  //   let sum = 0;
  //   for (let num of nums) {
  //     sum += num;

  //   }
  //   return sum;
  // }
  // console.log(findSums(7, 8, 9));


  // const nums = [22,55,44,99];
  // const n = [100, ...nums]; // split operator doesnot return array, if it is inside function returns array


  // const arr = [12, 13, 14, 15, 16]

  // arr.unshift(10);
  // console.log(arr);
  // arr.shift()
  // console.log(arr)

  // arr.fill("kiwi", 0, 1);
  // arr.fill("kiwi", 2);
  // console.log(arr);

  // console.log(arr.includes(16));
  // arr.splice(4, 1);
  // console.log(arr);
  // arr.splice(0, 2);
  // console.log(arr);

  // console.log(arr.concat(33, 44));

  // const mio = [...arr, 90, 100, 200];
  // console.log(mio);

  // arr.forEach((m, i) => {
  //   console.log(m);
  //   console.log(i);
  // })

  // const arr = [1, 2, 3, 4, 5, 0];
  // let x = arr.map((n) => {
  //   return n * 2;
  // });

  // const newArr = arr.find((n, i) => {
  //   return n > 3;
  // })

  // console.log(newArr);

  // const newArr = arr.filter((n, i) => {
  //   return n > 2;
  // })

  // console.log(newArr);

  // const odds = arr.filter((n, i) => {
  //   return n % 2 !== 0;
  // })

  // const evens = arr.filter((n, i) => {
  //   return n % 2 === 0;
  // })

  // const newA = arr.map((n) => n === 2 ? 100 : n);
  // console.log(newA);

  // const redu = arr.reduce((prev, next) => {
  //   return prev + next;
  // })


  // const persons = ["ram", "hari", "rabi", "shyam"];

  // const [a, b, c, d] = persons;

  // const arr = [5, 19, 27, 1, 3, 0, -1, 2, 99];
  // const smallest = arr.reduce((current, smallest) => {
  //   if (current < smallest) {
  //     return current;
  //   }
  //   return smallest;
  // });

  // const greatest = arr.reduce((current, greatest) => {
  //   if (current > greatest) {
  //     return current;
  //   }
  //   return greatest;
  // })

  // console.log(smallest);
  // console.log(greatest)
  // const movie = {
  //   title: "Avatar",
  //   detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, saepe?",
  //   released: 2023,
  //   poster: "assets/images/avatar.jpg"

  // };

  // const data = [{
  //   title: "Avatar",
  //   detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, saepe?",
  //   released: 2023,
  //   poster: "assets/images/avatar.jpg"

  // },
  // {
  //   title: "Avatar",
  //   detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, saepe?",
  //   released: 2023,
  //   poster: "assets/images/avatar.jpg"

  // },

  // {
  //   title: "Avatar",
  //   detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, saepe?",
  //   released: 2023,
  //   poster: "assets/images/avatar.jpg"

  // },
  // {
  //   title: "Avatar",
  //   detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, saepe?",
  //   released: 2023,
  //   poster: "assets/images/avatar.jpg"

  // }

  // ]

  const data = [
    {
      "strMeal": "Baked salmon with fennel & tomatoes",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/1548772327.jpg",
      "idMeal": "52959"
    },
    {
      "strMeal": "Cajun spiced fish tacos",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",
      "idMeal": "52819"
    },
    {
      "strMeal": "Escovitch Fish",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/1520084413.jpg",
      "idMeal": "52944"
    },
    {
      "strMeal": "Fish fofos",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/a15wsa1614349126.jpg",
      "idMeal": "53043"
    },
    {
      "strMeal": "Fish pie",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg",
      "idMeal": "52802"
    },
    {
      "strMeal": "Fish Stew with Rouille",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/vptqpw1511798500.jpg",
      "idMeal": "52918"
    },
    {
      "strMeal": "Garides Saganaki",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/wuvryu1468232995.jpg",
      "idMeal": "52764"
    },
    {
      "strMeal": "Grilled Portuguese sardines",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/lpd4wy1614347943.jpg",
      "idMeal": "53041"
    },
    {
      "strMeal": "Honey Teriyaki Salmon",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg",
      "idMeal": "52773"
    }];



  // const person = {
  //   name: "pratik",
  //   age: "26",
  //   add: function () {
  //     return this.age;
  //   }
  // }

  // console.log(person.add());


  return (


    <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">

      {data.map((item, i) => {
        return <div key={i} className='shadow-lg'>
          <img src={item.strMealThumb} alt="bbs" className='h-[300px] w-full' />
          <h1>{item.strMeal}</h1>
          <p>{item.idMeal}</p>

        </div>
      })}
      {/* {x.map((n, i) => {
        return <h1 key={i}> {n} </h1>;
      })};
      <p>Odds:</p>
      {odds.map((n, i) => {
        return <h1 key={i}>{n}</h1>;
      })}

      <p>Evens:</p>
      {evens.map((n, i) => {
        return <h1 key={i}>{n}</h1>;
      })}

      {a}
      {b}
      {c}
      {d}

      <div className='shadow-lg max-w-md '>
        <img src={movie.poster} alt="" className='h-[300px] w-[300px]' />
        <h1>{movie.title}</h1>
        <p>{movie.detail}</p>
        <p>Released:{movie.released}</p>

      </div>
 */}



    </div >


  )
}

export default App
