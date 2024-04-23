import React, { Component } from "react";
import Notification from "./Notification/Notification";
import FeedbackOptions from "./Feedback/Feedback";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  handleFeedback = event => {
    const { name } = event.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotal = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  countPercentage = ({ good, neutral, bad }) => {
    return Math.round((good / (good + neutral + bad)) * 100);
  };

  render() {
    const totalFeedback = this.countTotal(this.state);
    const positiveFeedback = this.countPercentage(this.state);
    const options = ['good', 'neutral', 'bad'];
    return (
      <>
      <Section title="Please leave feedback!">
        <FeedbackOptions options={options} onLeaveFeedback={this.handleFeedback} />
      </Section>
      <Section title="Statistics:">
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback!" />
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={totalFeedback}
            positivePercentage={positiveFeedback}
          />
        )}
      </Section>
    </>
    )
  }

};