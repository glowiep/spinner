const items = ['|   ', '/   ', '-   ', '\\   '];
const spinner = function() {
  let index = 0;
  const nextSpinItem = function() {
      process.stdout.write(`\r${items[index]}`);
      index = (index + 1) % items.length
      setTimeout(nextSpinItem, 200);
  };
  nextSpinItem();
};
spinner();
