//Redirecting to blog page
document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "html/blog.html";
});
const calculate = document.getElementsByClassName("calculate");
let indexNumber = 0;
for (const calc of calculate) {
  calc.addEventListener("click", function (event) {
    //getting the input fields by clicking the button
    const child = event.target.parentNode.childNodes;
    let input1 = child[7].children[0];
    let input2 = child[7].children[2];
    let value1 = parseFloat(input1.value);
    let value2 = parseFloat(input2.value);
    const genaralCalculation = value1 * value2;
    const calculateId = event.target.id;
    let result = 0;
    indexNumber++;
    //The main calculation
    if (isNaN(genaralCalculation)) {
      alert("please enter an number");
    } else {
      if (calculateId == "rectangle" || calculateId == "parallelogram") {
        result = genaralCalculation;
        result = result.toFixed(2);
      } else if (
        calculateId == "triangle" ||
        calculateId == "rhombus" ||
        calculateId == "pentagon"
      ) {
        result = genaralCalculation * 0.5;
        result = result.toFixed(2);
      } else if (calculateId == "ellipse") {
        result = genaralCalculation * 3.1415;
        result = result.toFixed(2);
      }
//This part will create the output values of calculated text and work as a template (table template)
      const table = document.getElementById("tr-container");
      const tableRow = document.createElement("tr");
      const tableData1 = document.createElement("td");
      const tableData2 = document.createElement("td");
      const tableData3 = document.createElement("td");
      tableData1.innerHTML = indexNumber + ". " + calculateId;
      tableData2.innerHTML = result + " cm <sup>2</sup>";
      tableData3.innerHTML =
        '<button class="mbtn">convert to m <sup>2</sup> </button>';
      tableRow.append(tableData1, tableData2, tableData3);
      table.appendChild(tableRow);
      input1.value = "";
      input2.value = "";
    }
  });
}
//This function genarates random color
let gridSections = document.getElementsByClassName("grid-boxs");
for (const gridSection of gridSections) {
  gridSection.addEventListener("mouseenter", function (event) {
    let random1 = Math.floor(Math.random() * 256);
    let random2 = Math.floor(Math.random() * 256);
    let random3 = Math.floor(Math.random() * 256);
    event.target.style.backgroundColor =
      "rgb(" + random1 + "," + random2 + "," + random3 + ")";
  });
}
