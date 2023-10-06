
const helpTourClick =()=>{
    launchPopupOutsideTour('outside/help/index.html','90%', '90%');
}
document.addEventListener("DOMContentLoaded", () => {



    const homeHelpDiv = document.getElementById('homeHelp');
    const homeCreditsDiv = document.getElementById('homeCredits');
  
    if (homeHelpDiv) {
      homeHelpDiv.addEventListener('click', () => {
        console.log('Has clicat a homeHelp');
        launchPopupOutsideTour('outside/help/index.html','90%', '90%');
    });
}

if (homeCreditsDiv) {
    homeCreditsDiv.addEventListener('click', () => {
        console.log('Has clicat a homeCredits');
        launchPopupOutsideTour('outside/credits/index.html','90%', '90%');
      });
    }
  });