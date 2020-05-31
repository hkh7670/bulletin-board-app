import React, { Component } from "react";
import PostItem from "./PostItem";
class PostList extends Component {
    state = {
        maxNo: 3,
        boards: [
            {
                no: 1,
                writer: "GyuHo Han",
                title: "제목1",
                date: new Date(),
            },
            {
                no: 2,
                writer: "GilDong Hong",
                title: "제목2",
                date: new Date(),
            },
        ],
    };
    handleSaveData = (data) => {
        this.setState({
            boards: this.state.boards.concat({
                no: this.state.maxNo++,
                date: new Date(),
                ...data,
            }),
        });
    };
    render() {
        const { boards } = this.state;
        return (
            <div>
                <BoardForm onSaveData={this.handleSaveData} />
                <table border="1">
                    <tbody>
                        <tr align="center">
                            <td width="50">No.</td> <td width="300">Title</td>
                            <td width="100">Name</td> <td width="100">Date</td>
                        </tr>
                        {boards.map((row) => (
                            <PostItem key={row.no} row={row} />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
class BoardForm extends Component {
    state = {};
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSaveData(this.state);
        this.setState({});
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="title"
                    name="title"
                    onChange={this.handleChange}
                />
                <input
                    placeholder="name"
                    name="writer"
                    onChange={this.handleChange}
                />
                <button type="submit">Save</button>
            </form>
        );
    }
}

export default PostList;
