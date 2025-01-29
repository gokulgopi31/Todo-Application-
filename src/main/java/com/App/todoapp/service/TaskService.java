package com.App.todoapp.service;


import com.App.todoapp.models.Task;
import com.App.todoapp.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {


    private final TaskRepository taskRepository;


    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }


    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    public Task updateTask(Long id,Task task) {
        return taskRepository.findById(id)
                .map(existingTask->{
                    existingTask.setTitle(task.getTitle());
                    existingTask.setCompleted(task.isCompleted());
                    return taskRepository.save(existingTask);
                }).orElseThrow(()->new RuntimeException("Task not found"));
    }

    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }
}
