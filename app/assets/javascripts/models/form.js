Formjam.FormSchema = DS.Model.extend({
    title: DS.attr('string'),
    description: DS.attr('string'),
    fields: DS.hasMany('Formjam.FormField'),
    field_count: DS.attr('number', {default: 0}),
    //owner: ,
    //numElements: 0,
    //elements: [],
    addFormField: function() {
        var fieldCount = this.get('field_count').count();

        var element = Formjam.FormField.createRecord({ 
            form: this,
            htmlElement: "input", 
            label: "Question " + fieldCount+1,
            name: "question_" + fieldCount+1,
            placeholderText: "Enter text here",
            classes: null,
            required: false
        });

        this.set('field_count', field_count+1)
    }
});

Formjam.FormField = DS.Model.extend({
    htmlElement: DS.attr('string'),
    label: DS.attr('string'),
    name: DS.attr('string'),
    placeholderText: DS.attr('string'),
    classes: DS.attr('string'),
    required: DS.attr('bool'),
    form: DS.belongsTo('Formjam.FormSchema'),
    displayHTML: function() {
        var name = this.get("name");
        var placeholderText = this.get("placeholderText");
        var output = '<input type="text" name="'+name+' placeholder="'+placeholderText+'" />';
        return new Handlebars.SafeString(output);
    }.property('name', 'placeholderText')
});