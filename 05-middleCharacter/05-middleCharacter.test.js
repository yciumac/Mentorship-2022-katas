const getMiddle = require('./05-middleCharacter');

test('getMiddle', function () {
   var result = getMiddle("A");
   expect(result).toEqual("A");
});

test('getMiddle', function () {
   var result = getMiddle("Hello");
   expect(result).toEqual("l");
});

test('getMiddle', function () {
   var result = getMiddle("kata");
   expect(result).toEqual("at");
});

test('getMiddle', function () {
   var result = getMiddle("This kata");
   expect(result).toEqual(" ");
});

test('getMiddle', function () {
   var result = getMiddle("Fun kata");
   expect(result).toEqual(" k");
});