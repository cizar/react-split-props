const splitProps = (props, ...args) => {
  const result = [];
  const mapping = args.reduce((accum, defs, index) => {
    for (let def of defs) {
      const [name, alias] = def.split(':');
      accum[name] = {name: alias || name, index};
    }
    return accum;
  }, {});
  for (let [key, value] of Object.entries(props)) {
    const def = mapping[key];
    const [index, name] = def ? [def.index, def.name] : [args.length, key];
    result[index] = {...result[index], [name]: value};
  }
  return result;
};

export default splitProps;
