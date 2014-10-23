var templateLoader = {
	templates : {},
    load: function(type, views, callback) {
        var self = this;
        var deferreds = [];
        $.each(views, function(index, view) {
            if(self.templates[view] == null){
                deferreds.push($.get('assets/templates/'+ type+ '/' + view + '.html', function(data) {
                    self.templates[view] = _.template(data);
                }, 'html'));
            }
        });
        $.when.apply(null, deferreds).done(callback);
    }
};
