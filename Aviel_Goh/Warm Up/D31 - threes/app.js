var input = function(num) {
  while (num > 1) {

    if (num % 3 == 0) {
      new_num = num / 3;
      console.log(num + ' 0');
    } else if ((num + 1) % 3 == 0) {
      new_num = (num + 1) / 3
      console.log(num + ' 1');
    } else if ((num - 1) % 3 == 0) {
      new_num = (num - 1) / 3
      console.log(num + ' -1');
    };

    num = new_num
  };
    console.log(num)
}
