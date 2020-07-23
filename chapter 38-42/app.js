//                                  ====== chapter38-42 ======
//question 1
// var a = prompt('Enter a: (must be a number)')
// var b = prompt('Enter b: (must be a number)')
// var result = raisedPower(a,b)
// document.write(+a+' to the power '+b+' is = '+result)
// function raisedPower(x,y){
//     var res = x ** y
//     return res
// }

//question 2
// var year = prompt('Enter any year:')
// determineLeap(year)

// function determineLeap(y){
//     if(y%4==0){
//         document.write(+y+' is a leap year')
//     }
//     else if(y%4!=0){
//         document.write(+y+' is not a leap year')
//     }
//     else{
//         document.write('Invalid Input')
//     }
// }

//question 3
// var a = +prompt('Enter 1st side of triangle')
// var b = +prompt('Enter 2nd side of triangle')
// var c = +prompt('Enter 3rd side of triangle')
// var s = calcS(a,b,c)
// detArea(s,a,b,c)

// function detArea(st,x,y,z){
//     var area = st*(st-x)*(st-y)*(st-z)
//     document.write(+area+ ' is the area of triangle')
// }

// function calcS(x,y,z){
//     var step = ( x + y + z ) / 2
//     return step
// }

//question 4
// var sub1 = +prompt('Enter marks of subject 1 (out of 100)')
// var sub2 = +prompt('Enter marks of subject 2 (out of 100)')
// var sub3 = +prompt('Enter marks of subject 3 (out of 100)')
// var average = detAvg(sub1,sub2,sub3)
// document.write('Average of Marks is '+ average + '<br>')
// var percentage = detPer(sub1,sub2,sub3)
// document.write('The percentage is ' +percentage+ '%')

// function detPer(a,b,c){
//     var perc = (a+b+c)*100 / 300
//     return perc 
// }

// function detAvg(x,y,z){
//     var avg = (x+y+z)/3
//     return avg
// }

//question 5
// var str1 = prompt('Enter your sentance')
// var findStr = prompt('Which word/letter index you have to find?')
// var indx = indexFunc(str1,findStr)
// document.write('The index at which ' +findStr+ ' is present is '+indx)

// function indexFunc(s,f){
//     var x
//     for(var i=0 ; i < s.length ; i++){
//         if(s.slice(i, i + f.length) === f)
//         {
//             x = i ;
//         }
//     }
//     return x
// }

//question 6
// var str1 = prompt('Enter a sentance')
// document.write(deleteVowels(str1))

// function deleteVowels(s){
//     var vowels = 'aeiou'
//     for(var i=0 ; i < s.length ; i++){
//         for(var j=0 ; j < vowels.length ; j++){
//             if(s[i] === vowels[j]){
//                 s = s.slice(0, i) + s.slice(i+1)
//                 console.log(s)
//             }
//         }
//     }
//     return s
// }

//question 7
// var str1 = prompt('Enter a sentence')
// document.write(dvOccurance(str1))

// function dvOccurance(s){
//     var x = 0
//     var vowels = 'aeiou'
//     for(var i = 0 ; i < s.length ; i++){
//         for(var j = 0 ; j < vowels.length ; j++){
//             if(s[i] === vowels[j]){
//                 for(var k = 0 ; k < vowels.length ; k++){
//                     if(s[i+1] === vowels[k]){
//                         x = x + 1
//                     }
//                 }
//             }
//         }
//     }
//     return x
// }

//question 8
// var distance = +prompt('Write distance between 2 cities (in km)')
// document.write('The distance in km was ' +distance+ '<br>')
// document.write('The distance in meters is ' +distMeter(distance)+ ' meters <br>' )
// document.write('The distance in meters is ' +distFeet(distance)+ ' feets <br>' )
// document.write('The distance in meters is ' +distInch(distance)+ ' inches <br>' )
// document.write('The distance in meters is ' +distCm(distance)+ ' cm <br>' )

// function distMeter(d){
//     return d*1000
// }
// function distFeet(d){
//     return d*3281
// }
// function distInch(d){
//     return d*39370
// }
// function distCm(d){
//     return d*100000
// }

//question 9
// var hours = +prompt('Enter hours worked')
// document.write('The overtime pay of employee is ' +overtimePay(hours))

// function overtimePay(h){
//     if(h>40){
//         var extraHours = h-40
//         var pay = extraHours*12
//     }
//     else{
//         var pay = 0
//     }
//     return pay
// }

//question 10
// var amount = +prompt('Enter amount to withdraw ')
// document.write("You will have *"+Math.floor(+amount/100)+ "* 100 rupee notes *" +Math.floor(+(amount%100)/50)+ "* rupee notes and *" +Math.floor(+((amount%100)%50)/10)+ "* 10 rupee notes")

