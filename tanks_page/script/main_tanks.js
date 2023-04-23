const btnValue = localStorage.getItem('lastClicked');
const paragraphNumResp = document.querySelector('.text-selected-number');

paragraphNumResp.innerHTML = `You selected ${Number(btnValue)} of 5`;