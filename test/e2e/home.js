'use strict';

describe('Home page links', function() {

	beforeEach(function () {
		browser.get('http://localhost:3000');
	});

	it('should go to login page after clicking login', function () {
		element(by.uiSref('login')).click();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/login');
	});

	it('should go to signup page after clicking signup', function () {
		element(by.uiSref('register')).click();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/register');
	});

	it('should greet user if user is logged in', function () {
		element(by.uiSref('login')).click();
		element(by.model('login.email')).sendKeys('peas@gmail.com');
		element(by.model('login.password')).sendKeys('eatyourpea');
		element(by.css(':button')).click();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/');
	});

});