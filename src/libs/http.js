// usamos static para que sea singleton y no tegamos que crear objetos cada rato de ella
class http {
  static instance = new http();

  get = async (url) => {
    try {
      let req = await fetch(url);

      let json = await req.json();

      return json;

    } catch (error) {
      console.log("get error", error);
      throw Error(error);
    }
  }

  post = async (url, body) => {
    try {
      let req = await fetch(url, {
        method: "POST",
        body
      });
      let json = await req.json();
      return json; 
    } catch (error) {
      console.log("post error", error);
      throw Error(error);
    }
  }
}

export default http;
