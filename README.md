# JavascriptUI
A simplified version of the SwiftUI concepts implemented in Javascript, which I labelled 'JavascriptUI'

Much like SwiftUI, I designed this small project to allow you to declare HTML application elements in a declarative fashion.  With this project you essentially initialize a UI class, and proceed to add Views to it, and each View can be combined with neighboring Views.  Once the views are all declared, the application will 'render' or create a series of DOM elements based on the Views it was given, and then the body of the HTML document will be replaced with these new nodes.

## Sample
<img src="http://www.tekcx.com/images/JS-UI-Sample.png">

Since I am not a native Javascript developer, I felt more comfortable declaring objects with the Class keyword, so you'll need to use 'new' to spin up an instance.

```javascript

let view = new UI();
view.add(new Span("This is the span text");

```

Like SwiftUI, it seemed sensible to name the classes after the DOM element they match or their function, so for a vertical stack you would use VStack, and for buttons you would use Button, and so on.

```javascript
view.add(
    new VStack ()
        .add(new Button ("Top"))
        .add(new Button ("Bottom"))
    );
```

Also like SwiftUI, simple tap or click events can be defined and can call out to other functions if needed.

```javascript
view.add(
  new Button("Click Me")
      .action(() => {
          console.log("I got clicked.");
      })
);
```

Presently the classes don't attempt to locate dependencies on computed data or variables, don't observe variables, and don't try to optimize the portions of the DOM that they are modifying.  These could be attempted by brighter minds than mine but since this is a conceptual project it seemed unnecessary at the outset.


## Goals
Right now, this is a fun project that helps me personally understand SwiftUI and reactive/declarative approaches a little better, so I didn't attempt to take the concept all the way through to a production-ready state.  However what I did provide is compact and clean and could be a good case study for others who want to examine the concepts behind the big brother versions of this tiny set of classes.

I hope you find this fun to browse and if you wish to fork or extend it you have my full support.
