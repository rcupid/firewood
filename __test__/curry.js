const mutil = (x, y, z) => {
  const result = x * y * z;
  console.log(result);
  return result
}

const curry1 = function (fn) {
  console.log(fn.length);

  const cb = (...args) => {
    if (args.length < fn.length) {
      return function () {
        args = args.concat([].slice.call(arguments))
        return cb.apply(null, args)
      }
    }
    return fn.apply(null, args)
  }
  return cb
}

curry1(mutil)(1)(2)(3)