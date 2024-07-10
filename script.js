$(document).ready(function() {
    // Add Task
    $("#addBtn").click(function() {
      var taskText = $("#taskInput").val().trim();
      if (taskText !== "") {
        var taskItem = $("<li>", {
          class: "list-group-item task-item",
        });
        var taskTextElement = $("<span>", {
          class: "task-text",
          text: taskText,
        });
        var taskInput = $("<input>", {
          type: "text",
          class: "form-control",
          value: taskText,
        });
        var editButton = $("<button>", {
          class: "btn btn-primary btn-sm mr-2 edit-btn",
          text: "Edit",
        });
        var deleteButton = $("<button>", {
          class: "btn btn-danger btn-sm delete-btn",
          text: "Delete",
        });
        var saveButton = $("<button>", {
          class: "btn btn-success btn-sm save-btn",
          text: "Save",
        });
        var cancelButton = $("<button>", {
          class: "btn btn-secondary btn-sm cancel-btn",
          text: "Cancel",
        });

        taskItem.append(taskTextElement);
        taskItem.append(taskInput);
        taskItem.append(editButton);
        taskItem.append(deleteButton);
        taskItem.append(saveButton);
        taskItem.append(cancelButton);

        $("#taskList").append(taskItem);
        $("#taskInput").val("");
      }
    });

    // Edit Task
    $(document).on("click", ".edit-btn", function() {
      var taskItem = $(this).parent();
      taskItem.addClass("edit-mode");
      taskItem.find(".task-text").hide();
      taskItem.find("input").show();
      taskItem.find(".edit-btn, .delete-btn").hide();
      taskItem.find(".save-btn, .cancel-btn").show();
    });

    // Save Task
    $(document).on("click", ".save-btn", function() {
      var taskItem = $(this).parent();
      var taskText = taskItem.find("input").val().trim();
      if (taskText !== "") {
        taskItem.removeClass("edit-mode");
        taskItem.find(".task-text").text(taskText).show();
        taskItem.find("input").hide();
        taskItem.find(".edit-btn, .delete-btn").show();
        taskItem.find(".save-btn, .cancel-btn").hide();
      }
    });

    // Cancel Edit Task
    $(document).on("click", ".cancel-btn", function() {
      var taskItem = $(this).parent();
      taskItem.removeClass("edit-mode");
      taskItem.find(".task-text").show();
      taskItem.find("input").hide();
      taskItem.find(".edit-btn, .delete-btn").show();
      taskItem.find(".save-btn, .cancel-btn").hide();
    });

    // Delete Task
    $(document).on("click", ".delete-btn", function() {
      $(this).parent().remove();
    });
  });