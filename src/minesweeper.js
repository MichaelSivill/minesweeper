const boardSize = 10;
const numberOfBombs = 10;
let hiddenBoard = [];
let visibleBoard = [];


let generateBoard = (dim) =>
{
  let matrix = [];
  for(i=0;i<dim;i++)
  {
    matrix.push([]);
    for(j=0;j<dim;j++)
    {
      matrix[i].push(' ');
    }
  }
  return matrix;
}

const printBoard = (matrix) =>
{
  console.log('Current Board:');

  for(i=0;i<matrix.length;i++)
    {
      console.log(matrix[i].join(' | '));
    }
}

const setBombs = (numBombs,setBoard) =>
{
  let gridSize = setBoard.length;
  let tempX = Math.floor(Math.random()*gridSize);
  let tempY = Math.floor(Math.random()*gridSize);
  let i = 0;
  while(i<numBombs)
  {
    if(setBoard[tempY][tempX] !== 'B')
    {
      setBoard[tempY][tempX] = 'B';
      i++;
    }
    tempX = Math.floor(Math.random()*gridSize);
    tempY = Math.floor(Math.random()*gridSize);
  }
}

const setNumbers = (matrix) =>
{
  for(i=0;i<matrix.length;i++)
  {
    for(j=0;j<matrix.length;j++)
    {
      if(matrix[i][j]==='B')
      {
        for(k=i-1;k<=i+1;k++)
        {
          for(l=j-1;l<=j+1;l++)
          {
            if( k>=0 && k<matrix.length && l>=0 && l<matrix.length)
            {
              switch(matrix[k][l])
              {
                case 'B':
                break;
                case ' ':
                matrix[k][l]='1';
                break;
                case '1':
                matrix[k][l]='2';
                break;
                case '2':
                matrix[k][l]='3';
                break;
                case '3':
                matrix[k][l]='4';
                break;
                case '4':
                matrix[k][l]='5';
                break;
                case '5':
                matrix[k][l]='6';
                break;
                case '6':
                matrix[k][l]='7';
                break;
                case '7':
                matrix[k][l]='8';
                break;
                default:
                break;
              }
            }
          }
        }
      }
    }
  }
  return matrix;
}

const guess = (tempX,tempY,hidden,visible) =>
{
  position = [tempX,tempY]
  direction = 'u';
  firstHit = false;
}

const revealSquare = (tempX,tempY,hidden,visible) =>
{
  if(hidden[tempX][tempY]==='B')
  {
    return -1;
  }
  else if (hidden[tempX][tempY]===' ')
  {
    for(k=tempX-1;k<=tempX+1;k++)
    {
      for(l=tempY-1;l<=tempY+1;l++)
      {
        if( k>=0 && k<hidden.length && l>=0 && l<hidden.length)
        {
          visible[k][l] = hidden[k][l];
        }
      }
    }
  }
  else
  {
    visible[tempX][tempY] = hidden[tempX][tempY];
  }
  return visible;
}



hiddenBoard = generateBoard(boardSize);
visibleBoard = generateBoard(boardSize);
setBombs(numberOfBombs,hiddenBoard);
hiddenBoard = setNumbers(hiddenBoard);

printBoard(hiddenBoard);
visibleBoard = revealSquare(5,5,hiddenBoard,visibleBoard);
printBoard(visibleBoard);
