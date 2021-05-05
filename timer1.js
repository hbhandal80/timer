const timer = process.argv.slice(2);

if (process.argv.slice < 3) {
  return;
}

for (const num of timer) {
  setTimeout(() => {
    if ((num > 0) && (num.isinteger)) {
      process.stdout.write('\x07');
    }
  }, (num * 1000));
}