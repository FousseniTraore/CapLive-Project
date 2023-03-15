const btnComp = document.getElementById("button-comp");
const btnViewOnly = document.getElementById("button-view");
const compForm = document.getElementById("comparison-form");
const viewOnlyForm = document.getElementById("viewOnly-form");

btnComp.addEventListener('click', function() {
    compForm.style.display = 'block';
    viewOnlyForm.style.display = 'none';
  });
  
  viewOnlyForm.addEventListener('click', function() {
    compForm.style.display = 'none';
    viewOnlyForm.style.display = 'block';
  });