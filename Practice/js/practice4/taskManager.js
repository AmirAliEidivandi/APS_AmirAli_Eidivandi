const commands = ["new", "done", "delete", "list", "undone"];
const fs = require("fs");
const colors = require("colors");
const prompt = require("prompt");
const taskFileName = "tasks.json";

class TaskManager {
    constructor() {
        this.init();
    }

    tasks = [];

    init() {
        let taskFile = this.getOrCreateTask();
        this.tasks = JSON.parse(taskFile);
    }

    getOrCreateTask() {
        if (!fs.existsSync(taskFileName)) {
            fs.writeFileSync(taskFileName, JSON.stringify([]));
        }
        return fs.readFileSync(taskFileName, "utf-8");
    }

    printTasks() {
        this.tasks.map((task, index) => {
            if (task.done) {
                console.log(`${index} ${task.title}`.green);
            } else {
                console.log(`${index} ${task.title}`.red);
            }
        });
    }

    delete(taskIndex) {
        this.tasks.splice(taskIndex, 1);
        this.updateTaskFile();
    }

    setDone(taskIndex) {
        this.tasks[taskIndex].done = true;
        this.updateTaskFile();
    }

    undone(taskIndex) {
        this.tasks[taskIndex].done = false;
        this.updateTaskFile();
    }

    creatNewTask() {
        prompt.start();

        prompt.get(["task"], (err, result) => {
            let task = {
                title: result.task,
                timestamp: new Date().getTime(),
                done: false,
            };

            this.tasks.push(task);
            this.updateTaskFile();
        });
    }

    updateTaskFile() {
        fs.writeFile(taskFileName, JSON.stringify(this.tasks), function (err) {
            if (!err) {
                console.log("update file");
            }
        });
    }
}

module.exports = {
    commands,
    TaskManager,
};
