# Goal

1. Use create-react-app to create a simple react application whose only visible UI component is a 60 pixel by 60 pixel blue circle with any kind of icon in the middle of it and a drop shadow.

2. Embed this React application into a static html page that has a decent amount of content in it. For example, you could save the homepage of https://kubernetes.io/ as a static html site and embed your react app into it. The visible UI component from #1 should appear fixed in the bottom left corner of the browser viewport.

3. Write a utility that runs inside the react app which accomplishes the following:
    a. When the page loads, the utility is triggered.

    b. Five seconds after a user stops scrolling, the utility is triggered. If a user starts scrolling again within the 5 seconds, the utility will not fire, but instead will start another 5 second wait period after the user stops scrolling again, i.e. the user has to completely stop scrolling for a full 5 seconds before the utility is triggered.

    c. When the utility is triggered, it will determine what text content is currently visible within the browser viewport.

    d. The utility will output the currently visible text content to the `console.log` in the following format:

    ```
    [
      {"<element name>": "<element text content>" },
      ...
    ]
    ```

    For example:
    ```
    [
      {"P": "text content of the p tag" },
      { "DIV": "text content of the div tag" },
      ...
    ]
    ```

4. The utility should capture all the text content currently visible in the viewport regardless of
what type of HTML element it is inside (e.g. “h1”, “div”, “p”, “a”, etc. are all valid). The utility
does not need to worry about html attributes.

You can use any extra libraries or utilities you think are appropriate including ui kits or helper
packages, though you are not required to use any extra libraries if you don't want to.
