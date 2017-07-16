var React = require('react');

var Clock = React.createClass({
   formatSecond: function (totalSecond) {
       var seconds = totalSecond%60;
       var minutes = Math.floor(totalSecond/60);
       if (seconds < 10) {
           seconds = '0' + seconds;
       }
       if (minutes < 10) {
           minutes = '0' + minutes;
       }

       return minutes + ':' + seconds;
   },

   render: function () {
       return (
           <div>

           </div>
       )
   }
});

module.exports = Clock;