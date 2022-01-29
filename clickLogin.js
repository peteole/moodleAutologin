const linkElements=document.getElementsByTagName('a')
const loginLink=[...linkElements].find(link=>link.innerText==='TUM LOGIN'||link.innerText==='With TUM ID')
window.location.href=loginLink.href