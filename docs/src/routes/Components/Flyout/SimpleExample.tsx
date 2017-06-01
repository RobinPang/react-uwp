import * as React from "react";
import * as PropTypes from "prop-types";

import Flyout from "react-uwp/Flyout";
import Button from "react-uwp/Button";
import FlyoutContent from "react-uwp/FlyoutContent";

export default class SimpleExample extends React.Component<{}, void> {
  static contextTypes = { theme: PropTypes.object };
  context: { theme: ReactUWP.ThemeType };

  render() {
    return (
      <Flyout>
        <Button>Your Content Component</Button>

        <FlyoutContent
          show={false}
          style={{ height: 40 }}
        >
          Your Top FlyoutContent
        </FlyoutContent>
        <FlyoutContent
          show={false}
          verticalPosition="bottom"
          style={{ height: 60 }}
          enterDelay={850}
        >
          Your Bottom FlyoutContent with delay 850ms
        </FlyoutContent>

      </Flyout>
    );
  }
}
