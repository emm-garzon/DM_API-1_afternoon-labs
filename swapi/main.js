const getBtn = document.getElementById("get-btn");

const displayMessage = () => {
  console.log("button clicked!");
};

const getResidents = (event) => {
  axios
    .get("https://swapi.dev/api/planets?search=Alderaan")
    .then((res) => {
      //   console.log(res.data);
      for (let i = 0; i < res.data.results[0].residents.length; i++) {
        axios.get(res.data.results[0].residents[i]).then((res2) => {
          let newH2 = document.createElement("h2");
          newH2.textContent = res2.data.name;
          document.body.appendChild(newH2);
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

getBtn.addEventListener("click", getResidents);
