({
    updateValue : function(component, event, helper) {
        var val = component.find("myInput").getElement().value;
        component.set("v.greeting", val);
    },
    
    navToRecord : function (component, event, helper) {
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": component.get("v.property.Id")
        });
        navEvt.fire();
    },
    editRecord : function(component, event, helper) {
        var editRecordEvent = $A.get("e.force:editRecord");
        editRecordEvent.setParams({
            "recordId": component.get("v.property.Id")
        });
        editRecordEvent.fire();
    }

})
