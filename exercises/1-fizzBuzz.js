'use strict'
/* # Exercice: Fizz Buuz
 *
 * ## Explanation:
 * You must code a function that given an integer n will output an array of length n such that:
 *  - On indexes multiple of 3 it contains 'fizz'
 *  - On indexes multiple of 5 it contains 'buzz'
 *  - On indexes multiple of 3 and 5 it contains 'fizzbuzz'
 *  - On every other index it contains ''
 *
 * ## Example:
 *```
 *fizzBuzz(6) === ['fizzbuzz', '', '', 'fizz', '', 'buzz']
 *```
 *
 * ## Expected Time
 * You should spend around 5 minutes on this exercice
 *
 * ## Further Notice
 * You have more examples in <root>/validations/1-fizzBuzz.validation.js
 */

function fizzBuzz(n) {
  var START = 1,END = n + 1;
	
  var FizzBuzz = function(num){
    if(num%15==0) return 'FizzBuzz';
    if(num%5==0) return 'Buzz';
    if(num%3==0) return 'Fizz';
    return num;   
  }
         
  var list = d3.range(START,END).map(FizzBuzz);

  
  var dataSet = [];
  for(var i=0; i < END; i+=10){
    dataSet.push( list.slice(i, i+10) )
  }

  var table = d3.select('#table')

  var tr = table.selectAll('tr')
    .data(dataSet)
      
  var newTr = tr.enter().append('tr')
  
  tr.exit().remove()	

  var td = tr.merge(newTr).selectAll('td')
    .data(function(d){ return d })
    
  td.enter().append('td')
    .text(function(d){ return d })
    .attr("class", function(d){ return (isNaN(+d)) ? d : null ; })
   
  td.exit().remove()
}

module.exports = fizzBuzz
