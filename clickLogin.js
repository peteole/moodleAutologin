const linkElements=document.getElementsByTagName('a')
const loginLink=[...linkElements].find(link=>link.innerText==='TUM LOGIN')
window.location.href=loginLink.href