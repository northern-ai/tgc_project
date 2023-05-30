const multimediaoptionOpen = document.getElementById('multimediaoptionOpen');
multimediaoptionOpen.addEventListener('click', () => {
var copy = document.getElementById('copy_text');
copy.innerHTML = 'Copy Link';
var multimediaOptionMainContainer = document.getElementById('multimediaOptionMainContainer');
multimediaOptionMainContainer.className += ' open';
multimediaOptionMainContainer.style.cssText ='top:0;bottom:0;z-index:9';
});
const closeCart = document.getElementById('closeCart');
closeCart.addEventListener('click', () => {
var multimediaOptionMainContainer = document.getElementById('multimediaOptionMainContainer');
multimediaOptionMainContainer.classList.remove('open');
multimediaOptionMainContainer.style.cssText ='';
});
const overlaycontainer = document.getElementById('overlay-container');
overlaycontainer.addEventListener('click', () => {
var multimediaOptionMainContainer = document.getElementById('multimediaOptionMainContainer');
multimediaOptionMainContainer.classList.remove('open');
multimediaOptionMainContainer.style.cssText ='';
});
function copyToClipboard(elementId) {
var copyText = document.getElementById(elementId);
copyText.select();
copyText.setSelectionRange(0, 99999);
navigator.clipboard.writeText(copyText.value);
}
const copy_link = document.getElementById('copy_link');
copy_link.addEventListener('click', () => {
copyToClipboard('share_url');
});