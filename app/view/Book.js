Ext.define('Library.view.Book', {
    extend: 'Ext.window.Window',
    alias: 'widget.bookwindow',
 
    title: 'Book',
    layout: 'fit',
    autoShow: true,
 
    initComponent: function() {
        this.items = [{
            xtype: 'form',
            items: [{
                    xtype: 'hidden',
                    name: 'Book_ID'
                },{
                    xtype: 'textfield',
                    name : 'Title',
                    fieldLabel: 'Title'
                },{
                    xtype: 'textfield',
                    name : 'Author',
                    fieldLabel: 'Author'
                },{
                    xtype: 'numberfield',
                    name : 'Year',
                    fieldLabel: 'Year',
                    minValue: 1,
                },{
                    xtype: 'numberfield',
                    name : 'Pages',
                    fieldLabel: 'Pages',
                    minValue: 1,
            }]
        }];

        this.dockedItems=[{
            xtype:'toolbar',
            docked: 'top',
            items: [{
                text:'Create',
                cls:'create-btn',
                action: 'new'
            },{
                text:'Save',
                cls:'save-btn',
                action: 'save'
            },{
                text:'Delete',
                cls:'delete-btn',
                action: 'delete'
            }]
        }];
 
        this.callParent(arguments);
    }
});