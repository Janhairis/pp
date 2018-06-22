import React, { Component } from "react";

import BigCalendar from "react-big-calendar";
import styles from "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "../schedule.css";

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

class Schedule extends Component { 
    state = {
        events: [
          {
            start: new Date('June 23, 2018 23:15:00'),
            end: new Date(moment().add(1, "days")),
            title: "Some Class"
          }
        ]
      };
    
  render() {
   

    return (
      <div>
      
        <div class="RA">
          <h2>CLASS SCHEDULE</h2>
          <hr class="lineSch" />
        </div>
        <div class="calendar">
          <BigCalendar events={this.state.events} views={["week"]} defaultView={"week"} />
        </div>
        <hr class="overPic" />
        <div class="groupPic">
          <img
            src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/33873826_10156485374279577_1033585653603893248_n.jpg?_nc_cat=0&oh=a87da9ba1f8a6e87bcc3e79f30ffd6dc&oe=5BB7EFBB"
            class="picgroup"
            style={{ width: 55 + "%" }}
          />
        </div>
        <footer>
          {" "}
          Hi
          <br /> © HIRALDOS KAI SHOBUKAN SHOTOKAN KARATE-DO INTERNATIONAL{" "}
        </footer>
      </div>
    );
  }
}
export default Schedule;
