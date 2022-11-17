const todoList = () => {
  const all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    return all.filter(
      (item) => item.dueDate < new Date().toLocaleDateString("en-CA")
    );
  };

  const dueToday = () => {
    // Write the date check condition here and return the array of todo items that are due today accordingly.
    // fill your code here
    //   const returnValue = () =>{
    //     all.filter((item)=>item.dueDate===new Date().toLocaleDateString("en-CA"));
    //   }
    //   return returnValue;
    //return all.filter((item)=> item.dueDate==new Date().toLocaleDateString("en-CA"));
    return all.filter(
      (item) => item.dueDate == new Date().toLocaleDateString("en-CA")
    );
  };

  const dueLater = () => {
    // Write the date check condition here and return the array of todo items that are due later accordingly.
    // fill your code here
    return all.filter(
      (item) => item.dueDate > new Date().toLocaleDateString("en-CA")
    );
  };

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string as per the format given above.
    // fill your code here
    // return OUTPUT_STRING

    return list
      .map(
        (todo) =>
          `${todo.completed ? "[x]" : "[ ]"} ${todo.title} ${
            todo.dueDate == today ? "" : todo.dueDate
          }`
      )
      .join("\n").trim();
  };
  
  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};
// do not change anything below this line.#
module.exports = todoList;
