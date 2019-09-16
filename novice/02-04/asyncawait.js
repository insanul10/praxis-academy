async function showAvatar() {

    // read our JSON
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();
  
    // read github user
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();
  
    // show the avatar
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
  
    // wait 3 seconds
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  
    img.remove();
  
    return githubUser;
  }
  
  showAvatar();
  
  let range = {
    from: 1,
    to: 5,
  
    // for await..of calls this method once in the very beginning
    [Symbol.asyncIterator]() { // (1)
      // ...it returns the iterator object:
      // onward, for await..of works only with that object,
      // asking it for next values using next()
      return {
        current: this.from,
        last: this.to,
  
        // next() is called on each iteration by the for..of loop
        async next() { // (2)
          // it should return the value as an object {done:.., value :...}
          // (automatically wrapped into a promise by async)
  
          // can use await inside, do async stuff:
          await new Promise(resolve => setTimeout(resolve, 1000)); // (3)
  
          if (this.current <= this.last) {
            return { done: false, value: this.current++ };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
  
  (async () => {
  
    for await (let value of range) { // (4)
      alert(value); // 1,2,3,4,5
    }
  
  })()