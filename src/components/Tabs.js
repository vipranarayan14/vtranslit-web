import React, { Component } from 'react';

export class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.defaultTab
    };
  }

  onTabClick(label) {
    this.setState({
      activeTab: label
    });
  }

  render() {
    const { children, styles } = this.props;

    return (
      <div className={`${styles.Tabs ? styles.Tabs : 'Tabs'}`}>
        <div className={`${styles.TabHeader ? styles.TabHeader : 'TabHeader'}`}>
          {children.map((child, index) => {
            const { label } = child.props;

            return (
              <button
                className={`${styles.Tab ? styles.Tab : 'Tab'} ${
                  label === this.state.activeTab
                    ? styles.active
                      ? styles.active
                      : 'active'
                    : ''
                }`}
                key={index}
                onClick={() => this.onTabClick(label)}
              >
                {label}
              </button>
            );
          })}
        </div>
        <div
          className={`${styles.TabContent ? styles.TabContent : 'TabContent'}`}
        >
          {children.map(child => {
            if (child.props.label !== this.state.activeTab) {
              return null;
            }
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}
