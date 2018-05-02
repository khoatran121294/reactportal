import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DemoUploadFiles.css';
import Dropzone from "react-dropzone";

class DemoUploadFiles extends Component {
    constructor() {
        super();
        this.state = { files: [] };
    }
    render() {
        const FileInRow = ({file}) => (
            <li>
                <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center'}}>
                    <a href={file.preview} target="_blank">{file.name} - {this.bytesToSize(file.size)}</a>
                    <i className="RemoveFileIcon fa fa-times" aria-hidden="true" onClick={this.removeTempFile.bind(this, file.id)}></i>
                </div>
            </li>
        );
        return (
            <div className="DemoUploadFiles">
                <h1>Demo upload files using <a href="https://react-dropzone.js.org/" target="_blank">React-Dropzone</a></h1>
                <section>
                    <Dropzone
                        onDrop={this.onDrop.bind(this)}
                        className="Dropzone">
                        <i className="fa fa-cloud-upload"></i>
                    </Dropzone>
                    <aside>
                        <h3>Dropped files</h3>
                        <ul>
                            {
                                this.state.files.map((f, i) => <FileInRow key={i} file={f} />)
                            }
                        </ul>
                    </aside>
                </section>
            </div>
        );
    }
    onDrop (_files) {
        const subFileId = (new Date()).getTime();
        this.setState({
            files: this.state.files.concat(_files.map((item, index) => {
                item.id = `${subFileId}_${index}`;
                return item
            }))
        });
    }

    bytesToSize (bytes) {
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes == 0) return '0 Byte';
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    }

    removeTempFile (_fileId) {
        this.setState({ files: this.state.files.filter(item => item.id !== _fileId) });
    }
}

const mapStateToProps = state => {
    return {
        state
    }
};
const mapDispatchToProps = dispatch => {
    return {
        dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DemoUploadFiles);
