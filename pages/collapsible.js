import React from "react";
import useCollapse from "react-collapsed";
import classes from "../styles/collapsible.module.css";
function Section(props) {
  const config = {
    defaultExpanded: props.defaultExpanded || false,
    collapsedHeight: props.collapsedHeight || 0,
  };
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
  return (
    <div className={classes.collapsible}>
      <div className={classes.header} {...getToggleProps()}>
        <div className={classes.title}>{props.title}</div>
        <div className={classes.icon}>
          <i
            className={"fas fa-chevron-circle-" + (isExpanded ? "up" : "down")}
          ></i>
        </div>
      </div>
      <div {...getCollapseProps()}>
        <div className={classes.content}>{props.children}</div>
      </div>
    </div>
  );
}
function Collapsible() {
  return (
    <div className={classes.preferences}>
      <Section title="General" defaultExpanded="true">
        <label>
          <input type="checkbox" /> Use dark theme
        </label>
        <label>
          <input type="checkbox" /> Use internet for work from Home.
          resources
        </label>
        <br />
        <br />
      </Section>
      <Section title="Application Startup">
        <label>
          <input type="checkbox" /> Open the application when you log into the
          computer
        </label>
        <br />
        <br />
        <br />
        <br />
      </Section>
      <Section title="Notifications" collapsedHeight="32">
        <i>
          Now you can get notifications to your smart watch!&nbsp;
          <a href="#">Learn more</a>
        </i>
        <br />
        <br />
        <label>
          <input type="checkbox" /> Notify me task statuses via SMS
        </label>
        <br />
        <br />
      </Section>
    </div>
  );
}
export default Collapsible;
