// document.addEventListener("DOMContentLoaded", function () {
  const tourPanoTextContent = document.getElementById("tourPanoTextContent");
  const ps = new PerfectScrollbar(tourPanoTextContent, {
    wheelSpeed: 0.2,
    wheelPropagation: false,
    // minScrollbarLength: 50,
    // maxScrollbarLength: 80,
    suppressScrollX: true,
  });
  ps.update();

  const tourPanoText = document.getElementById("tourPanoText");
  const tourPanoTextNumber = document.getElementById("tourPanoTextNumber");
  // const tourPanoTextContent = document.getElementById("tourPanoTextContent");
  const hidePanoText = () => {
    tourPanoText.style.left = "-285px";
  };
  const showPanoText = () => {
    tourPanoText.style.left = "0";
  };

  const fillPanoText = async (text) => {
    tourPanoTextNumber.innerHTML = `${Game.panoIndex}/${Game.placePanos}`;
    tourPanoTextContent.innerHTML = text;
    await asyncLoopPositive(() => tourPanoTextContent.innerHTML === text, 10);
    ps.update();
  };
// });
