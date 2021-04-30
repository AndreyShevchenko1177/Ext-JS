Ext.define('Library.view.BookList' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.booklist',
 
    title: 'Library',
    store: 'BookStore',
     
    initComponent: function() {
        this.columns = [
            {header: 'Title',  dataIndex: 'Title',  flex: 1},
            {header: 'Author',  dataIndex: 'Author',  flex: 1},
            {header: 'Year', dataIndex: 'Year', flex: 1},
            {header: 'Pages', dataIndex: 'Pages', flex: 1},
        ];
         
        this.callParent(arguments);
    }
});