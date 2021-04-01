export function splitArr(str, radio) {
  switch (radio) {
    case 'spasi':
      return str.split(' ');

    case 'koma':
      return str.split(',');

    case 'koma-spasi':
      return str.split(', ');
      
    default:
      return null;
  }
}