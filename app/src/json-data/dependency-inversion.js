export const dependencyInversion = {code:`
let SHAPES = {
  CIRCLE: 'Circle',
  RECTANGLE: 'Rectangle',
  SQUARE: 'Square',
  ROMBUS: 'Rombus',
};

interface Shape {
  draw;
}

class Circle implements Shape {
  draw() {
    console.log('new ' + SHAPES.CIRCLE);
  }
}

class Rectangle implements Shape {
  draw() {
    console.log('new ' + SHAPES.RECTANGLE);
  }
}

class Square implements Shape {
  draw() {
    console.log('new ' + SHAPES.SQUARE);
  }
}
`};
