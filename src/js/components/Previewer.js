import React from 'react';
import marked from 'marked';

const Previewer = (props) => {

        const display = !props.expandEditor ? 'block' : 'none';
        const styles = { display: display };

        return (
            <div>
                <div className={!props.expandPreviewer ? 'previewer-container normal-previewer' : 'previewer-container expanded'} style={styles}>

                <div className='editor-header'>
                    <h3>Previewer</h3>
                     {!props.expandPreviewer ?
                     <i className="fas fa-expand-arrows-alt"
                     onClick={props.handleClickPreviewer}></i>
                     : <i className='fa fa-compress'
                     onClick={props.handleClickPreviewer}></i>}

                </div>
                <div id='preview' dangerouslySetInnerHTML={props.getMarkdownText()}>

                </div>
                </div>
            </div>
        )
}

export default Previewer
