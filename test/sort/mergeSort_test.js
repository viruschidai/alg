'use strict';

var mergeSort = require('../../lib/sort/mergeSort');
var should = require('should');

describe('mergeSort', function () {

  it('should return undefined when the array is undefined', function () {
    should(mergeSort()).be.undefined;
  })

  it('should work when the array only contains one element', function () {
    should(mergeSort([1])).eql([1]);
  })

  it('should work when the array contains two elements', function () {
    should(mergeSort([2, 1])).eql([1, 2]);
  })

  it('should work when the array contains more than two elements', function () {
    should(mergeSort([2, 1, 6, 9, 7, 5, 8])).eql([1, 2, 5, 6, 7, 8, 9]);
  })
});
