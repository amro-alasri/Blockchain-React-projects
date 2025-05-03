// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TodoList {
    struct Task {
        uint256 id;
        string content;
        bool completed;
    }

    uint256 public taskCount;
    mapping(uint256 => Task) public tasks;

    event TaskCreated(uint256 id, string content);
    event TaskCompleted(uint256 id, bool completed);

    function createTask(string calldata _content) external {
        taskCount++;
        tasks[taskCount] = Task(taskCount, _content, false);
        emit TaskCreated(taskCount, _content);
    }

    function toggleCompleted(uint256 _id) external {
        Task storage task = tasks[_id];
        task.completed = !task.completed;
        emit TaskCompleted(_id, task.completed);
    }

    function getTask(
        uint256 _id
    ) external view returns (uint256, string memory, bool) {
        Task memory task = tasks[_id];
        return (task.id, task.content, task.completed);
    }
}
