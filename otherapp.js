const axios = require(axios);

async function requestData() {
  let userInputData = document.getElementById("search_gify").value;
  const response = await axios.get(
    `http://api.giphy.com/v1/gifs/search?q=${userInputData}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
  );

  let data = response.data;
  console.log(data);
}
