document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!

  const listFormEl = document.getElementsByClassName("list-container")[0];
  // const formEl = listFormEl.form;

  // console.log(formEl);

  listFormEl.addEventListener("submit", event => {
    // **cancel** the event; if the event were not canceled the browser
    // would try to submit the form for real.
    event.preventDefault();

    console.log(event.currentTarget);
    // // Get the name input element (type `HTMLInputElement`), get the
    // // value, and clear it.
    const listFormInput = document.getElementsByClassName("favorite-input");
    const inputValue = listFormInput[0].value;
    listFormInput[0].value = "";

    console.log(inputValue);

    // // Get the ul of cats.
    const ul = document.getElementById("sf-places");
    // // create an li element
    const li = document.createElement("li");
    // // set the text of the li to be the value of the input field
    li.textContent = inputValue;

    console.log(li);
    //
    // // insert it as the last item in the ul.
    ul.appendChild(li);
  });


  // adding new photos

  // --- your code here!

  const picFormButton = document.getElementsByClassName("photo-show-button")[0];

  picFormButton.addEventListener("click", event => {
    let picFormel = document.getElementsByClassName("photo-form-container")[0];

    picFormel.style.visibility = "visible";
  });
});
