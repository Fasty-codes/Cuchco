import { Cube } from './components/cube3x3/cubejs';

export async function solveCube(cubeState) {
  // Convert our state format to cubejs format
  const cube = new Cube();
  
  // Map our state to cubejs notation
  const cubejsState = {
    up:    cubeState.U.map(colorToFace).join(''),
    down:  cubeState.D.map(colorToFace).join(''),
    front: cubeState.F.map(colorToFace).join(''),
    back:  cubeState.B.map(colorToFace).join(''),
    left:  cubeState.L.map(colorToFace).join(''),
    right: cubeState.R.map(colorToFace).join('')
  };

  cube.fromString(JSON.stringify(cubejsState));
  
  // Solve using two-phase algorithm
  return new Promise((resolve) => {
    cube.solve((solution) => {
      resolve(solution.split(' ').filter(move => move !== ''));
    });
  });
}

function colorToFace(color) {
  switch(color) {
    case 'white':  return 'U';
    case 'yellow': return 'D';
    case 'green':  return 'F';
    case 'blue':   return 'B';
    case 'orange': return 'L';
    case 'red':    return 'R';
    default:       return 'U';
  }
}
