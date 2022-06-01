export const scrollSmoothTo = (
  elementId,
  setting = { scrollMarginTop: "0px" }
) => {
  var element = document.getElementById(elementId);
  element.style.scrollMarginTop = setting.scrollMarginTop;
  element.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
};
