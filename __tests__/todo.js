/* eslint-disable no-undef */
const todoList = require("../todo");
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();
describe("Checking my todolist", () => {
  test("checks creating a new todo", () => {
    //expect(all.length).toBe(0);
    let arr_len = all.length;
    add({
      title: "Clening",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(arr_len + 1);
  });
  test("checks Marking a todo as completed", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  test("checks retreival of all todos that are overdue", () => {
    let t_lists = overdue();
    expect(
      t_lists.every((t) => {
        return t.dueDate < new Date().toLocaleDateString("en-CA");
      })
    ).toBe(true);
  });
  test("checks retrieval of all todos that are dueToday", () => {
    let t_lists = dueToday();
    expect(
      t_lists.every((t) => {
        return t.dueDate === new Date().toLocaleDateString("en-CA");
      })
    ).toBe(true);
  });
  test("checks retrival of all todos that are dueLater", () => {
    let t_lists = dueLater();
    expect(
      t_lists.every((t) => {
        return t.dueDate > new Date().toLocaleDateString("en-CA");
      })
    ).toBe(true);
  });
});
