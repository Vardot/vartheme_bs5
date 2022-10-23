/**
 * @param {array} sizes An array of columns sizes like: 50_50, 25_50_25, 25_25_25_25
 * @param {string} screenSize Screen size prefix: xxl, xl, lg, md, sm
 *
 * @returns {array} An array of bootstrap classes
 */

export const getColumnsSizeClasses = (sizes, screenSize) => {
  const sizesArr = sizes.split("_");
  const classes = [];
  sizesArr.map((size) => {
    switch (size) {
      case "16":
        classes.push(`col-${screenSize}-2`);
        break;
      case "25":
        classes.push(`col-${screenSize}-3`);
        break;
      case "33":
        classes.push(`col-${screenSize}-4`);
        break;
      case "50":
        classes.push(`col-${screenSize}-6`);
        break;
      case "67":
        classes.push(`col-${screenSize}-8`);
        break;
      case "75":
        classes.push(`col-${screenSize}-9`);
        break;
      case "100":
        classes.push(`col-${screenSize}-12`);
        break;
      default:
        break;
    }
  });

  return classes;
};
