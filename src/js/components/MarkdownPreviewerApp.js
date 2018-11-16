import React from 'react';
import Editor from './Editor';
import Previewer from './Previewer';
import marked from 'marked';

export default class MarkdownPreviewerApp extends React.Component {

    state = {
        input: this.props.input,
        expandEditor: false,
        expandPreviewer: false,
    }

    handleGetInput = (e) => {
        const input = e.target.value;
        this.setState(() => ({
            input: input,
        }))
    }

     getMarkdownText = () => {
        // to have links open in a new tab
        const renderer = new marked.Renderer();
        renderer.link = (href, title, text) => `<a target="_blank" href="${ href }" title="${ title }">${ text }</a>`;

        const rawMarkup = marked(this.state.input, { renderer: renderer, breaks: true, tables: true, sanitize: true });

        return { __html: rawMarkup };
    }

    handleClickEditor = () => {
        this.setState( {expandEditor: !this.state.expandEditor})
    }

    handleClickPreviewer = () => {
        this.setState( {expandPreviewer: !this.state.expandPreviewer})
    }

    render() {
        return (
            <div>
            <h1 style={{textAlign: "center"}}>Markdown Previewer</h1>

            <Editor
            value={this.state.input}
            handleGetInput={this.handleGetInput}
            expandEditor={this.state.expandEditor}
            expandPreviewer={this.state.expandPreviewer}
            handleClickEditor={this.handleClickEditor}/>
            <Previewer
            getMarkdownText={this.getMarkdownText}
            expandPreviewer={this.state.expandPreviewer}
            expandEditor={this.state.expandEditor}
            handleClickPreviewer={this.handleClickPreviewer}
            />
            </div>
        )
    }
}


MarkdownPreviewerApp.defaultProps = {
    input: `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == a && lastLine == x) {
    return multiLineCode;
  }
}
\`\`\`

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

Heres some code, \`<div></div>\`, between 2 backticks.

1. And there are numbererd lists too.
1. Use just 1s if you want!
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
    `
}
