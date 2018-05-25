// jquery plugins
import 'jquery-validation';
import 'jquery-colorbox';

// other scripts & configs
import errorTemplate from './listTemplate';
import validationConfig from './validationConfig';
import colorboxInit from './colorboxInit';

$(document).ready(function(){

  $('.js-main-form').validate({
    //some validation basic configs
    ...validationConfig,

    //validation methods
    submitHandler: (form) => {
      // submit via Ajax if no form errors
      $.ajax({
        type: 'POST',
        url: 'https//some-webservices.de',
        data: $(form).serialize(), 
        success: (response) => {
          const template = '<p class="msg-success">Successfully sent</p>';
          colorboxInit(template);
        },
        error: (error) => {
          const template = '<p class="msg-error">Service not available at the moment</p>';
          colorboxInit(template);
        }
      });
    },
    invalidHandler: (e,validator) => {
      // display fields error on the colorbox
      const template = errorTemplate(validator.errorList);
      colorboxInit(template);
    }
  });

});