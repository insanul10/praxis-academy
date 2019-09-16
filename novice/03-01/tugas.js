function f() {
    try {
      alert('start');
      throw new Error("an error");
    } catch (e) {
      // ...
      if("can't handle the error") {
        throw e;
      }
  
    } finally {
      alert('cleanup!')
    }
  }
  
  f();