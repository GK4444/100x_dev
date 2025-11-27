firstName = "gk"
age = 28
married = true

// if-else
if (married){
    console.log('name:' + firstName + ' and age: '+ age + ' is married.')
}else{
    console.log('name:' + firstName + ' and age: '+ age + ' is not married.')
}

// loops
sum = 0
for (i=0; i<=10; i=i+1){
    sum += i
}
console.log(sum)

// arrays
console.log('even numbers:')
numbers = [1,2,3,4,5]
for(i=0; i<numbers.length; i+=1){
    if (numbers[i]%2 == 0){
        console.log(numbers[i])
    }
}
biggestNum = numbers[0]
for(i=1; i<numbers.length; i=i+1){
    if(numbers[i] > biggestNum){
        biggestNum = numbers[i]
    }
}
console.log('biggestNum: '+biggestNum)

// complex objects
personDetails = [
    {
        firstName: "gk",
        gender: "male"
    },
    {
        firstName: "rk",
        gender: "female"
    }
]
console.log('male persons:')
for(i=0;i<personDetails.length;i=i+1){
    details = personDetails[i]
    if (details['gender']=='male'){
        console.log(details['firstName'])
    }
        
}

// functions and callbacks
function getsum(num1, num2, fnToCall){
    let result = num1 + num2
    fnToCall(result)
}
 function displayResult(data){
    console.log('Result of the sum is: '+data)
 }

 function displayResultPassive(data){
    console.log("Sum's result is: "+data)
 }

 // You are only allowed to call one function after this
 // How would you displayResult of a sum
 getsum(4,4,displayResult)
 getsum(1,4,displayResultPassive)