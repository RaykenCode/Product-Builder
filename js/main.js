function ProductBuilder( element ) {
	this.element = element;
	this.stepsWrapper = this.element.children('.cd-builder-steps');
	//...
	this.bindEvents();
}


if( $('.cd-product-builder').length > 0 ) {
	$('.cd-product-builder').each(function(){
		//create a productBuilder object for each .cd-product-builder
		new ProductBuilder($(this));
	});
}

$.ajax({
    type       : "GET",
    dataType   : "html",
    url        : modelType+".html",
    beforeSend : function(){
    	self.loaded = false;
    },
    success    : function(data){
    	self.models.after(data);
    	self.loaded = true;
    	//...
    },
    error     : function(jqXHR, textStatus, errorThrown) {
       //...
    }
});

this.optionsLists.on('click', '.js-option', function(event){
	self.updateListOptions($(this));
});
