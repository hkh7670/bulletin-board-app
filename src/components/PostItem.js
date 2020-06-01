import React from "react";

class PostItem extends React.Component {
    handleRemove = () => {
        this.props.onRemove(this.props.row.no);
    };

    render() {
        return (
            <tr>
                <td>{this.props.row.no}</td>
                <td>{this.props.row.title}</td>
                <td>{this.props.row.writer}</td>
                <td>{this.props.row.date.toLocaleDateString("ko-KR")}</td>
                <td>
                    <button onClick={this.handleRemove}>X</button>
                </td>
            </tr>
        );
    }
}

export default PostItem;
