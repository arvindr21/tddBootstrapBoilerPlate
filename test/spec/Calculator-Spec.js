'use strict';

(function () {
    describe("Calculator - Add", function() {
		it("Correct SUM", function() {
			var sum = Calculator.add(5,6);
			expect(sum).toEqual(11);
		});

		it("In-Correct SUM", function() {
			var sum = Calculator.add(5,6);
			expect(sum).not.toEqual(9);
		});
	});
	

	describe("Calculator - Subtract", function() {
		it("Correct Difference", function() {
			var diff = Calculator.subtract(9,6);
			expect(diff).toEqual(3);
		});

		it("In-Correct Difference", function() {
			var diff = Calculator.subtract(9,6);
			expect(diff).not.toEqual(2);
		});
	});

	describe("Calculator - Multiply", function() {
		it("Correct Product", function() {
			var product = Calculator.multiply(3,3);
			expect(product).toEqual(9);
		});

		it("In-Correct Product", function() {
			var product = Calculator.multiply(3,3);
			expect(product).not.toEqual(11);
		});
	});


	describe("Calculator - Division", function() {
		it("Correct Reminder ", function() {
			var reminder  = Calculator.divide(6,2);
			expect(reminder).toEqual(3);
		});

		it("In-Correct Reminder", function() {
			var reminder = Calculator.divide(6,2);
			expect(reminder).not.toEqual(5);
		});

	});


	describe("Calculator - Modulo", function() {
		it("Correct Quot", function() {
			var quot = Calculator.modulo(6,2);
			expect(quot).toEqual(0);
		});

		it("In-Correct Quot", function() {
			var quot = Calculator.modulo(6,2);
			expect(quot).not.toEqual(1);
		});
	});

})();
