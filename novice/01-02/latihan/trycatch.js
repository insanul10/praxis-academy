function f() {
    try {
      console.log(0);
      throw "sanul";
    } catch(e) {
      console.log(2);
      return true;
    } finally {
      console.log(4);
      return false;
    }
      
    console.log(5); // not reachable
  }
  f(); // alerts 0, 1, 3; returns false