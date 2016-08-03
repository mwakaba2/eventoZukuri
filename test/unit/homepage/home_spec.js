'use strict';

describe('Home page', function() {
  it('sorts users in descending order by default', function() {
    var users = ['jack', 'igor', 'jeff'];
    var sorted = users.sort();
    expect(sorted).toEqual(['igor', 'jack', 'jeff']);
  });
});