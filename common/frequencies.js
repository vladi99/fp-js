export default arr => [...arr].reduce((acc, curr) => ({ ...acc, [curr]: acc[curr] ? acc[curr] + 1 : 1 }), {})
