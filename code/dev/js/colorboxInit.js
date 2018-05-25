const colorboxInit = (template) => {
  return  $.colorbox({
    html: template,
    transition: 'none',
    opacity: 0.5
  });
};

export default colorboxInit;