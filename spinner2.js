const items = ['|   ', '/   ', '-   ', '\\   ', '|   ', '/   ', '-   ', '\\   ', '|   \n'];
const spinner = function() {
  let index = 0;
  const nextSpinItem = function() {
    if (index < items.length) {
      process.stdout.write(`\r${items[index]}`);
      index++;
      setTimeout(nextSpinItem, 200);
    }
  };
  nextSpinItem();
};
spinner();
