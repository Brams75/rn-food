import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer qAMaC0pFz8lE_8lLxzOhlCEY4Dphmb8363Q2wOjqsD5_co8ChnRFZVcr1cCnenJPTXamr5NUuOq-LSv7hpyA8cn3bmIyHQsm08VkSgz-cidD1H71Z7dEilUD7tM1YnYx",
  },
});
