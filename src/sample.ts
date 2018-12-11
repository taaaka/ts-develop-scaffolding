function greet(message: string) {
  if (!message) {
    return 'You are anonymous!';
  } else {
    return `Hello, ${message}!!`;
  }
}

const name = 'abc';

console.log(greet(name));

export default greet;
