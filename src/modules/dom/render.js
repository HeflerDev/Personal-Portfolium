const render = (() => {
  const listeners = {
    about: document.getElementById('btn-about'),
    featured: document.getElementById('btn-featured'),
    portfolio: document.getElementById('btn-portfolio'),
    contact: document.getElementById('btn-contact')
  };

  const _createElement = (elId, elParent, elType = 'div', elClass = null) => {    
    document.createElement(elType);
  };

  const aboutTab = () => {
    // Should render the aboutTab
  };

  return {
    listeners
  }

})();

export default render;
