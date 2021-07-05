## Bugs & Issues

### Todo
- issue - right arrow navigation gets lost in the variable spans
- issue - undo does not support variable inputs
- issue - Firefox only - Linebreak does not update selection if after span element(Variable Block)
- issue - Firefox only - Cannot navigate inbetween or after span elements where there are no text elements
- issue - Firefox only - Carat does not show if selection is after span element without text element (Not sure we can fix this)

### Done
- Bug - format without selection crashes UI
- Bug - linebreak breaks variable and serializing functionality
- Bug - copy and paste can capture wrapping div elements breaking functionality - Add a cleanup after paste
- Bug - Firefox does not rebuild linebreaks when it mounts
- bug - new line does not at end carat displays in wrong position

## Functionality

### Todo
- Add x to remove variable value
- add format values to variables information
- Make example look nice

### Done
- Embed logic into a reusable react component
- Add character limits
- Carat position should update after variable is input
- Modern browser should be supported (chr/edge/ff)
- Maintain variables during copy and paste
- Highlight and format existing text
- Simple state that can be stringified/serialized
- Copy and paste support
- Support linebreaks (Browser behavior is wieeeerrddd)
- reload state on remount
- Insert text at carat (for emoji integration)
- Smart variables that can store display, preview, format and actual values
- Library up


### Project State

Currently the component is fully functioning with one small issue

- Adding a variable blocks and formatting text does not add to the browser undo stack

Basicly, the the exec commands don't work well, it is buggy and is inconsistent and across browsers, this has been implemented without ecec command, but exec command is the only way for it to add to the browser undo stack.

This chrome bug has caused most of my woes :( https://bugs.chromium.org/p/chromium/issues/detail?id=258512

I have implemented exec command functions, formatting works on chrome and edge, but adding variables creates very buggy behavior.

Possible resolutions are:

- Try to manipulate execCommand to make it work (Hack and add and removing elements to stop the buggy behavior, Ive tried so many things and chromes history stack always gets confused)
- Implement a custom undo stack - This is totally possible .... But it kind of goes against my project goals.

Exec command are flagged to be deprecated with some proposals for its replacement. This is edging me towards creating a custom undo stack. While its more effort it is less hacky.

Please feel free to contribute.