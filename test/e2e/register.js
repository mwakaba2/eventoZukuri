'use strict';

describe('Login page links', function() {
	
	beforeEach(function () {
		browser.get('http://localhost:3000/#/register');
	});

	it('should go to home page after clicking home', function () {
		element(by.uiSref('home')).click();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/');
	});

	it('should go to login page after clicking login', function () {
		element(by.uiSref('login')).click();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/login');
	});

});