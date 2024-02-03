using System.Globalization;

namespace ToDoListAPI.Model
{
    public class TaskItem
    {
        public int Id { get; set; }
        public string? NameTask { get; set; }
        public bool? IsCompleted { get; set; }
    }
}
