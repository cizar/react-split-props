const createNewObject = () => ({});

const split = (object, ...args) => {
  const result = Array.from({length: args.length + 1}).map(createNewObject);
  for (let [key, value] of Object.entries(object)) {
    let index = args.findIndex((paths) => paths.includes(key));
    if (index < 0) {
      index = args.length;
    }
    result[index][key] = value;
  }
  return result;
};

export default split;
