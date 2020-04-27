import Ember from "ember";
import EmberObject, { computed } from '@ember/object';
export default Ember.Controller.extend({

  shifttab:"all",
  taskcount:0,
  check:1,

  shifttab_all:computed('shifttab',function(){

    return this.get('shifttab')=='all';
  }),

  shifttab_completed:computed('shifttab',function(){

    return this.get('shifttab')=='completed';
  }),

  shifttab_active:computed('shifttab',function(){

    return this.get('shifttab')=='active';
  }),

  check_function:computed('check',function(){
    console.log('hello');
    return this.get('check');
  }),

  actions:{
    additem(name,iscompleted){
      this.get('model').pushObject({name,iscompleted});
      let add=this.get('taskcount');
      add=add+1;
      Ember.set(this,'taskcount',add);

    }
,
    deleteitem(category){
      this.get('model').removeObject(category);
    }},

    toggle(object){
        let cal=this.get('taskcount');
        if(object.iscompleted==1){
          cal=cal+1;
          Ember.set(this,'taskcount',cal);
          Ember.set(object,'iscompleted',0);
          Ember.set(this,'check',0);
        }
        else{
          cal=cal-1;
          Ember.set(this,'taskcount',cal);
          Ember.set(object,'iscompleted',1);
          Ember.set(this,'check',1);
        }
      },

    clear(){
      let i=1,objects=this.get('model');
      let cal=this.get('taskcount');

      objects.forEach((item) => {

        if(item.iscompleted==1){
          objects.removeObject(item);
        }
      });
    },

    shifttab_fun(tab){
            Ember.set(this,'shifttab',tab);
          },





})
