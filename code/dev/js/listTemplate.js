export default list => {
  list = list.map(li => `<li>${li.message}</li>`).join('');
  return `<ul class="error-list">${list}</ul>`
}