let btn1 = document.querySelector("#btn");
let curr_mode = 'light';
btn1.addEventListener("click", () => {
    // console.log("change")
    if (curr_mode === "light") {
        curr_mode = "dark";
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");

    }
    else {
        curr_mode = "light";
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
    }
    console.log(curr_mode);
});