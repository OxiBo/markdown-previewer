import React from 'react';
import marked from 'marked';

export default class Previewer extends React.Component {

    getMarkdownText() {
        // to have links open in a new tab
        const renderer = new marked.Renderer();
        renderer.link = (href, title, text) => `<a target="_blank" href="${ href }" title="${ title }">${ text }</a>`;

        const rawMarkup = marked(this.props.previewText, { renderer: renderer, breaks: true, tables: true, sanitize: true });

        return { __html: rawMarkup };
    }

    render() {
        const display = !this.props.expandEditor ? 'block' : 'none';
        const styles = { display: display };

        return (
            <div>
                <div className={!this.props.expandPreviewer ? 'previewer-container normal-previewer' : 'previewer-container expanded'} style={styles}>

                <div className='editor-header'>
                    <h3>Previewer</h3>
                     {!this.props.expandPreviewer ?
                     <i className="fas fa-expand-arrows-alt"
                     onClick={this.props.handleClickPreviewer}></i>
                     : <i className='fa fa-compress'
                     onClick={this.props.handleClickPreviewer}></i>}

                </div>
                <div id='preview' dangerouslySetInnerHTML={this.getMarkdownText()}>

                </div>
                </div>
            </div>
        )
    }
}
