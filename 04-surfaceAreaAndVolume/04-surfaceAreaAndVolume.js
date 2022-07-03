
function getSize(width, height, depth) {
   let volume = width * height * depth;
   let surfaceArea = 2 * (width * height) + 2 * (height * depth) + 2 * (width * depth);
   console.log()
   return { surfaceArea, volume }
};

module.exports = getSize; 