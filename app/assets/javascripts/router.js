Formjam.Router.reopen({
    location: 'history',
    rootURL: '/'
});

Formjam.Router.map(function() {
    this.resource('forms', function() {
        this.route('new');
        this.route('update');
        this.resource('form-fields', function() {
            this.route('new');
        });
    });
});

Formjam.IndexRoute = Ember.Route.extend({
    setupController: function(controller) {
        // Set the IndexController's `title`
        controller.set('title', "Formjam");
        this.controllerFor('application').set('currentRoute', 'home');
    }
});

Formjam.FormsRoute = Ember.Route.extend({
    setupController: function() {
        this.controllerFor('application').set('currentRoute', 'forms');
    }
})

Formjam.FormsNewRoute = Formjam.FormsRoute.extend({
    model: function() {
        var form = Formjam.FormSchema.createRecord({title: 'Untitled'});
        //form.addFormField();
        return form;
    },
    setupController: function(controller, model) {
        this._super();
        controller.set('content', model);
        this.controllerFor('application').set('currentRoute', 'forms.new');
    }
})

/*Formjam.FormFieldsNewRoute = Formjam.FormsRoute.extend({

});*/