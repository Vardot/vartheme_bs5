/**
 * @param {array} sizes An array of columns sizes like: 50_50, 25_50_25, 25_25_25_25
 * @returns {array} An array of bootstrap classes
 */

export const getColumnsSizeClasses = (sizes) => {
  const sizesArr = sizes.split('_');
  const classes = [];
  sizesArr.map((size) => {
    switch (size) {
      case '25':
        classes.push('col-3');
        break;
      case '33':
        classes.push('col-4');
        break;
      case '50':
        classes.push('col-6');
        break;
      case '67':
        classes.push('col-8');
        break;
      case '75':
        classes.push('col-9');
        break;
      default:
        break;
    }
  });

  return classes;
}