var React = require('react');
var expect = require('expect');
var ReactDOM = require('react-dom');
var TestUtilds = require('react-addons-test-utils');
var $ = require('jQuery');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
   if('should exist', ()=> {
       expect(CountdownForm.toExist());
   });
   if('should call onSetCountdown if valid seconds entered', () => {
       var spy = expect.createSpy();
       var countdownForm = TestUtilds.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
       var $el = $(ReactDOM.findDOMNode(countdownForm));

       countdownForm.refs.seconds.value = '109';
       TestUtilds.Simulate.submit($el.find('form')[0]);
       expect(spy).toHaveBeenCalledWith(109);
   });
});