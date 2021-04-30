Ext.define('Library.store.BookStore', {
	extend: 'Ext.data.Store',

	constructor: function(cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
			fields: ['Book_ID', 'Author', 'Title', 'Year', 'Pages'],
			storeId: 'BookStore',
			data: [{
                'Book_ID': 1,
                'Author': 'Joe Abercrombie',
                'Title': 'The Blade Itself',
                'Year': 2006,
                'Pages': 300
            },{
                'Book_ID': 2,
                'Author': 'Joe Abercrombie',
                'Title': 'Before They Are Hanged',
                'Year': 2007,
                'Pages': 400
            },{
                'Book_ID': 3,
                'Author': 'Joe Abercrombie',
                'Title': 'Last Argument of Kings',
                'Year': 2008,
                'Pages': 250
            },{
                'Book_ID': 4,
                'Author': 'George R. R. Martin',
                'Title': "A Game of Thrones",
                'Year': 1996,
                'Pages': 350
            },{
                'Book_ID': 5,
                'Author': 'George R. R. Martin',
                'Title': "A Clash of Kings",
                'Year': 1998,
                'Pages': 300
            },{
                'Book_ID': 6,
                'Author': 'George R. R. Martin',
                'Title': "A Feast for Crows",
                'Year': 2005,
                'Pages': 200
            },{
                'Book_ID': 7,
                'Author': 'Arthur Conan Doyle',
                'Title': "The Sign of the Four ",
                'Year': 1890,
                'Pages': 300
            },{
                'Book_ID': 8,
                'Author': 'Arthur Conan Doyle',
                'Title': "The Hound of the Baskervilles",
                'Year': 1901,
                'Pages': 240
            }]
		}, cfg)]);
	}
});
