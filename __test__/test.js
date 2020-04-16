function getProducts (specs) {
  if (!specs || specs.length == 0) {
    return [];
  } else {
    return joinSpec([[]], specs, 0, specs.length - 1);
  }
  function joinSpec (prevProducts, specs, i, max) {
    var currentProducts = [], currentProduct, currentSpecs = specs[i];
    if (i > max) {
      return prevProducts;
    }
    prevProducts.forEach(function (prevProduct) {
      currentSpecs.forEach(function (spec) {
        currentProduct = prevProduct.slice(0);
        currentProduct.push(spec);
        currentProducts.push(currentProduct);
      });
    });
    return joinSpec(currentProducts, specs, ++i, max);
  }
}

console.log(getProducts([1, 2, 3]));
