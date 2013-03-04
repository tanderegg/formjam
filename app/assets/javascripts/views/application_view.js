Formjam.EditField = Em.View.extend({
  tagName: 'span',
  templateName: 'edit-field',
  isEditing: false,

  doubleClick: function() {
    this.set('isEditing', true);
    return false;
  },

  touchEnd: function() {
    // Rudimentary double tap support, could be improved
    var touchTime = new Date();
    if (this._lastTouchTime && touchTime - this._lastTouchTime < 250) {
      this.doubleClick();
      this._lastTouchTime = null;
    } else {
      this._lastTouchTime = touchTime;
    }

    // Prevent zooming
    return false;
  },

  focusOut: function() {
    this.set('isEditing', false);
  },

  keyUp: function(evt) {
    if (evt.keyCode === 13) {
      this.set('isEditing', false);
    }
  }
});

Em.Handlebars.registerHelper('editable', function(path, options) {
  options.hash.valueBinding = path;
  return Em.Handlebars.helpers.view.call(this, Formjam.EditField, options);
});

Formjam.ApplicationView = Ember.View.extend({
    templateName: 'application'
});

/*Formjam.CreateFormSchemaView = Em.TextField.extend({
    insertNewline: function() {
        var value = this.get('value');

        if(value) {
            Formjam.FormSchemaController.createFormSchema(value);
        }
    }
    //templateName: 'form_schema/new'
});

Formjam.EditFormSchemaView = Em.View.extend({
    controllerBinding: 'Formjam.FormSchemaController',
    classNames: ['form-schema'],
    addFormField: function() {
        var formSchema = this.get('content');
        formSchema.addFormField();
    }
});
*/