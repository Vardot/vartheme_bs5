export const removeElementOnClick = (clickedElementId, elementToRemoveId) => {
  document.getElementById(clickedElementId).addEventListener('click', (event) => {
    document.getElementById(elementToRemoveId).style.display = 'none';
  })
}