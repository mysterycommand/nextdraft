import { Component } from 'react';
import ReactDom from 'react-dom';
import { Editor, EditorState } from 'draft-js';

export default class TestEditor extends Component {
    constructor(props) {
        super(props);
        this.state = { editorState: EditorState.createEmpty() };
        this.onChange = editorState => this.setState({ editorState });
    }

    render() {
        return (
            <div>
                <h1>Test Editor</h1>
                <Editor
                    editorState={ this.state.editorState }
                    onChange={ this.onChange }
                />
            </div>
        );
    }
}
