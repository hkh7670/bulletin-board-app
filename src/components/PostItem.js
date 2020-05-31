import React from "react";

class PostItem extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.row.no}</td>
                <td>{this.props.row.title}</td>
                <td>{this.props.row.writer}</td>
                <td>{this.props.row.date.toLocaleDateString("ko-KR")}</td>
            </tr>
        );
    }
}

export default PostItem;