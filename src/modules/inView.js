const inView = (() => {

  const isFullyInViewPort = (element) => {
    const rect = element.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  };

  const isPartiallyInViewPort = (element) => {
    const rect = element.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.top <= (window.innerHeight / 2 || document.documentElement.clientHeight / 2) ||
      rect.bottom >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    )
  };

  return { 
    isFullyInViewPort,
    isPartiallyInViewPort
  }
})();

export default inView;
