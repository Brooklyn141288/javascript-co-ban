// alert("Hello Javascript Basic !")
// var fullName = "Pham Khac Van";
// var age = 34;
// // Khi khai báo biến thì nhờ cú pháp của nó là text hay giá trị
// /**
//  * Khai báo biến
//  * Xác định giá trị
//  */
// alert(fullName);
// alert(age) 
 
// var language = 'Javascript';
// console.log(language);
// confirm("Ban can xac nhan du tuoi de hoc")
// prompt("Dien so tuoi vao day")
// setTimeout( function() {
//     alert("Hien len nao")
// }, 3000)
// setInterval( function() {
//     console.log('Chay ra xem nao' + Math.random() )
// },
// 1000
// Lưu ý khi viết hàm nhớ là ko có dấu bên trong, text thì cần '',
// còn giá trị thì không cần
// function showMessage() {
//     var fullName = 'Pham Khac Van';
//     console.log(fullName)
    
// }
// showMessage();
// var myInfor = {
//     name: 'PHAM KHAC VAN',
//     age: 34,
//     address: 'Thai Binh, Vietnam',
//     gender: 'Male',
//     getName: function() {
//         return this.name;
//     }

// };

// // Function --> Phuong thuc / method
// // Others--> Thuoc tinh / property / Attribute
// console.log(myInfor.getName());


// Nếu mà nhập dang 'myKey' thì dữ liệu sẽ hiểu là
// sẽ tìm vào phần myInfor để tìm myKey nhưng mà myKey
//ko có ở đó


 // OBJECT CONSTRUCTOR: 

 //Thuộc tính này như là bảng thiết kế của ngôi nhà, làm trước sau đó xây dựng 
//cho đối tượng giá trị mới
// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
//     this.getName = function(){
//         return`${this.firstName} ${this.lastName}` // câu trú hàm nối là có giá trị trả về
//     }
// }
// var author = new User('Pham', 'Van', 'avatar');
// var user = new User('Pham', 'Vien', 'avatar');
// author.tittle = 'Chia se de sang tao';
// user.comment = 'thich comment'

// console.log(author.getName())
// console.log(user.getName())


// KHAI NIEM OBJECT PROTOTYPE - BASIC
// Nó được hiểu như là thêm phần vật liệu xây ngôi nhà, nằm ngoài phần thiết kế của ngôi nhà

// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
//     this.getName = function(){
//         return`${this.firstName} ${this.lastName}` // câu trú hàm nối là có giá trị trả về
//     }
// }

// User.prototype.className = 'F8';
// User.prototype.getClassName = function() {
//     return this.className;
// }

// var author = new User('Pham', 'Van', 'avatar');
// var user = new User('Pham', 'Vien', 'avatar');
// author.tittle = 'Chia se de sang tao';
// user.comment = 'thich comment'

// console.log(author)
// console.log(user)

// DOI TUONG DATE


// var date = new Date();

// var year = date.getFullYear();
// var month = date.getMonth()+1;
// var day = date.getDate();
// var minutes = date.getMinutes();
// var second = date.getSeconds();
// var timeZone = date.getTimezoneOffset();

// console.log(timeZone)


// CAU DIEU KIEN RE NHANH -  ELSE IF


// var date = 6;

// if(date === 3){
//     console.log('HOM NAY NAY THU 2')
// } else if(date === 4 ) {
//     console.log('HOM NAY LA THU 4')
// } else{
//     console.log('eo biet')
// }

// CAU DIEU KIEN RE NHANH - SWITCH

// var date = 3;

// switch(date) {
//     case 2:
//         console.log('HOM NAY LA THU 2');
//         break;
//      case 3:
//         console.log('HOM NAY LA THU 3');
//         break;
//     case 4:
//         console.log('HOM NAY LA THU 4');
//         break;
// }


// VONG LAP FOR

// var myArray = [
//     'javascript',
//     'PHP',
//     'Java',
//     'Dart',
//     'Ruby',
// ];
// var arrayLength = myArray.length;

// // console.log(myArray[0])
// for (var i = 0; i < arrayLength; i++) {
//     console.log(myArray[i]);
//     // console.log(i)
// }

// FOR / in loop 
// var myInfor = 'PHAM AN NHIEN'
// for ( var key in myInfor) {
//     console.log(myInfor[key]);
// }

// { DUNG CHO Object }
// [DUNG CHO MANG]


//FOR / OF LOOP
// var myInfor = {
//     name:  'PHAM VAN',
//     age: 35,
// };





// for( var value of Object.values(myInfor)) {
//     console.log(value)
// }
// muốn thay đổi chữ giống nhau ở các vị trí khác nhau thì
//dùng Command + L sau đó rồi sẽ tự động điều chỉnh sửa.


// vòng lặp WHITE LOOP

// var myArray = [
//     'Javascript',
//     'PHP'
// ]

// var i = 0;

// while (i < myArray.length) {
//     console.log(myArray[i]);
//     i++;
   
// }

// VÒNG LẶP do / while 

//  var i = 0;
//  var isSuccess = false;
//  do {
//     i++;

//     console.log('Nap the lan: ' +i);
//     // that bai
//     if(false) {
//         isSuccess = true;
//     }
//  } while (!isSuccess && i <= 3);
// var i = 0;
// do {
//     i++;
//     console.log(i);
// } while(i < 10);

// VÒNG LẶP BREAK VÀ CONTINUE


// for (var i =0; i < 20; i++) {
   
//    if(i%2 > 0) {
//     continue;
//    }
   
//     console.log(i)

    
// }

// // var myArray = [
// //     [1, 2],
// //     [3, 4],
// //     [5, 6]
// // ];
// // for (var i =0; i < myArray.length; i++) {
// //     for ( var j = 0; j < myArray[i].length; j++) {
// //         console.log(myArray[i][j]);
// //     }
//     // console.log(myArray[i]);
// }

// for(var i = 0; i <=100; i += 5){
//     console.log(i)
// }
// PHƯƠNG THỨC ARRAY,  được hiểu là phương thức call back
/*    forEach() >> duyệt qua từng phần tử của mảng
      every() >> kiểm tra các phần tử phải thoả mãn một điều kiện gì đó, và giá trị trả về là boolen ( true or false)
      some() >> chỉ cần 1 điều kiện thoả mãn là sẽ dừng điều kiện lặp
      find()  >> Tìm chỉ được 1 giá trị trong phần tử
      filter()
      map() >> muốn thay đổi 1 element của 1 array
      reduce()
*/

var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250,
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 100,
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 3,
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400,
    }, 
    {
        id: 5,
        name: 'Ruby',
        coin: 40,
    },
]

// courses.forEach(function(course, index) {
//     console.log(index, course);
// });
// Phần tử đặt ở dạng số ít ( course chứ không phải courses) trong hàm function.


// var isFree = courses.every(function(course, index) {
//     console.log(index);
//     return course.coin !== 0;
// });

// console.log(isFree);


// var isFree = courses.some(function(course, index) {
//     console.log(index);
//     return course.coin !== 0;
// });

// console.log(isFree);

// var isFree = courses.find(function(course, index) {
//     // console.log(index);
//     return course.name === 'Ruby';
// });

// console.log(isFree);

// var isFree = courses.filter(function(course, index) {
//     // console.log(index);
//     return course.name === 'Ruby';
// });

// console.log(isFree);

// Map() kiểu như thêm dữ liệu vào trong mảng
// function courseHandler(course, index, originArray) {
//     return {
//         id: course.id,
//         name: `Khoa hoc ${course.name}`,
//         coin: course.coin,
//         coinText: `Gia ${course.coin}`,
//         index: index,
//         originArray: originArray,

//     };
// }

// var newCourses = courses.map(courseHandler);
// console.log(newCourses);

// REDUCE() 
// var i = 0;

// function coinHandler(accumulator, currentValue) {
//     i++;
    
//     console.table({
//         'Luot chay: ': i,
//         'Bien tich tru: ': accumulator,
//         'Gía khoá học: ': currentValue.coin,
    

//     });
//     return accumulator + currentValue.coin;
// }

// var totalCoin = courses.reduce(coinHandler, 0);

// console.log(totalCoin);
// var totalCoin = courses.reduce(function(total, course){
//     return total + course.coin;
// }, 0);
// console.log(totalCoin);

// var numbers = [100, 200, 220, 200, 480]

// var totalNumbers = numbers.reduce(function (total, number){
//     return total + number;
// }, 0);
// console.log(totalNumbers);

// depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
// var flatArray = depthArray.reduce(function(flatOuput, depthItems){
//         return flatOuput.concat(depthItems);
        
// }, []); 
// console.log(flatArray);]

// PHƯƠNG THỨC INCLUDES
// chỉ dùng cho STRING và ARRAY
//  var course = ['Javascript', 'PHP', 'Dart']

//  console.log(course.includes('Javascript', 1));
// console.log(Math.floor(Math.random()*14));
console.log(Math.round(2.45));