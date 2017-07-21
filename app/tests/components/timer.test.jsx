var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TextUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
    it('should exist', () => {
        expect(Timer).toExist();
    });

    it('should start counting after pressing start', (done) => {
        var timer = TextUtils.renderIntoDocument(<Timer/>);
        timer.handleStatusChange('started');

        setTimeout(() => {
            expect(timer.state.count).toBe(3);
            done()
        }, 3001);
    });

    it('should stop counting after pressing pause', (done) => {
       var timer = TextUtils.renderIntoDocument(<Timer/>);
       timer.state.count = 10;
       timer.handleStatusChange('paused');

       setTimeout(() => {
           expect(timer.state.count).toBe(10);
           done();
       }, 3001);
    });

    it('should reset timer after pressing clear', (done) => {
       var timer = TextUtils.renderIntoDocument(<Timer/>);
       timer.state.count = 10;
       timer.handleStatusChange('started');
       timer.handleStatusChange('stopped');

       setTimeout(() => {
           expect(timer.state.count).toBe(0);
           expect(timer.state.status).toBe('stopped');
           done();
       }, 1001)
    });
});