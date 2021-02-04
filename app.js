const longestCommonPrefix = (strs) => {
  const prefixRegex = /[^aeiou]+/g;
  let prefixes = strs.map((item) => {
      let prefix = item.match(prefixRegex);
      return prefix[0];
    }),
    commonPrefix = [];
  for (let prefix of prefixes) {
    if (commonPrefix.indexOf(prefix) < 0) commonPrefix.push(prefix);
  }

  return prefixes.length === commonPrefix.length ? "" : commonPrefix[0];
};
