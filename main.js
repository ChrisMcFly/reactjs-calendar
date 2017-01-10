var weekDays = [
  'Sun',
  'Mon',
  'Tue',
  'Wen',
  'Thu',
  'Fri',
  'Sat'
];

var months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

var CalendarApp = React.createClass({
  getInitialState: function() {
    var d = new Date();
    var date = d.toDateString();
    var dateArr = date.split(" ");
    return {
      date: date
    };
  },
  render: function() {
    return (
      <CalendarBody date={this.state.date}/>
    );
  }
});

var CalendarBody = React.createClass({
  render: function() {
    var prop = this.props.date;
    var yearArr = prop.split(" ");
    var year = yearArr[3];
    this.state = {
      date: year
    };
    return (
      <div className="container">
        <div className="col-xs-12">
          <h1>{this.state.date}</h1>
        </div>
        <div className="col-xs-12">
          <Month date={this.props.date}/>
        </div>
        <div className="col-xs-12">
          <WeekDay date={this.props.date}/>
        </div>
        <div className="col-xs-12">
          <DaysInMonth date={this.props.date}/>
        </div>
      </div>
    );
  }
});

var Month = React.createClass({
  render: function() {
    var dateArr = this.props.date.split(' ');
    var thisMonth = dateArr[1];
    return (
      <h1>{thisMonth}</h1>
    );
  }
});

var WeekDay = React.createClass({
  render: function() {
    var prop = this.props.date;
    var dateArr = prop.split(" ");
    var thisDay = dateArr[0];
    this.state = {
      date: thisDay
    };
    var thatDay = this.state.date.toString();
    var weekDay = weekDays.map(function(value, index) {
      var day = value.toString();
      var styles;
      styles = (day === thatDay) ? 'weekday highlight' : 'weekday';
      return (
        <div className={styles} data-attr={day}>
          <h2>{day}</h2>
        </div>
      );
    });
    return (
      <div>
        {weekDay}
      </div>
    );
  }
});

var DaysInMonth = React.createClass({
  render: function() {
    var currentYear = new Date().getYear();
    var currentMonth = new Date().getMonth() + 1;

    function getDays(year, month) {
      return new Date(year, month, 0).getDate();
    }
    var days = getDays(currentYear, currentMonth);
    var tmp = [];
    for (var i = 1; i <= days; i++) {
      tmp.push(i);
    }
    var daysMonth = tmp.map(function(day, index) {
      var currentDay = new Date().getDate();
      var styles;
      styles = (day === currentDay) ? 'weekday highlight' : 'weekday';
      return (
        <div className={styles} data-attr={day}>
          <h2>{day}</h2>
        </div>
      );
    });
    console.log(tmp);
    return (
      <h1>{daysMonth}</h1>
    );
  }
});

ReactDOM.render(
  <CalendarApp/>, document.getElementById('calendar')
);
