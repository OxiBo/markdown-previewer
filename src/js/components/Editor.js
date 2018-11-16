import React from 'react';

const Editor = (props) => {

        const display = !props.expandPreviewer ? 'flex' : 'none';
        const styles = { display: display };

        return (
            <div>
              <div className={!props.expandEditor ? 'editor-container normal-editor' : 'editor-container expanded'} style={styles}>

                  <div className='editor-header'>
                     <h3>Editor</h3>
                     {!props.expandEditor ?
                     <i className="fas fa-expand-arrows-alt"
                     onClick={props.handleClickEditor}></i>
                     : <i className='fa fa-compress'
                     onClick={props.handleClickEditor}></i>}


                    </div>
                    <textarea
                    id='editor'
                    type='text'
                    value={props.value}
                    onChange={props.handleGetInput}>
                    </textarea>
                    </div>
                </div>
        )
}


export default Editor;
