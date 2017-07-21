var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
    getInitialState: function () {
        return{
            count: 0,
            status: 'stopped'
        }
    },
    handleStatusChange: function (newStatus) {
        this.setState({status: newStatus});
    },
    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.status !== prevState.status) {
            switch (this.state.status) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({count: 0});
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    startTimer: function () {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            });
        }, 1000);
    },
    componentWillUnmount: function () {
        clearInterval(this.timer)
    },
    render: function () {
        var {count, status} = this.state;
        return (
            <div>
                <h1 className="page-title">Timer App</h1>
                <Clock totalSeconds={count}/>
                <Controls countdownStatus={status} onStatusChange={this.handleStatusChange}/>
            </div>
        )
    }
});

module.exports = Timer;