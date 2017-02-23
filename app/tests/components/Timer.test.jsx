var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {

  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('handleSetCountdown', () => {
    it('should set state to started and timer active', () => {
      var countup = TestUtils.renderIntoDocument(<Timer/>);
      countup.handleSetCountdown(0);

      expect(countup.state.count).toBe(0);
      expect(countup.state.countdownStatus).toBe('started');

      setTimeout(() => {
        expect(countup.state.count).toBe(2);

      }, 2001)

    });

    it('should pause countdown on paused status', () => {

      var countup = TestUtils.renderIntoDocument(<Timer/>);
      countup.handleSetCountdown(3);
      countup.handleStatusChange('paused');

      setTimeout(() => {
        expect(countup.state.count).toBe(3);
        expect(countup.state.countdownStatus).toBe('paused');
      }, 1001);
    });

    it('should reset count on stopped', () => {

      var countup = TestUtils.renderIntoDocument(<Timer/>);
      countup.handleSetCountdown(3);
      countup.handleStatusChange('stopped');

      setTimeout(() => {
        expect(countup.state.count).toBe(0);
        expect(countup.state.countdownStatus).toBe('stopped');
      }, 1001);
    });

  });

});
