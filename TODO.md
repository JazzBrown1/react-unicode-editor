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
- Add character limits
- add format values to variables information
- Make example look nice
- Keep range after format ? Very Low

### Done
- Embed logic into a reusable react component
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
