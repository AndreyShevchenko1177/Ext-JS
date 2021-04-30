Ext.define('Library.controller.Books', {
    extend: 'Ext.app.Controller',
 
    views: ['BookList', 'Book'],
    stores: ['BookStore'],
    init: function() {
        this.control({
            'viewport > booklist': {
                itemdblclick: this.editBook
            },
            'bookwindow button[action=new]': {
                click: this.createBook
            },
            'bookwindow button[action=save]': {
                click: this.updateBook
            },
            'bookwindow button[action=delete]': {
                click: this.deleteBook
            }
        });
    },
    
    updateBook: function(button) {
        const win  = button.up('window'),
        store = Ext.widget('booklist').getStore(),
        form = win.down('form'),
        values = form.getValues();
        
        console.log(values);
    },
    
    createBook: function(button) {
        const win = button.up('window'),
        store = Ext.widget('booklist').getStore(),
        form = win.down('form'),
        values = form.getValues();
        
        console.log(values);
    },
    
    deleteBook: function(button) {
        const win  = button.up('window'),
        store = Ext.widget('booklist').getStore(),
        form = win.down('form');
    },

    editBook: function(grid, record) {
        const view = Ext.widget('bookwindow');
        view.down('form').loadRecord(record);
    }
});