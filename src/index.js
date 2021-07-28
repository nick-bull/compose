export const compose = (...fns) => fns.reduceRight((acc, val) =>
  (...args) => val(acc(...args)),
);
export const pipe = (...fns) => compose(...fns.reverse());

