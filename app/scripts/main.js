/*!
 * A LESS driven Bootstrap boilerplate integrated with Grunt, Bower, Jasmine, Istanbul & Karma
 * https://github.com/arvindr21/bootstrapBoilerPlate
 *
 * author : Arvind Ravulavaru
 * purpose : A sample source file consiting of couple of function to demo the placeholder for testing source
 * 
 */

'use strict';

/*
 * All logic needs to be isolated and written in such a way that each piece of the logic can be tested.
*/

function helloWorld() {
    return 'Hello world!';
};

// a sample calculator function to showcase a test driven approach

var Calculator  = {};

Calculator.add= function(a,b)
{
	return (a+b);
};

Calculator.subtract= function(a,b)
{
	return (a-b);
};

Calculator.multiply= function(a,b)
{
	return (a*b);
};

Calculator.divide= function(a,b)
{
	return (a/b);
};

Calculator.modulo= function(a,b)
{
	return (a%b);
};


function arraySort(list)
{
	list.sort(function(itemA, itemB)
	{
		return itemA > itemB;	
	});
}