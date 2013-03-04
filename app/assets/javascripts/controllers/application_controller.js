Formjam.ApplicationController = Ember.Controller.extend({
    isNewForm: function() {
        return this.get('currentRoute') == 'forms.new'
    }.property('currentRoute')
});

Formjam.FormsNewController = Ember.ObjectController.extend({
    //content: null,
    /*createFormSchema: function(title) {
        var formSchema = Formjam.FormSchema.create({ title: title });
        formSchema.addFormField();
        this.set("content", formSchema);
    }*/
    addFormField: function() {
        var form = this.get('content');

        var element = Formjam.FormField.createRecord({ 
            form: form,
            htmlElement: "input", 
            label: "Question",
            name: "question",
            placeholderText: "Enter text here",
            classes: null,
            required: false
        });

        form.incrementProperty('field_count');
    }
})



//Formjam.

/*Formjam.FormController = Ember.ObjectController.extend({
});*/