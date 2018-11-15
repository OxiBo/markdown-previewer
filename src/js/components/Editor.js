import React from 'react';

export default class Editor extends React.Component {

    getInput = (event) => {
        const input = event.target.value;
        this.props.handleGetInput(input);
    }


    render() {
        const display = !this.props.expandPreviewer ? 'flex' : 'none';
        const styles = { display: display };

        return (
            <div>
              <div className={!this.props.expandEditor ? 'editor-container normal-editor' : 'editor-container expanded'} style={styles}>

                  <div className='editor-header'>
                     <h3>Editor</h3>
                     {!this.props.expandEditor ?
                     <i className="fas fa-expand-arrows-alt"
                     onClick={this.props.handleClickEditor}></i>
                     : <i className='fa fa-compress'
                     onClick={this.props.handleClickEditor}></i>}


                    </div>
                    <textarea
                    id='editor'
                    type='text'
                    value={this.props.value}
                    onChange={this.getInput}>
                    </textarea>
                    </div>
                </div>
        )
    }
}
