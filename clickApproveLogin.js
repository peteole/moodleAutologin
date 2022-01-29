const formElementWrappers=document.querySelectorAll('.form-element-wrapper');
const keepLoginWrapper=[...formElementWrappers].find(formElementWrapper=>formElementWrapper.innerHTML.includes('keep me logged in'));
const keepLoginCheckbox=keepLoginWrapper.getElementsByTagName("input")[0];
keepLoginCheckbox.checked=true;
const buttons=[...document.getElementsByTagName("button")]
const loginButton=buttons.find(button=>button.innerHTML==='Login');
loginButton.focus();