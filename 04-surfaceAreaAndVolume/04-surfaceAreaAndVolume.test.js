const getSize = require('./04-surfaceAreaAndVolume');

describe('getSize', () => {
   it('should find the total surface area and volume of a box', () => {
      expect(getSize(20, 10, 10)).toEqual({ surfaceArea: 1000, volume: 2000 });
   });
});
