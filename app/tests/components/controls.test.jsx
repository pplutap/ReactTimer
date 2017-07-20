var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TextUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {
    it('should exists', ()=> {
        expect(Controls).toExist();
    });

    describe('render', () => {
       it('should render paused when started', ()=> {
           var controls = TextUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
           var $el = $(ReactDOM.findDOMNode(controls));
           var $pauseButton = $el.find('button:contains(Pause)');

           expect($pauseButton.length).toBe(1);
       });

        it('should render start when paused', ()=> {
            var controls = TextUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
            var $el = $(ReactDOM.findDOMNode(controls));
            var $pauseButton = $el.find('button:contains(Start)');

            expect($pauseButton.length).toBe(1);
        });
    });
});