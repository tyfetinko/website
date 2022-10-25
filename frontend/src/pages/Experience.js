import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {School,Work} from '@mui/icons-material';

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element-title"
          date="2015 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<Work/>}
        >
          <h3 className="vertical-timeline-element-title">
            Lawtons Drugs
          </h3>
          <p>Supervisor</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            Tech Support MMD Distributors
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Halifax, Nova Scotia
          </h4>
          <p>Developed solutions when problems arised.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
          Bachelor's of Applied Computer Science Degree
            
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
          Dalhousie University, Halifax, Nova Scotia
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>
     

      </VerticalTimeline>
    </div>
  );
}

export default Experience;