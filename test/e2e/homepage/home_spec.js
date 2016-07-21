'use strict';

describe('Home page links', function() {

	var urlChanged = function(url) {
		return function () {
			return browser.getCurrentUrl().then(function(actualUrl) {
	  			return url != actualUrl;
			});
		};
	};

	beforeEach(function () {
		browser.get('http://localhost:3000');
	});

	xit('should go to login page after clicking login', function () {
		element(by.uiSref('login')).click();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/login');
	});

	xit('should go to signup page after clicking signup', function () {
		element(by.uiSref('register')).click();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/register');
	});

	it('should greet user if user is logged in', function () {
		var name = 'Peas';
		element(by.uiSref('login')).click();
		element(by.model('login.email')).sendKeys('peas@gmail.com');
		element(by.model('login.password')).sendKeys('eatyourpea');
		element(by.css('button')).click();
		// var greeting = browser.findElement(by.css('greeting'));
		// expect(greeting.getText()).toEqual('Hi Peas!');
		console.log(browser.getCurrentUrl());
	});

});